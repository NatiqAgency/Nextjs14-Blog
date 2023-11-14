"use server"

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const handleDelete = async (postId: string) => {
    await prisma.post.delete({ where: { id: postId } })
    revalidatePath('/dashboard')
};