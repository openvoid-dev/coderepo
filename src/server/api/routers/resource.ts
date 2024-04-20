import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

import slugify from "slugify";

export const resourceRouter = createTRPCRouter({
  getResourceCategories: publicProcedure.query(({ ctx }) => {
    return ctx.db.resourceCategory.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        description: true,
        icon: true,
        slug: true,
      },
    });
  }),

  getResourcesForCategory: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const category = await ctx.db.resourceCategory.findUnique({
        where: {
          slug: input.slug,
        },
        select: {
          id: true,
          name: true,
          description: true,
          icon: true,
        },
      });

      if (!category) {
        return { category: null, resources: [] };
      }

      const resources = await ctx.db.resource.findMany({
        where: {
          categoryId: {
            equals: category?.id,
          },
        },
        select: {
          id: true,
          name: true,
          description: true,
          url: true,
          myResources: ctx.session?.user
            ? {
                where: {
                  userId: ctx.session?.user.id,
                },
              }
            : false,
        },
      });

      if (!resources) {
        return { category, resources: [] };
      }

      return { category, resources };
    }),

  getResources: publicProcedure.query(({ ctx }) => {
    return ctx.db.resource.findMany({
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
  }),

  getResourceById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.resource.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          description: true,
          url: true,
          category: {
            select: {
              id: true,
            },
          },
        },
      });
    }),

  getResourceCategoryById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.resourceCategory.findUnique({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          name: true,
          description: true,
          icon: true,
          slug: true,
        },
      });
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
    .mutation(({ ctx, input }) => {
      return ctx.db.resource.create({
        data: {
          name: input.name,
          description: input.description,
          url: input.url,
          categoryId: input.categoryId,
        },
      });
    }),

  updateResource: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        url: z.string(),
        categoryId: z.number(),
        id: z.number(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.resource.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          description: input.description,
          url: input.url,
          categoryId: input.categoryId,
        },
      });
    }),

  createResourceCategory: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      // Create a slug
      const slug = slugify(input.name);

      return ctx.db.resourceCategory.create({
        data: {
          name: input.name,
          description: input.description,
          icon: input.icon,
          slug: slug,
        },
      });
    }),

  updateResourceCategory: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string(),
        id: z.number(),
        slug: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.resourceCategory.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          description: input.description,
          icon: input.icon,
          slug: input.slug,
        },
      });
    }),

  deleteResource: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.resource.delete({
        where: {
          id: input.id,
        },
      });
    }),

  deleteResourceCategory: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.resourceCategory.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
