import { sql } from "drizzle-orm";
import { timestamp } from "drizzle-orm/pg-core";
import { type Static, t } from "elysia";

export const receiptType = t.Object({
  id: t.String(),
  cpf: t.String(),
  amount: t.String(),
  createdAt: t.Date(),
});

export type ReceiptType = Static<typeof receiptType>;
