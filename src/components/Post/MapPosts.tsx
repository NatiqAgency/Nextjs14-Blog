'use client'

import { Post, Tag, User } from ".prisma/client"
import { ItemPost } from "./ItemPost"
import { useEffect, useOptimistic, useState } from "react"
import { useSearchParams } from "next/navigation"

type Props = {
    posts: (Post & { tag: Tag } & { author: User })[]
    edit?: boolean
}

export const MapPosts = ({ posts, edit }: Props) => {
    const query = useSearchParams().get('s')
    const [filteredData, setFilteredData] = useState<(Post & { tag: Tag } & { author: User })[]>([]);
    const [optimisticPosts, deleteOptimiticPosts] = useOptimistic(
        posts,
        (state, newPost: Post & { tag: Tag } & { author: User }) => {
            return state.filter(post => post.id !== newPost.id)
        }
    )


    useEffect(() => {
        if (!query) {
            setFilteredData(optimisticPosts);
            return;
        }

        const newFilteredData = filterAndSortData(optimisticPosts, query);
        setFilteredData(newFilteredData);
    }, [query, optimisticPosts]);

    function filterAndSortData(data: (Post & { tag: Tag } & { author: User })[], query: string): (Post & { tag: Tag } & { author: User })[] {
        return data.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }


    return (
        <>
            {
                filteredData.map(post => (
                    <ItemPost key={post.id} post={post} edit={edit} deleteFnc={deleteOptimiticPosts} />
                ))
            }
        </>
    )
}