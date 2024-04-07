import { error } from '@sveltejs/kit'
import type { Performance } from '$lib/models//entities/performance'
import type { Maker } from '$lib/models/entities/maker'
import { query } from '$lib/surreal/surreal.client'
import type { PageServerLoad } from './$types'

export const load = (async ({ params }: { params: { id: string } }) => {
	const performance = await query<Performance>(`performance:${params.id}`)
	if (!performance) {
		throw error(404)
	}

	return {
		performance: performance satisfies Performance,
		makers: [] as Maker[]
	}
}) satisfies PageServerLoad
