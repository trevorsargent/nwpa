import Surreal from 'surrealdb.js'
import { env } from '$env/dynamic/private'

const { DB_HOST, DB_PORT, DB_USER, DB_PSWD, DB_NAME } = env
let db: Surreal

export const getClient = async (): Promise<Surreal> => {
	const path = `ws://${DB_HOST}:${DB_PORT}/rpc`
	console.debug('connecting to db at', path, 'with', DB_USER, DB_PSWD)

	if (!db) {
		db = new Surreal()

		await db.connect(path, { namespace: 'nwpa', database: 'nwpa' })

		await db.signin({
			username: DB_USER!,
			password: DB_PSWD!,
			database: DB_NAME!,
			namespace: 'default'
		})
	}
	return db
}

export const query = async <T>(thing: string): Promise<T | undefined> => {
	const string = `select * from ${thing}`

	const c = await getClient()
	const x = await c.query(string)
	const items = x.shift() as T[]

	if (items.length > 1) {
		throw new Error('query returned more than one item')
	}

	return items.shift() as T
}

export const queryList = async <T>(string: string): Promise<T[] | undefined> => {
	const c = await getClient()
	const x = await c.query(string)

	return x.shift() as T[]
}
