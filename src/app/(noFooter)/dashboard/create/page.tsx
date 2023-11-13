import Editor from "@/components/Editor";
import prisma from "@/lib/prisma";

export default async function CreatePostPage() {
    const tags = await prisma.tag.findMany()

    return <Editor tags={tags} />
};