import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

const routes = [
  { label: "Home", slug: "index" as FullSlug, prefix: "index" },
  { label: "Blog", slug: "Blog/index" as FullSlug, prefix: "Blog" },
  { label: "Docs", slug: "Documentation/index" as FullSlug, prefix: "Documentation" },
]

function isActive(currentSlug: string, prefix: string) {
  return prefix === "index"
    ? currentSlug === "index"
    : currentSlug === prefix || currentSlug.startsWith(`${prefix}/`)
}

export default (() => {
  const GhostlightMasthead: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const currentSlug = fileData.slug ?? ("index" as FullSlug)

    return (
      <section class="ghostlight-masthead">
        <a
          class="ghostlight-wordmark"
          href={resolveRelative(currentSlug, "index" as FullSlug)}
          aria-label="Ghostlight home"
        >
          <span class="ghostlight-mark" aria-hidden="true">✦</span>
          <span>Ghostlight</span>
        </a>
        <nav class="ghostlight-nav" aria-label="Ghostlight sections">
          {routes.map((route) => {
            const active = isActive(currentSlug, route.prefix)
            return (
              <a
                href={resolveRelative(currentSlug, route.slug)}
                class={active ? "active" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {route.label}
              </a>
            )
          })}
          <a
            class="ghostlight-nav-cta"
            href="mailto:meta@gamecult.org?subject=Ghostlight%20Dungeon%20early%20access"
          >
            Early access
          </a>
        </nav>
      </section>
    )
  }

  return GhostlightMasthead
}) satisfies QuartzComponentConstructor
