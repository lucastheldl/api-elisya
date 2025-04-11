import { sql } from "drizzle-orm";
import {
  integer,
  pgTable,
  date,
  numeric,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const receiptsTable = pgTable("receipts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  amount: varchar({ length: 255 }).notNull(),
  cpf: varchar({ length: 15 }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});
