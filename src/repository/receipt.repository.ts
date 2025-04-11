import { db } from "../db";
import { receiptsTable } from "../db/schema";

export type ReceiptRecord = {
  id: number;
  amount: string;
  cpf: string;
  createdAt: Date;
};
export type CreateReceipt = {
  amount: string;
  cpf: string;
};

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ReceiptRepository {
  static async create(data: CreateReceipt): Promise<ReceiptRecord> {
    const [record] = await db.insert(receiptsTable).values(data).returning();
    return record;
  }
}
