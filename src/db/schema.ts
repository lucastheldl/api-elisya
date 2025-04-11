import { integer, pgTable, date, numeric, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("receipts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  amount: varchar({ length: 255 }).notNull(),
  cpf: varchar({ length: 15 }).notNull(),
  createdAt: date().notNull().unique(),
});
