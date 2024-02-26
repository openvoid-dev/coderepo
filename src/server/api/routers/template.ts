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

  createTemplate: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        githubUrl: z.string().url(),
        content: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const slug = slugify(input.name, { lower: true });

      const template = await ctx.db.template.create({
        data: {
          name: input.name,
          description: input.description,
          githubUrl: input.githubUrl,
          content: input.content,
          slug,
        },
      });

      return template;
    }),

  getTemplateById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const template = await ctx.db.template.findUnique({
        where: { id: input.id },
      });

      return template;
    }),

  getTemplateBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ ctx, input }) => {
      const template = await ctx.db.template.findUnique({
        where: { slug: input.slug },
        select: {
          id: true,
          name: true,
          description: true,
          slug: true,
          githubUrl: true,
          content: true,
          createdAt: true,
          updatedAt: true,
          myTemplates: ctx.session?.user
            ? {
                where: {
                  userId: ctx.session?.user.id,
                },
              }
            : false,
        },
      });

      return template;
    }),

  getTemplatePages: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ ctx, input }) => {
      const templatePages = await ctx.db.templatePage.findMany({
        where: {
          templateId: input.id,
        },
      });

      return templatePages;
    }),

  createTemplatePage: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        parentId: z.number().optional(),
        content: z.string(),
        templateId: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const slug = slugify(input.name, { lower: true });

      const templatePage = await ctx.db.templatePage.create({
        data: {
          name: input.name,
          parentId: input.parentId === 0 ? null : input.parentId,
          content: input.content,
          templateId: input.templateId,
          slug,
        },
      });

      return templatePage;
    }),

  getTemplatePageBySlug: publicProcedure
    .input(z.object({ slug: z.string(), templatePageSlug: z.string() }))
    .query(async ({ ctx, input }) => {
      const templatePage = await ctx.db.templatePage.findUnique({
        where: {
          slug: input.templatePageSlug,
          template: {
            slug: input.slug,
          },
        },
        select: {
          name: true,
          slug: true,
          content: true,
        },
      });

      return templatePage;
    }),
});
