import { redirect } from 'next/navigation'
import { auth } from '@/lib/auth'

// export const runtime = 'edge'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session = await auth()

    if (!session) redirect('/')

    return (
        <>
            {children}
        </>
    )
}
