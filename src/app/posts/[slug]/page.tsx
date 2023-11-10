import Image from 'next/image'
import md from 'markdown-it';
import { prisma } from '@/lib/prisma';
import moment from 'moment';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

type Props = {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = await prisma.post.findFirst({ where: { slug: params.slug }, include: { author: true, tag: true } })

	if (!post) {
		notFound();
	}

	return {
		title: post.title,
	}
}

export default async function BlogPage({ params }: Props) {

	const post = await prisma.post.findFirst({ where: { slug: params.slug }, include: { author: true, tag: true } })

	if (!post) notFound()

	const cleanContent = post.content.replace(/\\n/g, '\n');
	const matterResult = matter(cleanContent);
	const renderedContent = md({ html: true, breaks: true }).render(matterResult.content);

	return (
		<div className="px-52">
			<div className="bg-white flex flex-col items-start p-10">
				<div className="bg-primary py-1 px-2 rounded-md mb-4">
					{post.tag.title}
				</div>
				<div className="mb-5 font-semibold text-4xl">
					{post.title}
				</div>
				<div className="flex flex-row items-center text-secondary-400 mb-8">
					<div className="relative w-9 h-9 rounded-full overflow-hidden">
						<Image
							className="object-cover"
							src={'/images/profile_pic.jpg'}
							alt="profile_pic"
							fill
						/>
					</div>
					<div className="ml-2">
						{post.author.name}
					</div>
					<div className='ml-6'>
						{moment(post.createdAt).toString()}
					</div>
				</div>
				<div className='relative pt-[50%] rounded-xl bg-secondary-900 overflow-hidden w-full mb-8'>
					<Image
						src={'/images/post.jpg'}
						alt={post.slug}
						fill
					/>
				</div>
				<div
					className='font-normal text-xl markdown'
					dangerouslySetInnerHTML={{ __html: renderedContent }}
				>
				</div>
			</div>
		</div>
	)
}
