import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users';
import { tags } from './tags';

export const posts = pgTable('post', {
    id: text('id').notNull().primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }),
    updatedAt: timestamp('updated_at', { mode: 'date' }),
    authorId: text('author_id').notNull(),
    tagId: text('author_id').notNull()
});

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, {
        fields: [posts.authorId],
        references: [users.id]
    }),
    tag: one(tags, {
        fields: [posts.tagId],
        references: [tags.id]
    })
}));

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;




