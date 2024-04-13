import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

import slugify from "slugify";

export const guideRouter = createTRPCRouter({
  createGuide: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        imageUrl: z.string(),
        tagId: z.number(),
        description: z.string(),
        content: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const guide = await ctx.db.guide.create({
        data: {
          name: input.name,
          imageUrl: input.imageUrl,
          tagId: input.tagId,
          description: input.description,
          content: input.content,
          slug: slugify(input.name.toLocaleLowerCase()),
        },
      });

      return guide;
    }),

  getGuideTags: publicProcedure.query(async ({ ctx }) => {
    const tags = await ctx.db.guideTag.findMany({
      select: {
        id: true,
        name: true,
        icon: true,
        slug: true,
      },
    });

    return tags;
  }),

  getGuides: publicProcedure.query(({ ctx }) => {
    return ctx.db.guide.findMany({
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
    });
  }),

  getGuideBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const guide = await ctx.db.guide.findUnique({
        where: {
          slug: input.slug,
        },
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
          content: true,
          myGuides: ctx.session?.user
            ? {
                where: {
                  userId: ctx.session?.user.id,
                },
              }
            : false,
        },
      });

      return guide;
    }),
});
