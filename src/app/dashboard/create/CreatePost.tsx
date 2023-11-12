'use server'

import prisma from "@/lib/prisma";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import slugify from "slugify";

export default async function createPost(text: string, session: Session | null, formData: FormData) {

    const currentUserId = await prisma.user
        .findUnique({ where: { email: session?.user?.email! } })
        .then((user) => user?.id!);

    const title = formData.get('title') as string
    const slug = slugify(title)

    console.log({
        data: {
            content: text,
            title: formData.get('title') as string,
            slug,
            tagId: formData.get('tag') as string,
            userId: currentUserId
        }
    })

    await prisma.post.create({
        data: {
            content: text,
            title: formData.get('title') as string,
            slug,
            tagId: formData.get('tag') as string,
            userId: currentUserId
        }
    })

    redirect('/dashboard')
}