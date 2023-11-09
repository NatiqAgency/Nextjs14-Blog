"use client";
import { Plus_Jakarta_Sans } from "next/font/google";
const work = Plus_Jakarta_Sans({ subsets: ["latin"] });

import Image from "next/image";
import { useState } from "react";

export default function Footer() {
	const [email, setEmail] = useState("");

	return (
		<footer
			className={`w-full bg-[#F6F6F7] px-80 flex justify-start items-start flex-col ${work.className} leading-6`}
		>
			<div className="flex flex-row justify-between items-start py-16 w-full">
				<div className="flex justify-start items-start flex-col max-w-[280px]">
					<h3 className="font-bold text-[#141624] text-lg">About</h3>
					<p className="text-base text-[#696A75] mt-3">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam
					</p>
					<p className="mt-6 text-base text-[#3B3C4A]">
						<span className="font-bold text-[#181A2A]">Email:</span>{" "}
						info@jstemplate.net
					</p>
					<p className="mt-0 text-base text-[#3B3C4A]">
						<span className="font-bold text-[#181A2A]">Phone:</span>{" "}
						880 123 456 789
					</p>
				</div>
				<div className="flex justify-center items-start flex-row flex-grow">
					<div className="px-10">
						<h3 className="font-bold text-[#181A2A] text-lg">
							Quick Link
						</h3>
						<ul className="flex flex-col justify-start items-start mt-6">
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Home
								</a>
							</li>
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									About
								</a>
							</li>
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Blog
								</a>
							</li>
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Archived
								</a>
							</li>
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Author
								</a>
							</li>
							<li className="text-base text-[#3B3C4A]">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Contact
								</a>
							</li>
						</ul>
					</div>
					<div className="px-10">
						<h3 className="font-bold text-[#181A2A] text-lg">
							Category
						</h3>
						<ul className="flex flex-col justify-start items-start mt-6">
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Lifestyle
								</a>
							</li>
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Technology
								</a>
							</li>
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Travel
								</a>
							</li>
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Business
								</a>
							</li>
							<li className="text-base text-[#3B3C4A] mb-2">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Economy
								</a>
							</li>
							<li className="text-base text-[#3B3C4A]">
								<a
									href="#"
									className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
								>
									Sports
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-[328px] bg-white rounded-xl p-8 flex justify-center items-center flex-col">
					<h2 className="font-bold text-[#181A2A] text-lg">
						Weekly Newsletter
					</h2>
					<p className="text-[#696A75] mt-3 text-center text-base">
						Get blog articles and offers via email
					</p>
					<input
						className="mt-[30px] border rounded-md py-3 px-4 text-base w-full"
						placeholder="Your email"
					></input>
					<button className="flex justify-center items-center py-3 px-5 text-base bg-[#4B6BFB] text-white rounded-md w-full mt-2 cursor-pointer hover:bg-[#3b56cc] transition-all">
						Subscribe
					</button>
				</div>
			</div>
			<div className="flex justify-between items-center flex-row w-full py-8 border-t border-t-[#E8E8EA]">
				<div className="flex justify-start items-start flex-row">
					<Image
						src="/logo_raw.svg"
						alt="Logo"
						width={48}
						height={48}
					/>
					<div className="flex flex-col justify-start items-start ml-2.5">
						<h3 className="font-normal text-[#141624] text-xl">
							Meta<span className="font-bold">Blog</span>
						</h3>
						<p className="font-normal text-[#141624] text-base">
							© JS Template 2023. All Rights Reserved.
						</p>
					</div>
				</div>
				<nav>
					<ul className="flex justify-between items-start flex-row">
						<li className="text-[#3B3C4A] text-base font-normal pr-4">
							<a
								href="#"
								className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
							>
								Terms of Use
							</a>
						</li>
						<li className="text-[#3B3C4A] text-base font-normal px-4 box-border border-x border-x-[#E8E8EA]">
							<a
								href="#"
								className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
							>
								Privacy Policy
							</a>
						</li>
						<li className="text-[#3B3C4A] text-base font-normal pl-4">
							<a
								href="#"
								className="cursor-pointer hover:text-[#000000] transition-all hover:underline"
							>
								Cookie Policy
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
}
