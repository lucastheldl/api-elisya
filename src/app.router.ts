import Elysia from "elysia";
import { receiptController } from "./receipt/infrastructure/receipt-controller";

const routes = new Elysia().use(receiptController);

export { routes };
