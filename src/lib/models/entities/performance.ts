import type { Named, Unique } from '../base'

export type Performance = {
	title: string
	subtitle?: string
	description?: string
} & Unique
