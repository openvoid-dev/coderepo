import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const resourceRouter = createTRPCRouter({
  getResourceCategories: publicProcedure.query(async ({ ctx }) => {
    const resourceCategories = await ctx.db.resourceCategory.findMany({
      orderBy: { name: "asc" },
      select: {
        name: true,
        description: true,
        icon: true,
        slug: true,
      },
    });

    if (!resourceCategories) {
      throw new Error("No resource categories found");
    }

    return resourceCategories;
  }),

  getResourcesForCategory: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const category = await ctx.db.resourceCategory.findUnique({
        where: {
          slug: input.slug,
        },
      });

      if (!category) {
        throw new Error("No category found");
      }

      const resources = await ctx.db.resource.findMany({
        where: {
          categoryId: {
            equals: category?.id,
          },
        },
        select: {
          name: true,
          description: true,
          url: true,
        },
      });

      if (!resources) {
        throw new Error("No resources found");
      }

      return { category, resources };
    }),
});
