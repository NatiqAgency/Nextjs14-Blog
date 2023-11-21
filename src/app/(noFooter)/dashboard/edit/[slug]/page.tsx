import Editor from "@/components/Editor";
import { db } from "@/db";

type Props = {
    params: {
        slug: string
    }
}

export default async function EditPostPage({ params }: Props) {
    const tags = await db.query.tags.findMany()
    const post = await db.query.posts.findFirst({
        where: (post, { eq }) => eq(post.slug, params.slug),
        with: {
            tag: true
        }
    }
    )

    return <Editor post={post} tags={tags} />
};