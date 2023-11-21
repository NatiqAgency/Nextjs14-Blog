'use client'

import Image from "next/image"
import { Author } from "./Author"
import Link from "next/link" 
import { handleDelete } from "@/actions/posts/DeletePost"
import { Post, Tag, User } from "@/db"

type Props = {
    post: Post & { tag: Tag } & { author: User }
    edit?: boolean
    deleteFnc: (action: any) => void
}

export const ItemPost = ({ post, edit, deleteFnc }: Props) => {
    return (
        <div
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
                            <Link
                                href={`/posts/${post.slug}`}
                                className="flex-1 py-3 px-5 text-secondary-500 border-2 border-secondary-500 rounded-md hover:shadow-lg transition-all ease-in-out duration-100 text-center"
                            >
                                See
                            </Link>
                            <Link
                                href={`/dashboard/edit/${post.slug}`}
                                className="flex-1 py-3 px-5 text-secondary-500 border-2 border-secondary-500 rounded-md hover:shadow-lg transition-all ease-in-out duration-100 text-center"
                            >
                                Edit
                            </Link>
                            <div
                                onClick={async () => {
                                    deleteFnc(post)
                                    await handleDelete(post.id)
                                }}
                                className="flex-1 py-3 px-5 text-secondary-500 border-2 border-secondary-500 rounded-md hover:shadow-lg transition-all ease-in-out duration-100 text-center"
                            >
                                Delete
                            </div>
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