// import { postRouter } from "~/server/api/routers/post";
import { resourceRouter } from "~/server/api/routers/resource";
import { templateRouter } from "~/server/api/routers/template";
import { userRouter } from "~/server/api/routers/user";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  resource: resourceRouter,
  user: userRouter,
  template: templateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
