import { config } from 'dotenv';
config();

import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './app/lib/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
})