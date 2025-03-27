import { Elysia } from "elysia";
import { node } from "@elysiajs/node";
import swagger from "@elysiajs/swagger";
import { routes } from "./app.router";
import cors from "@elysiajs/cors";

const app = new Elysia({ adapter: node() })
  .use(cors())
  .use(swagger())
  .use(routes)
  .listen(3001, ({ hostname, port }) => {
    console.log(`🦊 Elysia is running at ${hostname}:${port}`);
  });
