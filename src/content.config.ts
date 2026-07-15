import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const slug_id = z.string();
const title = z.string();
const description = z.string().optional(); // CHANGE!

const grouping = reference("reading_groups");
const before = z.string().optional();
const after = z.string().optional();
const order = z.number().optional();
const scroll = z.array(
  z.object({
    book: reference("books"),
    before,
    after,
    section: z.object({
      start_ch: z.number(),
      start_vs: z.number(),
      end_ch: z.number(),
      end_vs: z.number(),
      before,
      after,
    }),
  }),
);

const ai_translation = z.boolean();
const status = z.enum(["draft", "published", "archived"]);
const date_created = z.coerce.date();
const date_updated = z.coerce.date();
const featured_image = z.string().optional(); // CHANGE!

const tags = z.array(reference("tags")).optional();
const topics = z.array(reference("topics")).optional();
const season = reference("season").optional();
const author = reference("authors").optional();

const attachments = z.array(z.string()).optional();
const gallery = z.array(z.string()).optional();

const audio = z.string().optional();
const video = z.string().optional();
const length_minutes = z.number().optional();
const transcript = z.string().optional();

const url = z.url().optional();
const responsum = z.object({
  question: z.string(),
  answer: z.string(),
  answer_summary: z.string().optional(),
});

export const collections = {
  pages: defineCollection({
    loader: glob({ base: "./src/content/pages", pattern: "**/*.mdx" }),
    schema: z.object({
      slug_id,
      title,
      description,
    }),
  }),

  triennial: defineCollection({
    loader: glob({ base: "./src/content/triennial", pattern: "**/*.json" }),
    schema: z.object({
      title,
      grouping,
      scroll,
    }),
  }),

  blog: defineCollection({
    loader: glob({ base: "./src/content/blog", pattern: "**/*.md" }),
    schema: z.object({
      ai_translation,
      title,
      status,
      date_created,
      date_updated,
      featured_image,
      description,
      tags,
      attachments,
      gallery,
    }),
  }),

  classes: defineCollection({
    loader: glob({ base: "./src/content/classes", pattern: "**/*.md" }),
    schema: z.object({
      ai_translation,
      title,
      status,
      date_created,
      date_updated,
      author,
      featured_image,
      description,
      tags,
      topics,
      season,
      attachments,
      audio,
      video,
      length_minutes,
      transcript,
    }),
  }),

  documents: defineCollection({
    loader: glob({ base: "./src/content/documents", pattern: "**/*.json" }),
    schema: z.object({
      ai_translation,
      title,
      date_created,
      date_updated,
      author,
      description,
      tags,
      topics,
      season,
      attachments: z.array(z.string()),
      transcript,
    }),
  }),

  responsa: defineCollection({
    loader: glob({ base: "./src/content/responsa", pattern: "**/*.json" }),
    schema: z.object({
      ai_translation,
      title,
      date_created,
      date_updated,
      author,
      description,
      tags,
      topics,
      season,
      url,
      responsum,
    }),
  }),

  // Relations
  tags: defineCollection({
    loader: glob({
      base: "./src/content/relations/tags",
      pattern: "**/*.json",
    }),
    schema: z.object({ title }),
  }),
  topics: defineCollection({
    loader: glob({
      base: "./src/content/relations/topics",
      pattern: "**/*.json",
    }),
    schema: z.object({ title }),
  }),
  seasons: defineCollection({
    loader: glob({
      base: "./src/content/relations/seasons",
      pattern: "**/*.json",
    }),
    schema: z.object({ title }),
  }),
  authors: defineCollection({
    loader: glob({
      base: "./src/content/relations/authors",
      pattern: "**/*.json",
    }),
    schema: z.object({ title }),
  }),
  books: defineCollection({
    loader: glob({
      base: "./src/content/relations/books",
      pattern: "**/*.json",
    }),
    schema: z.object({ title, order }),
  }),
  reading_groups: defineCollection({
    loader: glob({
      base: "./src/content/relations/reading_groups",
      pattern: "**/*.json",
    }),
    schema: z.object({ title, order }),
  }),
};
