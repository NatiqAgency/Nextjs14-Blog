'use client'

import { Post, Tag, User } from ".prisma/client"
import Image from "next/image"
import { Author } from "./Author"
import { useRouter } from "next/navigation"

type Props = {
    post: Post & { tag: Tag } & { author: User }
    edit?: boolean
}

export const ItemPost = ({ post, edit }: Props) => {
    const router = useRouter();

    const handleRedirect = (route: string) => {
        router.push(route);
    };

    return (
        <div
            onClick={() => handleRedirect(`/posts/${post.slug}`)}
            className="flex flex-col h-full rounded-xl border-2 border-secondary-100 p-4 hover:shadow-lg transition-all ease-in-out duration-100 cursor-pointer"
        >
            <div className="relative pt-[50%] rounded-md overflow-hidden mb-6">
                <Image
                    className="object-cover"
                    src={'/images/article.jpg'}
                    alt="article"
                    fill
                />
            </div>
            <div className="flex-1 p-2 flex flex-col items-start justify-between">
                <p className="bg-primary py-1 px-2 rounded-md mb-4">
                    {post.tag.title}
                </p>
                <p className="flex-1 mb-6">
                    {post.title}
                </p>
                {
                    edit ? (
                        <div className="flex flex-row w-full gap-4">
                            <p
                                onClick={() => handleRedirect(`/dashboard/edit/${post.slug}`)}
                                className="flex-1 py-3 px-5 text-secondary-500 border-2 border-secondary-500 rounded-md hover:shadow-lg transition-all ease-in-out duration-100 text-center"
                            >
                                Edit
                            </p>
                            <p
                                onClick={() => handleRedirect(`/dashboard/edit/${post.slug}`)}
                                className="flex-1 py-3 px-5 text-secondary-500 border-2 border-secondary-500 rounded-md hover:shadow-lg transition-all ease-in-out duration-100 text-center"
                            >
                                Delete
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-start">
                            <Author post={post} />
                        </div>
                    )
                }
            </div>
        </div >
    )
}