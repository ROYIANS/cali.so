import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { env } from '~/env.mjs'

// create the connection
const connection = await mysql.createConnection({
  database: env.DATABASE_SCHEMA,
  host: env.DATABASE_HOST,
  password: env.DATABASE_PASSWORD,
  port: env.DATABASE_PORT ? Number(env.DATABASE_PORT) : 3306,
  user: env.DATABASE_USERNAME
})

export const db = drizzle(connection)
