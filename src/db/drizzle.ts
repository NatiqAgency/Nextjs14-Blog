import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schemas';

const queryClient = postgres(process.env.POSTGRES_PRISMA_URL!);
export const db = drizzle(queryClient, { schema });
