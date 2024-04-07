export type ID = string

export type Unique = {
	id: ID
}

export type Named = {
	name: string
}

export type Args<T extends Unique> = Omit<T, keyof Unique>
