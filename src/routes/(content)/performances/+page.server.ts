import { queryList } from '$lib/clients/surreal.client'
import type { Performance } from '$lib/models/entities/performance'

export const load = async () => {
	const performances = queryList<Performance>('select * from performance')
	return {
		performances
	}
}
