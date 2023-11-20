import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { users } from './users';
import { tags } from './tags';

export const posts = pgTable('post', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: text('slug').notNull(),
    content: text('content'),
    createdAt: timestamp('created_at', { mode: 'date' }),
    updatedAt: timestamp('updated_at', { mode: 'date' }),
    authorId: integer('author_id'),
    tagId: integer('author_id')
});

export const postsRelations = relations(posts, ({ one }) => ({
    user: one(users, {
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




