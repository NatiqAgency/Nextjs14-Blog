'use client'

import React, { useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { Tag } from '@prisma/client';
import createPost from './CreatePost';
import { useSession } from 'next-auth/react';


type Props = {
    tags: Tag[]
}

export default function Editor({ tags }: Props) {
    const { data: session } = useSession();
    const [text, setText] = useState('# My first post');
    const createPostTest = createPost.bind(null, text, session)

    return (
        <form action={createPostTest}>
            <input type="text" name="title" placeholder='You title' />
            <select name="tag">
                {
                    tags.map((tag) => <option key={tag.id} value={tag.id}>{tag.title}</option>)
                }
            </select>
            <MdEditor
                modelValue={text}
                onChange={setText}
                language={'en-US'}
                previewTheme={'github'}
            />
            <input type='submit' value={"Create post"}></input>
        </form>
    );
};