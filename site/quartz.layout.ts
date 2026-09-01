import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import ArchitectureStatus from "./quartz/components/ArchitectureStatus"
import GhostlightMasthead from "./quartz/components/GhostlightMasthead"

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

const blogExplorer = Component.ConditionalRender({
  component: Component.Explorer({
    title: "Blog",
    folderDefaultState: "open",
    folderClickBehavior: "link",
    useSavedState: false,
    filterFn: (node) => node.slug.startsWith("Blog"),
  }),
  condition: (page) => page.fileData.slug === "Blog" || page.fileData.slug?.startsWith("Blog/"),
})

const architectureStatus = Component.ConditionalRender({
  component: ArchitectureStatus(),
  condition: (page) =>
    page.fileData.slug === "Documentation" || page.fileData.slug?.startsWith("Documentation/"),
})

const sectionExplorers = [documentationExplorer, blogExplorer]

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [GhostlightMasthead()],
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
    architectureStatus,
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  afterBody: [],
  left: sectionExplorers,
  right: [
    Component.ConditionalRender({
      component: Component.TableOfContents(),
      condition: (page) =>
        page.fileData.slug?.startsWith("Documentation/") || page.fileData.slug?.startsWith("Blog/"),
    }),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [architectureStatus, Component.ArticleTitle()],
  left: sectionExplorers,
  right: [],
}
