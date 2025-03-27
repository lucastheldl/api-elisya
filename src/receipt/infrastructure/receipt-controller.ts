import Elysia from "elysia";

const receiptController = new Elysia({
  prefix: "receipt",
  tags: ["Receipt"],
})
  .post("/", async ({ body, set }) => {
    return { status: "success" };
  })
  .get("/", async ({ body, set }) => {
    return { status: "success" };
  });

export { receiptController };
