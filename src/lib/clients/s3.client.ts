import { env } from '$env/dynamic/private'
import { Client } from 'minio'

const { S3_ACCESS_KEY, S3_SECRET_KEY, S3_BUCKET, S3_ENDPOINT } = env

if (!S3_ACCESS_KEY || !S3_SECRET_KEY || !S3_BUCKET || !S3_ENDPOINT) {
	throw new Error('Missing S3 environment variables')
}

export const s3 = new Client({
	endPoint: S3_ENDPOINT,
	accessKey: S3_ACCESS_KEY,
	secretKey: S3_SECRET_KEY,
	useSSL: true
})

s3.bucketExists(S3_BUCKET, (err, exists) => {
	if (err) {
		throw err
	}
	if (!exists) {
		s3.makeBucket(S3_BUCKET)
	}
})

export const getImagesForPerformance = (performanceId: string) => {
	return s3
		.listObjects(S3_BUCKET, `performance:${performanceId}`)
		.toArray()
		.then((ids) =>
			ids.map(({ name }) => {
				return {
					name,
					url: s3.presignedGetObject(S3_BUCKET, name)
				}
			})
		)
}
