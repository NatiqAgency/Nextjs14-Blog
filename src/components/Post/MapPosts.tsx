import { Post, Tag, User } from ".prisma/client"
import { ItemPost } from "./ItemPost"

type Props = {
    posts: (Post & { tag: Tag } & { author: User })[]
}

export const MapPosts = ({ posts }: Props) => {
    return (
        <>
            {
                posts.map(post => (
                    <ItemPost key={post.id} post={post} />
                ))
            }
        </>
    )
}