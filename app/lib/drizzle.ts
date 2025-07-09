import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' }) // Remove SSL for docker postgres image

// Connect to  Postgres
export const db = drizzle(sql)
