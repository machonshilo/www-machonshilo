import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
  }),
});

const readingSchema = z.object({
  title: z.string(),
  start: z.string(),
  end: z.string(),
  date: z.coerce.date(),
  notes: z.string().optional(),
});

const triennial = defineCollection({
  loader: glob({ base: "./src/content/triennial", pattern: "**/*.json" }),
  schema: z.object({
    en: readingSchema,
    he: readingSchema,
  }),
});

export const collections = { blog, triennial };
