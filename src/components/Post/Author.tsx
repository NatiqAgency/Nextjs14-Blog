import { Post, Tag, User } from ".prisma/client"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"

type Props = {
    post: Post & { tag: Tag } & { author: User }
    className?: string
}

export const Author = ({ post, className }: Props) => {
    return (
        <div className={`flex flex-row items-center text-secondary-400 ${className}`}>
            <div className="relative w-9 h-9 rounded-full overflow-hidden mr-3">
                <Image
                    className="object-cover"
                    src={'/images/profile_pic.jpg'}
                    alt="profile_pic"
                    fill
                />
            </div>
            <Link
                className="mr-5 font-medium hover:underline"
                href={`/authors/${post.author.slug}`}
            >
                {post.author.name}
            </Link>
            <div className="font-normal">
                {moment(post.createdAt).format('LL')}
            </div>
        </div>
    )
}

