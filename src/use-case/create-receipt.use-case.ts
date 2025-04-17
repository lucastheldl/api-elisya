import { ReceiptRepository } from "../repository/receipt.repository";
import type { ReceiptType } from "../types/receipt";

export async function createNewReceipt(
  body: Omit<ReceiptType, "id" | "createdAt">
) {
  try {
    return await ReceiptRepository.create(body);
  } catch (error) {
    console.log("Erro ao criar nota fiscal", error);
  }
}
