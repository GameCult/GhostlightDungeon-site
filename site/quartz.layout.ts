import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const documentationExplorer = Component.ConditionalRender({
  component: Component.Explorer({
    title: "Architecture",
    folderDefaultState: "open",
    folderClickBehavior: "link",
    useSavedState: false,
    filterFn: (node) => node.slug.startsWith("Documentation"),
  }),
  condition: (page) =>
    page.fileData.slug === "Documentation" || page.fileData.slug?.startsWith("Documentation/"),
})

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GameCult: "https://gamecult.org",
      GitHub: "https://github.com/GameCult/Ghostlight",
      Contact: "mailto:meta@gamecult.org",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  afterBody: [],
  left: [documentationExplorer],
  right: [
    Component.ConditionalRender({
      component: Component.TableOfContents(),
      condition: (page) => page.fileData.slug?.startsWith("Documentation/"),
    }),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle()],
  left: [documentationExplorer],
  right: [],
}
