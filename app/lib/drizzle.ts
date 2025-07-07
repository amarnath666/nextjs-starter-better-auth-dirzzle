
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { UsersTable } from './schema'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' }) // Remove SSL for docker postgres image

export type User = InferSelectModel<typeof UsersTable>
export type NewUser = InferInsertModel<typeof UsersTable>

// Connect to  Postgres
export const db = drizzle(sql)
