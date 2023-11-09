import { MapArticles } from "@/components/Article/MapArticle";
import Image from "next/image";

export default function Home() {
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
					Technology
				</div>
				<div className="mb-6">
					The Impact of Technology on the Workplace: How Technology is Changing
				</div>
				<div className="flex flex-row items-center text-secondary-400">
					<div className="relative w-9 h-9 rounded-full overflow-hidden">
						<Image
							className="object-cover"
							src={'/images/profile_pic.jpg'}
							alt="profile_pic"
							fill
						/>
					</div>
					<div>
						Jason Francisco
					</div>
					<div>
						August 20, 2022
					</div>
				</div>
			</div>
			<div className="mb-8">
				<div className="text-2xl font-bold mb-8">
					Latest Post
				</div>
				<div className="grid grid-cols-auto-fit gap-5 items-start">
					<MapArticles articles={articles} />
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
