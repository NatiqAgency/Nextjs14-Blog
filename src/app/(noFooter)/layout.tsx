import Header from '@/components/Header'
import { Work_Sans } from 'next/font/google'
import Container from '@/components/Container'
import { ThemeProvider } from '@/providers/ThemeProvider'
import SessionProvider from '@/providers/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import '@/styles/global.css'

const work = Work_Sans({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions)

	if (!session) redirect('/')

	return (
		<html lang="en">
			<body className={`${work.className} bg-white dark:bg-secondary-900`}>
				<SessionProvider session={session}>
					<ThemeProvider>
						<Container>
							<Header />
							{children}
						</Container>
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	)
}
