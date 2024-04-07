import { error, redirect } from '@sveltejs/kit'
import type { Performance } from '$lib/models//entities/performance'
import { getSurreal, query } from '$lib/clients/surreal.client'
import type { Actions, PageServerLoad } from './$types'
import { getImagesForPerformance, s3 } from '$lib/clients/s3.client'
import { S3_BUCKET } from '$env/static/private'

export const load = (async ({ params }: { params: { id: string } }) => {
	const performance = await query<Performance>(`select * from performance:${params.id}`)
	if (!performance) {
		throw error(404)
	}

	const images = await getImagesForPerformance(params.id)

	return {
		performance: performance satisfies Performance,
		images
	}
}) satisfies PageServerLoad

export const actions = {
	submit: async ({ request, params }) => {
		const data = await request.formData()

		const title = data.get('title') ?? undefined
		const subtitle = data.get('subtitle') ?? undefined
		const description = data.get('description') ?? undefined

		const files = data.getAll('file') as File[]

		const imagesToKeep = data.getAll('keep')

		// delete images
		const images = await getImagesForPerformance(params.id)

		const imagesToDelete = images.filter((image) => !imagesToKeep.includes(image.name))

		await Promise.all(
			imagesToDelete.map(async ({ name }) => {
				await s3.removeObject(S3_BUCKET, name, { forceDelete: true })
			})
		)

		const fileInfos = await Promise.all(
			files
				.filter((f) => f.size > 0)
				.map(async (file) => {
					const fileData = await file.arrayBuffer()
					const name = file.name
					const type = file.type
					const size = file.size
					return { name, type, fileData, size }
				})
		)

		// upload to s3
		await Promise.all(
			fileInfos.map(async ({ name, type, fileData }) => {
				const key = `performance:${params.id}:${name}`
				await s3.putObject(S3_BUCKET, key, Buffer.from(fileData), { 'Content-Type': type })
				return key
			})
		)

		const update = {
			title,
			subtitle,
			description
		}

		;(await getSurreal()).update(`performance:${params.id}`, update)

		throw redirect(303, `/performances/${params.id}`)
	}
} satisfies Actions
