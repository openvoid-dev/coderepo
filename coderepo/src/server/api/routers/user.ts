import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

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
});
