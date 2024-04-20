import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  saveResource: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.myResource.create({
        data: {
          userId: ctx.session.user.id,
          resourceId: input.id,
        },
      });

      return { success: true };
    }),

  unsaveResource: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.myResource.delete({
        where: {
          userId_resourceId: {
            userId: ctx.session.user.id,
            resourceId: input.id,
          },
        },
      });

      return { success: true };
    }),

  getSavedResources: protectedProcedure.query(async ({ ctx }) => {
    const savedResources = await ctx.db.myResource.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      select: {
        resource: {
          select: {
            id: true,
            name: true,
            description: true,
            url: true,
            category: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return savedResources.map(({ resource }) => resource);
  }),

  saveTemplate: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.myTemplate.create({
        data: {
          userId: ctx.session.user.id,
          templateId: input.id,
        },
      });

      return { success: true };
    }),

  unsaveTemplate: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.myTemplate.delete({
        where: {
          userId_templateId: {
            userId: ctx.session.user.id,
            templateId: input.id,
          },
        },
      });

      return { success: true };
    }),

  getSavedTemplates: protectedProcedure.query(async ({ ctx }) => {
    const savedTemplates = await ctx.db.myTemplate.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      select: {
        template: {
          select: {
            id: true,
            name: true,
            description: true,
            updatedAt: true,
            githubUrl: true,
            slug: true,
          },
        },
      },
    });

    return savedTemplates.map(({ template }) => template);
  }),

  saveGuide: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.myGuide.create({
        data: {
          userId: ctx.session.user.id,
          guideId: input.id,
        },
      });

      return { success: true };
    }),

  unsaveGuide: protectedProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.db.myGuide.delete({
        where: {
          userId_guideId: {
            userId: ctx.session.user.id,
            guideId: input.id,
          },
        },
      });

      return { success: true };
    }),

  getSavedGuides: protectedProcedure.query(async ({ ctx }) => {
    const savedGuides = await ctx.db.myGuide.findMany({
      where: {
        userId: ctx.session.user.id,
      },
      select: {
        guide: {
          select: {
            id: true,
            name: true,
            imageUrl: true,
            tag: {
              select: {
                id: true,
                name: true,
                icon: true,
              },
            },
            description: true,
            slug: true,
          },
        },
      },
    });

    return savedGuides.map(({ guide }) => guide);
  }),
});
