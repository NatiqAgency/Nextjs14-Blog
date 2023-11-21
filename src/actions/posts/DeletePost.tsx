"use server"

import { db, posts } from "@/db";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const handleDelete = async (postId: string) => {
    await db.delete(posts).where(eq(posts.id, postId))
    revalidatePath('/dashboard')
};