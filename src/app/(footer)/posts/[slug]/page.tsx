import Image from 'next/image'
import md from 'markdown-it';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Author } from '@/components/Post/Author';
import { db } from '@/db';

type Props = {
	params: {
		slug: string
	}
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const post = await db.query.posts.findFirst({
		where: (post, { eq }) => eq(post.slug, params.slug),
		with: {
			author: true,
			tag: true
		}
	})

	if (!post) notFound();

	return { title: `MetaBlog | ${post.title}` }
}

export default async function BlogPage({ params }: Props) {

	const post = await db.query.posts.findFirst({
		where: (post, { eq }) => eq(post.slug, params.slug),
		with: {
			author: true,
			tag: true
		}
	})

	if (!post) notFound()

	const cleanContent = post.content.replace(/\\n/g, '\n');
	const matterResult = matter(cleanContent);
	const renderedContent = md({ html: true, breaks: true }).render(matterResult.content);

	return (
		<main className="md:lg:px-52">
			<div className="bg-white flex flex-col items-start p-10">
				<div className="bg-primary py-1 px-2 rounded-md mb-4">
					{post.tag.title}
				</div>
				<div className="mb-5 font-semibold text-4xl">
					{post.title}
				</div>
				<Author post={post} className='mb-8' />
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
		</main>
	)
}
