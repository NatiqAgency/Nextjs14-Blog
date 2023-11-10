import { Post, Tag, User } from ".prisma/client"
import Image from "next/image"
import Link from "next/link"
import { Author } from "./Author"

type Props = {
    post: Post & { tag: Tag } & { author: User }
}

export const ItemPost = ({ post }: Props) => {
    return (
        <Link
            href={`/posts/${post.slug}`}
            className="rounded-xl border-2 border-secondary-100 p-4 hover:shadow-lg transition-all ease-in-out duration-100"
        >
            <div className="relative pt-[50%] rounded-md overflow-hidden mb-6">
                <Image
                    className="object-cover"
                    src={'/images/article.jpg'}
                    alt="article"
                    fill
                />
            </div>
            <div className="p-2 flex flex-col items-start">
                <div className="bg-primary py-1 px-2 rounded-md mb-4">
                    {post.tag.title}
                </div>
                <div className="mb-6">
                    {post.title}
                </div>
                <Author post={post} />
            </div>
        </Link>
    )
}