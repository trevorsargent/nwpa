import { error } from '@sveltejs/kit'
import type { Performance } from '$lib/models//entities/performance'
import type { Maker } from '$lib/models/entities/maker'
import { query } from '$lib/clients/surreal.client'
import type { PageServerLoad } from './$types'
import { getImagesForPerformance, s3 } from '$lib/clients/s3.client'

export const load = (async ({ params }: { params: { id: string } }) => {
	const performance = await query<Performance>(`performance:${params.id}`)
	if (!performance) {
		throw error(404)
	}

	const images = await getImagesForPerformance(params.id)

	return {
		performance: performance satisfies Performance,
		images,
		makers: [] as Maker[]
	}
}) satisfies PageServerLoad
