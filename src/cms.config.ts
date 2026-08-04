import { type CmsConfig } from "@sveltia/cms";

const config: CmsConfig = {
  app_title: "Machon Shilo CMS",
  site_url: "https://www-machonshilo.mail-53b.workers.dev",
  logo: {
    src: "/favicon.svg",
    show_in_header: true,
  },

  load_config_file: false,
  output: {
    omit_empty_optional_fields: true,
  },

  backend: {
    name: "gitea",
    repo: "joshh613/www-machonshilo",
    base_url: "https://codeberg.org",
    api_root: "https://codeberg.org/api/v1",
    app_id: "d2f2531d-d616-4dde-9dd0-5b6bd1a405e6",
  },

  i18n: {
    structure: "multiple_folders",
    locales: ["en", "he"],
  },

  media_folder: "/src/assets/cms",
  media_libraries: {
    all: {
      slugify_filename: true,
    },
  },

  editor: {
    preview: false,
  },

  // https://fonts.google.com/icons?icon.set=Material+Symbols&icon.platform=web
  // https://sveltiacms.app/en/docs/string-transformations#string-transformations
  collections: [
    {
      name: "authors",
      label: "Authors",
      label_singular: "Author",
      folder: "src/content/authors",
      slug: "{{uuid_short}}",
      i18n: true,
      fields: [
        {
          name: "slug",
          label: "URL",
          i18n: "duplicate",
        },
        {
          name: "name",
          label: "Name",
          i18n: "duplicate",
        },
        {
          name: "avatar",
          label: "Avatar",
          widget: "image",
          i18n: "duplicate",
          required: false,
        },
      ],
    },
    {
      name: "tags",
      label: "Tags",
      label_singular: "Tag",
      folder: "src/content/authors",
      slug: "{{uuid_short}}",
      i18n: true,
      fields: [
        {
          name: "slug",
          label: "URL",
          i18n: "duplicate",
        },
        {
          name: "name",
          label: "Name",
          i18n: "duplicate",
        },
      ],
    },
    {
      name: "categories",
      label: "Categories",
      label_singular: "Category",
      folder: "src/content/categories",
      slug: "{{uuid_short}}",
      i18n: true,
      fields: [
        {
          name: "slug",
          label: "URL",
          i18n: "duplicate",
        },
        {
          name: "name",
          label: "Name",
          i18n: "duplicate",
        },
        {
          name: "parent",
          label: "Parent",
          widget: "relation",
          i18n: "duplicate",
          collection: "categories",
          display_fields: ["name"],
          required: false,
        },
      ],
    },
    {
      name: "series",
      label: "Series",
      folder: "src/content/series",
      slug: "{{uuid_short}}",
      i18n: true,
      fields: [
        {
          name: "slug",
          label: "URL",
          i18n: "duplicate",
        },
        {
          name: "name",
          label: "Name",
          i18n: "duplicate",
        },
      ],
    },
    {
      name: "sources",
      label: "Source",
      label_singular: "Source",
      folder: "src/content/sources",
      slug: "{{uuid_short}}",
      i18n: true,
      fields: [
        {
          name: "slug",
          label: "URL",
          i18n: "duplicate",
        },
        {
          name: "name",
          label: "Name",
          i18n: "duplicate",
        },
        {
          name: "parent",
          label: "Parent",
          widget: "relation",
          i18n: "duplicate",
          collection: "sources",
          display_fields: ["name"],
          required: false,
        },
      ],
    },
    {
      name: "forms",
      label: "Forms",
      label_singular: "Form",
      folder: "src/content/forms",
      slug: "{{uuid_short}}",
      i18n: true,
      fields: [
        {
          name: "slug",
          label: "URL",
          i18n: "duplicate",
        },
        {
          name: "name",
          label: "Name",
          i18n: "duplicate",
        },
      ],
    },
    {
      name: "posts",
      label: "Posts",
      label_singular: "Post",
      folder: "src/content/post",
      slug: "{{uuid_short}}",
      i18n: true,
      fields: [
        {
          name: "slug",
          label: "URL",
          i18n: "duplicate",
        },
        {
          name: "title",
          label: "Title",
          i18n: "duplicate",
        },
        {
          name: "description",
          label: "Description",
          widget: "text",
          minlength: 10,
          maxlength: 300,
          i18n: "duplicate",
        },

        {
          name: "datePublished",
          label: "Date published",
          widget: "datetime",
          type: "date",
          i18n: "duplicate",
        },
        {
          name: "dateUpdated",
          label: "Date updated",
          widget: "datetime",
          type: "date",
          i18n: "duplicate",
          required: false,
        },
        {
          name: "status",
          label: "Status",
          widget: "select",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
            { label: "Archived", value: "archived" },
          ],
          default: "draft",
          i18n: "duplicate",
        },
      ],
    },
  ],
};

export default config;
