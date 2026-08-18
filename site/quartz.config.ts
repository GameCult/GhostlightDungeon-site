import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { QuartzEmitterPlugin } from "./quartz/plugins/types"
import { Fragment, h } from "preact"

const GhostlightMeta: QuartzEmitterPlugin = () => ({
  name: "GhostlightMeta",
  async *emit() {},
  async *partialEmit() {},
  externalResources: () => ({
    additionalHead: [
      () =>
        h(Fragment, {}, [
          h("meta", { name: "theme-color", content: "#090b12" }),
          h("meta", { property: "og:url", content: "https://ghostlight.gamecult.org/" }),
          h("meta", { property: "twitter:url", content: "https://ghostlight.gamecult.org/" }),
          h("meta", { property: "twitter:card", content: "summary_large_image" }),
        ]),
    ],
  }),
})

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ghostlight Dungeon",
    pageTitleSuffix: " — A world that does not wait for you",
    enableSPA: true,
    enablePopovers: false,
    analytics: null,
    locale: "en-GB",
    baseUrl: "ghostlight.gamecult.org",
    ignorePatterns: [".git", ".github", ".quartz-build", "AGENTS.md", "node_modules", "quartz-site", "site"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: { name: "Space Grotesk", weights: [400, 500, 600, 700] },
        title: { name: "Space Grotesk", weights: [400, 500, 600, 700] },
        body: { name: "Inter", weights: [400, 500, 600, 700], includeItalic: true },
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#090b12",
          lightgray: "#141824",
          gray: "#8b91a7",
          darkgray: "#d8dced",
          dark: "#f8f5ff",
          secondary: "#73efd1",
          tertiary: "#e39bff",
          highlight: "rgba(115, 239, 209, 0.12)",
          textHighlight: "rgba(227, 155, 255, 0.28)",
        },
        darkMode: {
          light: "#090b12",
          lightgray: "#141824",
          gray: "#8b91a7",
          darkgray: "#d8dced",
          dark: "#f8f5ff",
          secondary: "#73efd1",
          tertiary: "#e39bff",
          highlight: "rgba(115, 239, 209, 0.12)",
          textHighlight: "rgba(227, 155, 255, 0.28)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: false }),
      Plugin.Assets(),
      Plugin.Static(),
      GhostlightMeta(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
