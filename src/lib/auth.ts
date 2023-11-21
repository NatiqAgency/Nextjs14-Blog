import NextAuth from 'next-auth';
import Github from 'next-auth/providers/github';
import { db } from '../db/drizzle';
import { DrizzleAdapter } from '@auth/drizzle-adapter';

export const {
    handlers: { GET, POST },
    auth
} = NextAuth({
    adapter: DrizzleAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        Github({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        })
    ],
    callbacks: {
        async redirect({ url, baseUrl }) {
            return url.startsWith(baseUrl) ? url : baseUrl;
        },
        async session({ session, token, user }) {
            session = {
                ...session,
                user: {
                    id: user.id,
                    ...session.user
                }
            };
            return session;
        }
    },
    pages: {
        signIn: '/',
        newUser: '/'
    }
});
