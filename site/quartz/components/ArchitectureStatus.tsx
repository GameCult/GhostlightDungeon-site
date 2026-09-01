import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { FullSlug, resolveRelative } from "../util/path"

export default (() => {
  const ArchitectureStatus: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const currentSlug = fileData.slug ?? ("index" as FullSlug)

    return (
      <aside class="architecture-status" aria-label="Architecture documentation status">
        <strong>Teardown archive.</strong>{" "}
        These pages describe the pre-rebuild Ghostlight body and remain available as evidence.
        The current rebuild is moving world construction onto a deterministic ontology and the
        same authoritative transition path used during play.{" "}
        <a href={resolveRelative(currentSlug, "Blog/the-world-counter-lied" as FullSlug)}>
          Read the postmortem.
        </a>
      </aside>
    )
  }

  return ArchitectureStatus
}) satisfies QuartzComponentConstructor
