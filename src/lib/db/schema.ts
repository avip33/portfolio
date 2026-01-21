import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const views = pgTable("views", {
  slug: text("slug").primaryKey(),
  count: integer("count").notNull().default(0),
  updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
});
