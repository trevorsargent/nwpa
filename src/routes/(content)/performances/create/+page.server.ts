import { getSurreal } from '$lib/clients/surreal.client'
import { redirect } from '@sveltejs/kit'

export const load = async () => {
	const result = await (await getSurreal()).create('performance')

	const performance = result.shift()

	if (!performance) {
		throw redirect(303, '/performances')
	}

	const id = performance.id.split(':')[1]

	throw redirect(303, `/performances/${id}/edit`)
}
