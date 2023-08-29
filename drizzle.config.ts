import * as dotenv from 'dotenv'
import type { Config } from 'drizzle-kit'
dotenv.config()

export default {
  driver: 'mysql2',
  schema: './db/schema.ts',
  out: './db/migrations',
  dbCredentials: {
    user: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    host: process.env.DATABASE_HOST || '',
    database: process.env.DATABASE_SCHEMA || '',
    port: process.env.DATABASE_PORT || 3306,
  },
} satisfies Config
