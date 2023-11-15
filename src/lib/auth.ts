import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import prisma from './prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const {
    handlers: { GET, POST },
    auth
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ]
});
