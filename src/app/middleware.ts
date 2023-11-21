import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const session = await auth();
    if (!session) redirect('/');
}

export const config = {
    matcher: '/dashboard/:path*'
};
