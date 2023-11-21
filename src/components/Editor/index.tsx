'use client'

import React, { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { Post, Tag } from "@/db"
import setPost from '../../actions/posts/SetPost';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


type Props = {
    tags: Tag[]
    post?: Post & { tag: Tag } | null
}

export default function Editor({ tags, post }: Props) {
    const { data: session } = useSession();
    const [text, setText] = useState(post?.content || '');
    const actionPost = setPost.bind(null, text, session, post?.id!)
    const router = useRouter();


    return (
        <div className='flex flex-col'>
            <div
                className='cursor-pointer mb-2'
                onClick={() => router.back()}
            >
               &lt; Back
            </div>
            <form action={actionPost}>
                <h1 className='text-2xl font-bold mb-4'>{`${post ? "Edit" : "Create"} post`}</h1>
                <div className='flex flex-row gap-4 mb-4'>
                    <input type="text" name="title" placeholder='Post title' className='p-2 pl-4 rounded-md bg-secondary-100 placeholder:text-secondary-400' defaultValue={post?.title} />
                    <select className='p-2 pl-4 rounded-md bg-secondary-100 placeholder:text-secondary-400' name="tag" defaultValue={post?.tag.id}>
                        {
                            tags.map((tag) => <option key={tag.id} value={tag.id}>{tag.title}</option>)
                        }
                    </select>
                </div>
                <MdEditor
                    modelValue={text}
                    onChange={setText}
                    language={'en-US'}
                    previewTheme={'github'}
                />
                <input type='submit' className='py-3 px-5 text-base bg-[#4B6BFB] text-white rounded-md cursor-pointer hover:bg-[#3b56cc] transition-all my-4' value={`${post ? "Edit" : "Create"} post`}></input>
            </form>
        </div>
    );
};