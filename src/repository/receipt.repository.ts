import { ReceiptType } from "../types/receipt";

export type CreateReceipt = {
  amount: string;
  cpf: string;
};

// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
export class ReceiptRepository {
  static async create(data: CreateReceipt): Promise<ReceiptType> {
    const [record] = await db.insert(runnersSchema).values(data).returning();
    return record;
  }
}
