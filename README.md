# Ghostlight Dungeon Site

Provisional public landing page for [Ghostlight Dungeon](https://ghostlight.gamecult.org), built with the shared [GameCult Quartz](https://github.com/GameCult/GameCult-Quartz) engine.

## Local build

Clone `GameCult-Quartz` beside this repository, install its dependencies, then run:

```powershell
.\scripts\quartz\quartz.ps1 build
```

The generated site is written to `quartz-site/public`.

## Deployment

Pushes to `main` invoke GameCult Quartz's reusable GitHub Pages workflow. GitHub Pages owns the custom domain setting for `ghostlight.gamecult.org`; a repository `CNAME` file is not authoritative for this Actions-based deployment.

Prices, cell limits, lore Vault allowances, import budgets, and provider policies
on the page are provisional until the paid alpha opens. Compatible lore Vaults
are Git-synchronized, Obsidian-compatible Markdown folder hierarchies; custom
tenant ingestion remains gated in the current tester harness.
