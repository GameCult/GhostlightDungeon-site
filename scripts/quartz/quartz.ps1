param(
    [ValidateSet("build", "dev")]
    [string]$Command = "dev"
)

$ErrorActionPreference = "Stop"

$repoRoot = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$sharedQuartzRoot = if ($env:GAMECULT_QUARTZ_ROOT) {
    $env:GAMECULT_QUARTZ_ROOT
} else {
    Join-Path (Split-Path -Parent $repoRoot) "GameCult-Quartz"
}

if (-not (Test-Path $sharedQuartzRoot)) {
    throw "GameCult-Quartz was not found at '$sharedQuartzRoot'. Clone it beside this repo or set GAMECULT_QUARTZ_ROOT."
}

$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCommand) {
    throw "Node.js was not found. Install Node.js 22 or newer."
}

$env:npm_config_cache = Join-Path $repoRoot ".npm-cache"
$buildScript = Join-Path $sharedQuartzRoot "scripts\build-site.mjs"

& $nodeCommand.Source $buildScript $Command `
    "--siteRoot" $repoRoot `
    "--overlayDir" "site" `
    "--contentDir" "content" `
    "--outputDir" "quartz-site/public"

