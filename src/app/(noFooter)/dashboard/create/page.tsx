import Editor from "@/components/Editor";
import { db } from "@/db";

export default async function CreatePostPage() {
    const tags = await db.query.tags.findMany()

    return <Editor tags={tags} />
};