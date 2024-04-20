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
    .mutation(({ ctx, input }) => {
      return ctx.db.guide.create({
        data: {
          name: input.name,
          imageUrl: input.imageUrl,
          tagId: input.tagId,
          description: input.description,
          content: input.content,
          slug: slugify(input.name.toLocaleLowerCase()),
        },
      });
    }),

  getGuideTags: publicProcedure.query(({ ctx }) => {
    return ctx.db.guideTag.findMany({
      select: {
        id: true,
        name: true,
        icon: true,
        slug: true,
      },
    });
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
    .query(({ ctx, input }) => {
      return ctx.db.guide.findUnique({
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
    }),

  getRelatedGuides: publicProcedure
    .input(z.object({ tagId: z.number(), guideId: z.number() }))
    .query(({ ctx, input }) => {
      return ctx.db.guide.findMany({
        where: {
          tagId: input.tagId,
          NOT: {
            id: input.guideId,
          },
        },
        select: {
          id: true,
          name: true,
          imageUrl: true,
          description: true,
          slug: true,
        },
      });
    }),
});
