'use server'

import { Post, db, users } from "@/lib/db";
import prisma from "@/lib/prisma";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import slugify from "slugify";

export default async function createPost(text: string, session: Session | null, postId: string | undefined, formData: FormData) {
    
    const currentUserId = await prisma.user
        .findUnique({ where: { email: session?.user?.email! } })
        .then((user) => user?.id!);

    const title = formData.get('title') as string
    const slug = slugify(title)
    const data = {
        content: text,
        title: formData.get('title') as string,
        slug,
        tagId: formData.get('tag') as string,
        userId: currentUserId
    }

    if (postId) {
        await prisma.post.update({
            where: {
                id: postId
            },
            data
        })
    } else {
        await prisma.post.create({ data })
    }



    redirect('/dashboard')
}