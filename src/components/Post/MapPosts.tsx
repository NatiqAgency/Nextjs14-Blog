import { Post, Tag, User } from ".prisma/client"
import { ItemPost } from "./ItemPost"

type Props = {
    posts: (Post & { tag: Tag } & { author: User })[]
    edit?: boolean
}

export const MapPosts = ({ posts, edit }: Props) => {
    return (
        <>
            {
                posts.map(post => (
                    <ItemPost key={post.id} post={post} edit={edit} />
                ))
            }
        </>
    )
}