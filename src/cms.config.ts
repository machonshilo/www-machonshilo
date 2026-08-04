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

  collections: [
    {
      name: "posts",
      label: "Posts",
      label_singular: "Posts",
      folder: "src/content/posts",
      i18n: true,
      fields: [
        {
          name: "title",
          label: "Title",
          i18n: "duplicate",
        },
        {
          name: "body",
          label: "Body",
          widget: "richtext",
          i18n: "duplicate",
        },
      ],
    },
  ],
};

export default config;
