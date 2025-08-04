import { pgTable, serial,integer,  varchar, text,timestamp,boolean } from 'drizzle-orm/pg-core';

//table/schema for todos
export const todo = pgTable('todos', {
  id: integer('id').primaryKey(),
  title: text('title').notNull(),
 created_at: timestamp().defaultNow().notNull(),
  is_done: boolean()
});
