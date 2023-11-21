import { pgTable, serial, text } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { posts } from './posts';

export const tags = pgTable('tag', {
    id: text('id').notNull().primaryKey(),
    title: text('title').notNull()
});

export const tagsRelations = relations(tags, ({ many }) => ({
    posts: many(posts)
}));

export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;
