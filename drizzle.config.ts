import 'dotenv/config';
import type { Config } from 'drizzle-kit';

export default {
    schema: './src/db/schemas/*',
    out: './drizzle/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRES_PRISMA_URL!
    }
} satisfies Config;
