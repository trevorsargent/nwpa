import type { ID, Unique } from '../base'

export type Job = Unique & {
	makerId: ID
	disciplineIds: ID[]
}
