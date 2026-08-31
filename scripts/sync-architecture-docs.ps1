param(
    [string]$GhostlightRoot = (Join-Path (Split-Path -Parent $PSScriptRoot) "..\Ghostlight"),
    [switch]$Check
)

$ErrorActionPreference = "Stop"
$siteRoot = Split-Path -Parent $PSScriptRoot
$sourceRoot = Join-Path $GhostlightRoot "docs\public-architecture"
$destinationRoot = Join-Path $siteRoot "content\Documentation"

if (-not (Test-Path -LiteralPath $sourceRoot)) {
    throw "Ghostlight public architecture source was not found at '$sourceRoot'."
}

$sourceFiles = Get-ChildItem -LiteralPath $sourceRoot -File -Filter *.md | Sort-Object Name
if (-not $sourceFiles) {
    throw "Ghostlight public architecture source contains no Markdown files."
}

if ($Check) {
    foreach ($source in $sourceFiles) {
        $destination = Join-Path $destinationRoot $source.Name
        if (-not (Test-Path -LiteralPath $destination)) {
            throw "Published architecture projection is missing '$($source.Name)'."
        }
        $sourceHash = (Get-FileHash -LiteralPath $source.FullName -Algorithm SHA256).Hash
        $destinationHash = (Get-FileHash -LiteralPath $destination -Algorithm SHA256).Hash
        if ($sourceHash -ne $destinationHash) {
            throw "Published architecture projection is stale: '$($source.Name)'."
        }
    }
    $extra = Get-ChildItem -LiteralPath $destinationRoot -File -Filter *.md |
        Where-Object { $_.Name -notin $sourceFiles.Name }
    if ($extra) {
        throw "Published architecture projection has unowned files: $($extra.Name -join ', ')."
    }
    Write-Output "Architecture projection matches Ghostlight source."
    exit 0
}

New-Item -ItemType Directory -Path $destinationRoot -Force | Out-Null
Get-ChildItem -LiteralPath $destinationRoot -File -Filter *.md -ErrorAction SilentlyContinue |
    Remove-Item -Force
foreach ($source in $sourceFiles) {
    Copy-Item -LiteralPath $source.FullName -Destination (Join-Path $destinationRoot $source.Name)
}
Write-Output "Published $($sourceFiles.Count) architecture pages from Ghostlight source."

