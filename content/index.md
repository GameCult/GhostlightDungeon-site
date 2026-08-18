---
title: Ghostlight Dungeon
description: A persistent, source-grounded AI roleplaying world that remembers where everything is—and keeps moving when you look away.
---
<div class="gd-shell">
<nav class="gd-nav" aria-label="Primary navigation">
<a class="gd-wordmark" href="/" aria-label="Ghostlight Dungeon home"><span class="gd-mark" aria-hidden="true">✦</span> Ghostlight Dungeon</a>
<div class="gd-nav-links">
<a href="#world">The world</a>
<a href="#plans">Plans</a>
<a class="gd-nav-cta" href="mailto:meta@gamecult.org?subject=Ghostlight%20Dungeon%20early%20access">Join early access</a>
</div>
</nav>
<main>
<section class="gd-hero" aria-labelledby="hero-title">
<div class="gd-hero-copy">
<p class="gd-eyebrow"><span></span> Private alpha in development</p>
<h1 id="hero-title">A world that does not <em>wait for you.</em></h1>
<p class="gd-lede">Ghostlight Dungeon is an AI game master built around a persistent world—not a chat log. Places stay where they are. Characters know what they have learned. Powers pursue their own interests. What happens offscreen can find you later.</p>
<div class="gd-actions">
<a class="gd-button gd-button-primary" href="mailto:meta@gamecult.org?subject=Ghostlight%20Dungeon%20early%20access&body=Tell%20us%20what%20kind%20of%20world%20you%20want%20to%20play%20in%3A%20">Request early access <span aria-hidden="true">→</span></a>
<a class="gd-button gd-button-quiet" href="#world">See how the world moves</a>
</div>
<p class="gd-fine">Single-player campaigns · Fiction-first d20 resolution · Exportable state</p>
</div>
<div class="gd-agency" role="img" aria-label="A living network of people, factions and places shown at different simulation resolutions">
<div class="gd-agency-label"><span>AGENCY MAP</span><span class="gd-live">LIVE WORLD</span></div>
<svg viewBox="0 0 620 520" aria-hidden="true">
<defs>
<radialGradient id="aura"><stop offset="0" stop-color="#73efd1" stop-opacity=".22"/><stop offset="1" stop-color="#73efd1" stop-opacity="0"/></radialGradient>
<filter id="glow"><feGaussianBlur stdDeviation="4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<circle cx="315" cy="260" r="210" fill="url(#aura)"/>
<g class="gd-links">
<path d="M126 131 L276 214 L457 112 M276 214 L491 278 L414 415 M276 214 L158 390 M491 278 L414 415 M126 131 L158 390 M457 112 L491 278"/>
<path class="gd-link-hot" d="M276 214 L414 415"/>
</g>
<g class="gd-cell gd-cell-arena"><circle cx="126" cy="131" r="56"/><circle cx="109" cy="121" r="8"/><circle cx="139" cy="109" r="7"/><circle cx="146" cy="139" r="9"/><text x="126" y="203">REFUGEE ARENA</text></g>
<g class="gd-cell gd-cell-person"><circle cx="276" cy="214" r="42"/><circle cx="276" cy="214" r="10"/><text x="276" y="272">MIRA · INDIVIDUAL</text></g>
<g class="gd-cell gd-cell-faction"><circle cx="457" cy="112" r="50"/><path d="M436 120 L457 91 L478 120 Z"/><text x="457" y="181">HARBOUR AUTHORITY</text></g>
<g class="gd-cell gd-cell-arena"><circle cx="491" cy="278" r="62"/><circle cx="470" cy="266" r="9"/><circle cx="501" cy="253" r="7"/><circle cx="510" cy="289" r="10"/><text x="491" y="357">RIVAL POWERS · ARENA</text></g>
<g class="gd-cell gd-cell-faction"><circle cx="414" cy="415" r="48"/><path d="M393 421 H435 M400 409 H428 M407 397 H421"/><text x="414" y="481">DESTINATION CITY</text></g>
<g class="gd-cell gd-cell-faction"><circle cx="158" cy="390" r="44"/><path d="M142 402 L158 372 L174 402 Z"/><text x="158" y="451">BORDER CLOCK</text></g>
</svg>
<div class="gd-agency-foot"><span>8 active persona cells</span><span>24 persistent subjects</span></div>
</div>
</section>
<section class="gd-proof" aria-label="Core product promises">
<div><strong>Persistent</strong><span>People, places and consequences survive the context window.</span></div>
<div><strong>Grounded</strong><span>Worldbuilding comes from evidence, not whatever the model vaguely remembers.</span></div>
<div><strong>Agentic</strong><span>Institutions and populations act for themselves—even while you are away.</span></div>
</section>
<section class="gd-breaks" aria-labelledby="breaks-title">
<div class="gd-section-intro">
<p class="gd-kicker">Common failure modes</p>
<h2 id="breaks-title">How LLM roleplay goes wrong.</h2>
<p>Good prose can hide a broken game. These are six common failure modes, a concrete example of each, and how Ghostlight is being built to address them.</p>
</div>
<ol class="gd-failure-list">
<li>
<header class="gd-failure-heading"><span>Failure mode 01</span><h3>The world contradicts itself.</h3></header>
<div class="gd-failure-detail gd-failure-example"><span>Example</span><p>The road that took a week becomes an afternoon. The inn moves across town. A spell quietly gains a new rule.</p></div>
<div class="gd-failure-detail gd-failure-response"><span>How Ghostlight addresses it</span><p>Locations, rules, and committed events live in durable state, with relevant source evidence retrieved for narration.</p></div>
</li>
<li>
<header class="gd-failure-heading"><span>Failure mode 02</span><h3>Characters know things they were never told.</h3></header>
<div class="gd-failure-detail gd-failure-example"><span>Example</span><p>A guard recognises the alias you revealed privately to a thief three cities away.</p></div>
<div class="gd-failure-detail gd-failure-response"><span>How Ghostlight addresses it</span><p>Each character acts from a local view built from what they perceived, learned, and remember—not from every fact the model can see.</p></div>
</li>
<li>
<header class="gd-failure-heading"><span>Failure mode 03</span><h3>NPCs cease to exist offscreen.</h3></header>
<div class="gd-failure-detail gd-failure-example"><span>Example</span><p>You leave a refugee convoy for a month. When you return, everyone is still waiting in the same camp for your next line.</p></div>
<div class="gd-failure-detail gd-failure-response"><span>How Ghostlight addresses it</span><p>People persist beyond the active scene, and background change can be resolved at the level the campaign needs so individuals can leave, adapt, and return.</p></div>
</li>
<li>
<header class="gd-failure-heading"><span>Failure mode 04</span><h3>Player declarations become facts.</h3></header>
<div class="gd-failure-detail gd-failure-example"><span>Example</span><p>“I kick down the fortress gate” works because the player said it confidently—not because the character could do it.</p></div>
<div class="gd-failure-detail gd-failure-response"><span>How Ghostlight addresses it</span><p>An attempted action is separate from its result. Possibility, cost, risk, and resolution are checked before the world changes.</p></div>
</li>
<li>
<header class="gd-failure-heading"><span>Failure mode 05</span><h3>The world rearranges itself around the protagonist.</h3></header>
<div class="gd-failure-detail gd-failure-example"><span>Example</span><p>A centuries-old order abandons its interests to admire, recruit, or obey the powerful newcomer.</p></div>
<div class="gd-failure-detail gd-failure-response"><span>How Ghostlight addresses it</span><p>Characters and institutions have their own pressures, authority, and relationships, so they can refuse, bargain, exploit, contain, or resist.</p></div>
</li>
<li>
<header class="gd-failure-heading"><span>Failure mode 06</span><h3>Consequences vanish from context.</h3></header>
<div class="gd-failure-detail gd-failure-example"><span>Example</span><p>The broken treaty, wounded captain, and promised favour disappear once the relevant messages fall out of the chat history.</p></div>
<div class="gd-failure-detail gd-failure-response"><span>How Ghostlight addresses it</span><p>Events and relationship changes are committed to durable state so later scenes can retrieve what still matters.</p></div>
</li>
</ol>
</section>
<section class="gd-world" id="world" aria-labelledby="world-title">
<div class="gd-section-intro">
<p class="gd-kicker">The world is not a prompt</p>
<h2 id="world-title">Leave the room.<br/>It remains a room.</h2>
<p>Most AI roleplaying games reconstruct reality from the conversation every turn. Ghostlight maintains typed world state, retrieves source evidence, and lets the narrator describe what actually survived validation.</p>
</div>
<div class="gd-feature-grid">
<article><span class="gd-number">01</span><h3>Characters have boundaries</h3><p>They perceive from where they stand, remember what happened to them, and cannot borrow another character’s secrets or expertise.</p></article>
<article><span class="gd-number">02</span><h3>Your action is an attempt</h3><p>Impossible claims are refused. Risky actions expose their odds and stakes before a server-side roll. Power has limits, so victory can matter.</p></article>
<article><span class="gd-number">03</span><h3>The setting has agency</h3><p>Factions recruit, obstruct, bargain, migrate and prepare according to their own pressures. The world does not collapse into applause when the protagonist arrives.</p></article>
<article><span class="gd-number">04</span><h3>Background lives can return</h3><p>Ghostlight simulates crowds and institutions as multiresolution Gestalts, then materialises individuals without erasing who they were. Help a refugee today; meet the same person years later.</p></article>
</div>
</section>
<section class="gd-callback" aria-label="Example persistent consequence">
<div class="gd-callback-line"></div>
<div class="gd-callback-scene">
<p class="gd-stage">THREE FICTIONAL MONTHS LATER · NORTH QUAY</p>
<blockquote>“I wondered if you would recognise me.”</blockquote>
<p>Mira sets a bundle of shipwright’s tools on the table. The refugee column dispersed weeks ago. She did not disappear with it.</p>
</div>
<div class="gd-callback-state">
<span>IDENTITY</span><strong>preserved</strong>
<span>RELATIONSHIP</span><strong>remembered</strong>
<span>JOURNEY</span><strong>world-resolved</strong>
</div>
</section>
<section class="gd-plans" id="plans" aria-labelledby="plans-title">
<div class="gd-section-intro gd-section-intro-wide">
<p class="gd-kicker">Provisional early-access plans</p>
<h2 id="plans-title">Choose what your world contributes.</h2>
<p>Both lanes run the same game. Contributor campaigns reduce their price by permitting the model provider to use submitted campaign context and generated responses for model improvement. Private campaigns never route through that contributor lane.</p>
</div>
<div class="gd-pricing">
<article class="gd-plan gd-plan-anchor">
<p class="gd-plan-type">Contributor</p><h3><span>$</span>5<small>/month</small></h3>
<p>Full persistent-world play at the standard simulation resolution.</p>
<ul><li>8 active Persona cells</li><li>Persistent campaigns and away-time</li><li>Campaign export</li><li>Training contribution permitted</li></ul>
<a href="mailto:meta@gamecult.org?subject=Ghostlight%20Dungeon%20Contributor%20interest">Join the early-access list</a>
</article>
<article class="gd-plan">
<p class="gd-plan-type">Contributor Plus</p><h3><span>$</span>10<small>/month</small></h3>
<p>More simultaneous agency for denser scenes and wider conflicts.</p>
<ul><li>16 active Persona cells</li><li>Everything in Contributor</li><li>Less Gestalt consolidation</li><li>Training contribution permitted</li></ul>
<a href="mailto:meta@gamecult.org?subject=Ghostlight%20Dungeon%20Contributor%20Plus%20interest">Join the early-access list</a>
</article>
<article class="gd-plan gd-plan-private">
<div class="gd-plan-badge">PRIVATE LANE</div><p class="gd-plan-type">Private</p><h3><span>$</span>15<small>/month</small></h3>
<p>The standard simulation with a provider policy that forbids Contributor routing.</p>
<ul><li>8 active Persona cells</li><li>Everything in Contributor</li><li>No training-contributor provider</li><li>Auditable provider receipts</li></ul>
<a href="mailto:meta@gamecult.org?subject=Ghostlight%20Dungeon%20Private%20interest">Join the early-access list</a>
</article>
<article class="gd-plan gd-plan-private">
<div class="gd-plan-badge">PRIVATE LANE</div><p class="gd-plan-type">Private Plus</p><h3><span>$</span>30<small>/month</small></h3>
<p>Higher world resolution without contributing campaign material for training.</p>
<ul><li>16 active Persona cells</li><li>Everything in Private</li><li>Less Gestalt consolidation</li><li>Auditable provider receipts</li></ul>
<a href="mailto:meta@gamecult.org?subject=Ghostlight%20Dungeon%20Private%20Plus%20interest">Join the early-access list</a>
</article>
</div>
<p class="gd-pricing-note">Prices and limits are provisional while we measure the paid alpha. Contributor consent will be explicit and campaign-bound; a private campaign will never silently fall back to a contributor provider.</p>
</section>
<section class="gd-final">
<p class="gd-kicker">Built by GameCult</p>
<h2>The dungeon master remembers.<br/>The world has plans.</h2>
<p>We are building the private alpha now. Tell us what kind of campaign would make you want to live in this machine for a while.</p>
<a class="gd-button gd-button-primary" href="mailto:meta@gamecult.org?subject=Ghostlight%20Dungeon%20early%20access&body=The%20campaign%20I%20want%20to%20play%20is%3A%20">Request early access <span aria-hidden="true">→</span></a>
</section>
</main>
</div>
