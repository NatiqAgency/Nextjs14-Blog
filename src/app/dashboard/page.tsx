import { Author } from "@/components/Post/Author";
import { MapPosts } from "@/components/Post/MapPosts";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Dashboard() {
	const posts = await prisma.post.findMany({ include: { author: true, tag: true } })

	return (
		<main className="flex-1 pt-6">
			<div className="relative pt-[50%] rounded-xl bg-secondary-900 overflow-hidden">
				<Image
					className="object-cover"
					src={'/images/main.jpg'}
					alt="main"
					fill
				/>
			</div>
			<div className="relative bg-white left-16 -top-44 flex flex-col items-start rounded-xl shadow-md p-10 w-[37rem]">
				<div className="bg-primary py-1 px-2 rounded-md mb-4">
					{posts[0].tag.title}
				</div>
				<div className="mb-6">
					{posts[0].title}
				</div>
				<div className="flex flex-row items-center text-secondary-400">
					<Author post={posts[0]} />
				</div>
			</div>
			<div className="mb-8">
				<div className="text-2xl font-bold mb-8">
					Latest Post
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
