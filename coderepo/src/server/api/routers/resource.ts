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
        id: true,
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

  getResources: publicProcedure.query(async ({ ctx }) => {
    const resources = await ctx.db.resource.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        url: true,
        category: {
          select: {
            name: true,
            id: true,
            slug: true,
          },
        },
      },
    });

    if (!resources) {
      throw new Error("No resources found");
    }

    return resources;
  }),

  createResource: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        url: z.string(),
        categoryId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const resource = await ctx.db.resource.create({
        data: {
          name: input.name,
          description: input.description,
          url: input.url,
          categoryId: input.categoryId,
        },
      });

      if (!resource) {
        throw new Error("Resource not created");
      }

      return resource;
    }),
});
