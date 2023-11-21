import { Post, Tag, User } from "@/db"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"

type Props = {
    post: Post & { tag: Tag } & { author: User }
    className?: string
}

export const Author = ({ post, className }: Props) => {
    if (!post) return null

    return (
        <div className={`flex flex-row items-center text-secondary-400 ${className && className}`}>
            <div className="relative w-9 h-9 rounded-full overflow-hidden mr-3">
                <Image
                    className="object-cover"
                    src={'/images/profile_pic.jpg'}
                    alt="profile_pic"
                    fill
                />
            </div>
            <div className="flex flex-col">
                <Link
                    className="font-medium hover:underline"
                    href={`/authors/${post.author.id}`}
                >
                    {post.author.name}
                </Link>
                <p className="font-normal">
                    {moment(post.createdAt).utc().format('LL')}
                </p>
            </div>
        </div>
    )
}

