'use server'

import { NewPost, db, posts } from "@/db";
import { v4 as uuidv4 } from 'uuid';
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import slugify from "slugify";
import { eq } from "drizzle-orm";

export default async function setPost(text: string, session: Session | null, postId: string | null, formData: FormData) {

    console.log(session)

    const title = formData.get('title') as string
    const slug = slugify(title)
    const data: NewPost = {
        id: postId || uuidv4(),
        content: text,
        title: formData.get('title') as string,
        slug,
        tagId: formData.get('tag') as string,
        authorId: session?.user.id!
    }

    if (!postId) {
        await db.insert(posts)
            .values(data)
    } else {
        await db.update(posts)
            .set(data)
            .where(eq(posts.id, postId))
    }


    redirect('/dashboard')
}