import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

import slugify from "slugify";

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

  getResourceById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const resource = await ctx.db.resource.findUnique({
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

      if (!resource) {
        throw new Error("No resource found");
      }

      return resource;
    }),

  getResourceCategoryById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const resourceCategory = await ctx.db.resourceCategory.findUnique({
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

      if (!resourceCategory) {
        throw new Error("No resource category found");
      }

      return resourceCategory;
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
    .mutation(async ({ ctx, input }) => {
      const resource = await ctx.db.resource.update({
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

      if (!resource) {
        throw new Error("Resource not updated");
      }

      return resource;
    }),

  createResourceCategory: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      // Create a slug
      const slug = slugify(input.name);

      const resourceCategory = await ctx.db.resourceCategory.create({
        data: {
          name: input.name,
          description: input.description,
          icon: input.icon,
          slug: slug,
        },
      });

      if (!resourceCategory) {
        throw new Error("Resource category not created");
      }

      return resourceCategory;
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
    .mutation(async ({ ctx, input }) => {
      const resourceCategory = await ctx.db.resourceCategory.update({
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

      if (!resourceCategory) {
        throw new Error("Resource category not updated");
      }

      return resourceCategory;
    }),

  deleteResource: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const resource = await ctx.db.resource.delete({
        where: {
          id: input.id,
        },
      });

      if (!resource) {
        throw new Error("Resource not deleted");
      }

      return resource;
    }),

  deleteResourceCategory: protectedProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const resourceCategory = await ctx.db.resourceCategory.delete({
        where: {
          id: input.id,
        },
      });

      if (!resourceCategory) {
        throw new Error("Resource category not deleted");
      }

      return resourceCategory;
    }),
});
