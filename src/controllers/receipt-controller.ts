import Elysia, { t } from "elysia";
import { receiptType } from "../types/receipt";
import { createNewReceipt } from "../use-case/create-receipt.use-case";

const receiptController = new Elysia({
  prefix: "receipt",
  tags: ["Receipt"],
})
  .post(
    "/",
    async ({ body, set }) => {
      const { cpf } = body;

      if (!cpf) {
        set.status = 400;
        return { status: "error", message: "Bad request" };
      }

      const note = await createNewReceipt(body);

      if (!note) {
        set.status = 500;
        return { status: "error", message: "Internal server error" };
      }

      set.status = 201;
      return { status: "success", message: "Receipt created" };
    },
    {
      body: t.Omit(receiptType, ["id", "createdAt"]),
      response: {
        201: t.Object({
          status: t.String(),
        }),
        400: t.Object({
          status: t.String(),
          message: t.String(),
        }),
        500: t.Object({
          status: t.String(),
          message: t.String(),
        }),
      },
      detail: {
        summary: "Create a new receipt",
        description: "Create a receipt runner with the provided information",
      },
    }
  )
  .get("/:id", async ({ body, set }) => {
    return { status: "success" };
  })
  .get("/", async ({ body, set }) => {
    return { status: "success" };
  })
  .delete("/", async ({ body, set }) => {
    return { status: "success" };
  });

export { receiptController };
