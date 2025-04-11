import Elysia from "elysia";
import { receiptController } from "./controllers/receipt-controller";

const routes = new Elysia().use(receiptController);

export { routes };
