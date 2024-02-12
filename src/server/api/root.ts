// import { postRouter } from "~/server/api/routers/post";
import { guideRouter } from "~/server/api/routers/guide";
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
  guide: guideRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
