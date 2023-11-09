import matter from 'gray-matter'
import Image from 'next/image'
import md from 'markdown-it';

type Props = {
	params: {
		slug: string
	}
}


export default function BlogPage({ params }: Props) {
	const article = {
		id: 1,
		tag: "technology",
		title: "The Impact of Technology on the Workplace: How Technology is Changing",
		slug: "the_impact_of_technology_on_the_workplace_how_technology_is_changing",
		createdAt: "August 20, 2022",
		author: "Jason Francisco",
		content: `Traveling is an enriching experience that opens up new horizons, exposes us to different cultures, and creates memories that last a lifetime. However, traveling can also be stressful and overwhelming, especially if you don't plan and prepare adequately. In this blog article, we'll explore tips and tricks for a memorable journey and how to make the most of your travels.
One of the most rewarding aspects of traveling is immersing yourself in the local culture and customs. This includes trying local cuisine, attending cultural events and festivals, and interacting with locals. Learning a few phrases in the local language can also go a long way in making connections and showing respect.
# Research Your Destination
Before embarking on your journey, take the time to research your destination. This includes understanding the local culture, customs, and laws, as well as identifying top attractions, restaurants, and accommodations. Doing so will help you navigate your destination with confidence and avoid any cultural faux pas.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
# Plan Your Itinerary
While it's essential to leave room for spontaneity and unexpected adventures, having a rough itinerary can help you make the most of your time and budget. Identify the must-see sights and experiences and prioritize them according to your interests and preferences. This will help you avoid overscheduling and ensure that you have time to relax and enjoy your journey.

Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
> Traveling can expose you to new environments and potential health risks, so it's crucial to take precautions to stay safe and healthy.
`
	}


	return (
		<div className="px-52">
			<div className="bg-white flex flex-col items-start p-10">
				<div className="bg-primary py-1 px-2 rounded-md mb-4">
					{article.tag}
				</div>
				<div className="mb-5 font-semibold text-4xl">
					{article.title}
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
						{article.author}
					</div>
					<div className='ml-6'>
						{article.createdAt}
					</div>
				</div>
				<div className='relative pt-[50%] rounded-xl bg-secondary-900 overflow-hidden w-full mb-8'>
					<Image
						src={'/images/post.jpg'}
						alt={article.slug}
						fill
					/>
				</div>
				<div
					className='font-normal text-xl markdown'
					dangerouslySetInnerHTML={{ __html: md({ html: true, breaks: true }).render(article.content) }}
				>
				</div>
			</div>
		</div>
	)
}
