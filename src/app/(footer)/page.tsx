import { Author } from "@/components/Post/Author";
import { MapPosts } from "@/components/Post/MapPosts";
import { Redirect } from "@/components/Redirect";
import Image from "next/image";
import { Metadata } from "next";
import { db } from "@/db";

export const metadata: Metadata = {
	title: 'MetaBlog',
	description: 'Unleash you knowledge',
}

export default async function Home() {
	const posts = await db.query.posts.findMany({ with: { author: true, tag: true } })

	return (
		<main className="flex-1 pt-6">
			{
				posts.length === 0 ? (
					<div className="flex justify-center items-center h-[50vh] -mt-6">
						<p>No post yet</p>
					</div>
				) : (
					<>
						<div className="transition-all duration-75 animate-fade">
							<div className="relative pt-[50%] rounded-xl bg-secondary-900 overflow-hidden">
								<Image
									className="object-cover"
									src={'/images/main.jpg'}
									alt="main"
									fill
								/>
							</div>
							<Redirect
								href={`/posts/${posts[0].slug}`}
								className="relative bg-white left-16 -top-44 -mb-44 flex flex-col items-start rounded-xl shadow-md p-10 w-[37rem] cursor-pointer"
							>
								<div className="bg-primary py-1 px-2 rounded-md mb-4">
									{posts[0].tag.title}
								</div>
								<div className="mb-6">
									{posts[0].title}
								</div>
								<div className="flex flex-row items-center text-secondary-400">
									<Author post={posts[0]} />
								</div>
							</Redirect>
						</div>
						<div className="mb-8 mt-20">
							<p className="text-2xl font-bold mb-8">
								Latest Post
							</p>
							<div className={`grid grid-flow-row grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-5 items-start`}>
								{
									posts.length > 0 ? (
										<MapPosts posts={posts} />
									) : (
										<p>No post yet</p>
									)
								}
							</div>
						</div>
						<div className="mb-24 flex justify-center">
							<button className="py-3 px-5 text-secondary-500 border-2 border-secondary-500 rounded-md">
								See more
							</button>
						</div>
					</>
				)
			}
		</main >
	)
}
