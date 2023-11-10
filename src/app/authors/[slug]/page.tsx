import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MapArticles } from '@/components/Article/MapArticle';

type Props = {
	params: {
		slug: string
	}
}

type Links = {
	youtube?: string;
	instagram?: string;
	facebook?: string;
	twitter?: string;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const author = await prisma.user.findFirst({ where: { slug: params.slug } })

	if (!author) notFound();

	return {
		title: author.name,
	}
}

export default async function AuthorPage({ params }: Props) {

	const articles = [
		{
			id: 1,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 2,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 3,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 4,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 5,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 6,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		}, {
			id: 7,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 8,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 9,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 10,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 11,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		},
		{
			id: 12,
			tag: "technology",
			title: "The Impact of Technology on the Workplace: How Technology is Changing",
			slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
			createdAt: "August 20, 2022",
			author: "Jason Francisco"
		}
	]

	const author = await prisma.user.findFirst({ where: { slug: params.slug } })

	if (!author) notFound()

	const links = author.links as Links;

	return (
		<div>
			<div className="bg-secondary-50 rounded-lg p-12 mb-12">
				<div className='flex flex-col justify-center items-center px-[25%]'>
					<div className='flex flex-row gap-4 mb-6'>
						<div className='relative rounded-full w-16 h-16 overflow-hidden'>
							<Image
								src={'/images/profile_pic.jpg'}
								alt="author_profile_pic"
								fill
							/>
						</div>
						<div className='flex flex-col justify-center'>
							<div className='font-medium text-xl text-secondary-800'>
								{author.name}
							</div>
							<div className='font-normal text-sm text-secondary-500'>
								{author.job}
							</div>
						</div>
					</div>
					<div className='text-center text-secondary-600 text-lg font-normal mb-6'>
						{author.bio}
					</div>
					<div className='flex flex-row gap-2'>
						{
							links?.facebook && (
								<Link
									className='block p-2 bg-secondary-500 rounded-md text-white'
									href={links.facebook}
								>
									<FaFacebook />
								</Link>
							)
						}
						{links?.twitter && (
							<Link
								className='block p-2 bg-secondary-500 rounded-md text-white'
								href={links.twitter}
							>
								<FaTwitter />
							</Link>
						)}
						{links?.instagram && (
							<Link
								className='block p-2 bg-secondary-500 rounded-md text-white'
								href={links.instagram}
							>
								<FaInstagram />
							</Link>
						)}
						{links?.youtube && (
							<Link
								className='block p-2 bg-secondary-500 rounded-md text-white'
								href={links.youtube}
							>
								<FaYoutube />
							</Link>
						)}
					</div>
				</div>
			</div>
			<div className='mb-24'>
				<div className="text-2xl font-bold mb-8">
					Latest Post
				</div>
				<div className="grid grid-cols-auto-fit gap-5 items-start">
					<MapArticles articles={articles} />
				</div>
			</div>
		</div>
	)
}
