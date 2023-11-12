import prisma from "@/lib/prisma";
import Editor from "./Editor";

export default async function CreatePostPage() {
    const tags = await prisma.tag.findMany()

    return <Editor tags={tags} />
};