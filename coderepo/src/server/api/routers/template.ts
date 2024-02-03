import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import slugify from "slugify";

export const templateRouter = createTRPCRouter({
  getAllTemplates: publicProcedure.query(async ({ ctx }) => {
    const templates = await ctx.db.template.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        description: true,
        slug: true,
        githubUrl: true,
        updatedAt: true,
      },
    });

    return templates;
  }),
});
