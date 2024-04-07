import { error, redirect } from '@sveltejs/kit'
import type { Performance } from '$lib/models//entities/performance'
import type { Maker } from '$lib/models/entities/maker'
import type { Discipline } from '$lib/models/entities/discipline'
import { getClient, query, queryList } from '$lib/surreal/surreal.client'
import type { Actions, PageServerLoad } from './$types'

export const load = (async ({ params }: { params: { id: string } }) => {
	const performance = await query<Performance>(`select * from performance:${params.id}`)
	const makers = (await queryList<Maker>('SELECT * from maker')) ?? []
	if (!performance) {
		throw error(404)
	}

	return {
		performance: performance satisfies Performance,
		makers: [
			{
				discipline: [{ id: '#', name: 'Lighting Design' }],
				id: '#',
				name: 'Alan Alda'
			},
			{
				discipline: [
					{ id: '#', name: 'Set Design' },
					{ id: '#', name: 'Costume Design' }
				],
				id: '#',
				name: 'Baker Breaker'
			}
		] satisfies (Maker & { discipline: Discipline[] })[],
		allMakers: makers
	}
}) satisfies PageServerLoad

export const actions = {
	submit: async ({ request, params }) => {
		const data = await request.formData()

		const title = data.get('title') ?? undefined
		const subtitle = data.get('subtitle') ?? undefined
		const description = data.get('description') ?? undefined

		const update = {
			title,
			subtitle,
			description
		}

		;(await getClient()).update(`performance:${params.id}`, update)

		throw redirect(303, `/performances/${params.id}`)
	}
} satisfies Actions
