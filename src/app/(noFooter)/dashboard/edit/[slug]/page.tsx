import Editor from "@/components/Editor";
import prisma from "@/lib/prisma";

type Props = {
    params: {
        slug: string
    }
}

export default async function EditPostPage({ params }: Props) {
    const tags = await prisma.tag.findMany()
    const post = await prisma.post.findFirst({ where: { slug: params.slug }, include: { tag: true } })

    return <Editor post={post} tags={tags} />
};