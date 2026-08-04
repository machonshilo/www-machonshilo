import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Rav Bar Hayim, Rav Avi Grossman, etc
const authors = defineCollection({
  loader: glob({ base: "./src/content/authors", pattern: "**/*.json" }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      name: z.string(),
      avatar: image().optional(),
    }),
});

// announcement, messiah, mazal tov, eretz yisrael, etc
const tags = defineCollection({
  loader: glob({ base: "./src/content/tags", pattern: "**/*.json" }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
  }),
});

// halakha > shabbath, hashqapha > shabbath, shabbath, etc
const categories = defineCollection({
  loader: glob({ base: "./src/content/categories", pattern: "**/*.json" }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    parent: reference("categories").optional(),
  }),
});

// masekheth b'rakhoth, etc
const series = defineCollection({
  loader: glob({ base: "./src/content/series", pattern: "**/*.json" }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
  }),
});

// tanakh > tora > breshith > parshat tol'doth, etc
const sources = defineCollection({
  loader: glob({ base: "./src/content/sources", pattern: "**/*.json" }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    parent: reference("sources").optional(),
  }),
});

// blog, article, audio shiur, in person shiur, qna, etc
const form = defineCollection({
  loader: glob({ base: "./src/content/form", pattern: "**/*.json" }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
  }),
});

// blogs, classes, articles, etc
const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      slug: z.string(),
      title: z.string(),
      description: z.string().max(300),

      datePublished: z.coerce.date(),
      dateUpdated: z.coerce.date().optional(),
      status: z.enum(["draft", "published", "archived"]),

      language: z.object({
        code: z.enum(["en", "he"]),
        source: z.enum([
          "original",
          "automatic-translation",
          "manual-translation",
        ]),
      }),

      author: reference("authors").optional(),
      form: reference("form"),
      categories: z.array(reference("categories")).optional(),
      tags: z.array(reference("tags")).optional(),

      series: z
        .object({
          id: reference("series"),
          order: z.number().int().positive(),
        })
        .optional(),

      featuredImage: z
        .object({
          src: image(),
          alt: z.string().optional(),
        })
        .optional(),

      videoUrl: z.url().optional(),
      audioUrl: z.url().optional(),
      duration: z.string().optional(),

      relatedSources: z.array(reference("sources")).optional(),
      relatedPosts: z.array(reference("posts")).optional(),

      notes: z.string(),
    }),
});

const readingPart = z.object({
  book: z.string(),
  startChapter: z.number(),
  endChapter: z.number(),
  startVerse: z.number(),
  endVerse: z.number(),
  beforeText: z.string().optional(),
  afterText: z.string().optional(),
  notes: z.string().optional(),
});

const triennialPost = defineCollection({
  loader: glob({ base: "./src/content/triennial", pattern: "**/*.json" }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    toraReading: z.array(readingPart),
    naviReading: z.array(readingPart).optional(),
    notes: z.string().optional(),
  }),
});

export const collections = {
  authors,
  tags,
  categories,
  sources,
  posts,
  series,
  triennialPost,
};
