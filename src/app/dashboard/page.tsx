import { Author } from "@/components/Post/Author";
import { MapPosts } from "@/components/Post/MapPosts";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Dashboard() {
	const posts = await prisma.post.findMany({ include: { author: true, tag: true } })

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
				<div className={`grid grid-cols-auto-fit gap-5 items-start`}>
					<MapPosts posts={posts} />
				</div>
			</div>
			<div className="mb-24 flex justify-center">
				<button className="py-3 px-5 text-secondary-500 border-2 border-secondary-500 rounded-md">
					View All Post
				</button>
			</div>
		</main>
	)
}
