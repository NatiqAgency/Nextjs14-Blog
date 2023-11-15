import { MapPosts } from "@/components/Post/MapPosts";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: 'Dashboard',
	description: 'Manage your account and your posts',
}

export default async function Dashboard() {
	const session = await auth()
	const posts = await prisma.post.findMany({ where: { author: { email: session?.user?.email } }, include: { author: true, tag: true } })

	return (
		<main className="flex-1 pt-6">
			<div className="mb-8">
				<div className="flex flex-row items-center text-2xl font-bold mb-8">
					My posts
					<Link
						href="/dashboard/create"
						className="py-3 px-5 text-base bg-[#4B6BFB] text-white rounded-md cursor-pointer hover:bg-[#3b56cc] transition-all ml-4"
					>
						Create post
					</Link>
				</div>
				<div className={`grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 items-start`}>
					<MapPosts posts={posts} edit />
				</div>
			</div>
			<div className="mb-24 flex justify-center">
				<button className="py-3 px-5 text-secondary-500 border-2 border-secondary-500 rounded-md">
					See more
				</button>
			</div>
		</main>
	)
}
