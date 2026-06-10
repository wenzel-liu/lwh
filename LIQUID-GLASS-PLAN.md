# Liquid Glass Redesign Plan — wenzel-liu/lwh

> Note on naming: I'm reading "liquid grass" as **Liquid Glass** — Apple's design language introduced at WWDC 2025 (translucent material that refracts the content behind it, with live edge highlights, floating controls, and fluid motion). The plan below is built on that. If you actually meant something else, flag it.

---

## 0. Conclusion first

- **You do not need a rewrite.** The current site already has the bones Liquid Glass needs: a CSS token layer (`tokens.css`), a card primitive (`.fds-card`), and `backdrop-filter` blur already in use on the topbar and `.fds-card--mica`. The efficient path is a **material-layer transformation** of the token + base CSS, not new architecture.
- **The current style is Microsoft Fluent**, not Apple. Office-blue accent (`#0f6cbd`), Segoe UI, Mica acrylic, flat layered shadows, Bento grid. Moving to Liquid Glass means changing the *material and lighting model*, while keeping the Bento information architecture.
- **The single hardest problem is text legibility on translucent panels.** Every decision below is constrained by it. Glass without a disciplined contrast/fallback strategy looks good in screenshots and fails in use.
- **Estimated effort: ~2–3 focused days** for a high-fidelity result, most of it in `tokens.css` + `base.css` + one new background layer. Content files (`profile.ts`, pages) barely change.

---

## 1. What exists today (baseline)

**Stack:** Vite + React 18 + TS, multi-page SPA (`index / blog / experience / research`), built to repo root for GitHub Pages. A legacy Jekyll/Minimal-Mistakes site also lives in the tree but the **React `app/` is what ships**.

**Design system (`app/src/styles/`):**

| Layer | File | Role |
|---|---|---|
| Tokens | `tokens.css` | Colors, fonts, shadows, radii, easing. **Primary lever.** |
| Base | `base.css` | Shell, topbar, `.fds-card`, bento grid, chips, buttons. **Second lever.** |
| Pages | `pages.css` | Per-page layout. Minimal change. |

**Key current values worth knowing:**
- Canvas `#f3f3f3`, cards opaque white `--color-bg-layer-1: #fff`.
- Accent gradient already exists: `linear-gradient(135deg, accent-primary, accent2-primary)` (blue→green).
- Topbar: `rgba(252,252,252,0.72)` + `blur(40px) saturate(140%)` — already proto-glass.
- `.fds-card--mica`: `rgba(255,255,255,0.55)` + `blur(40px)` — already proto-glass.
- Radii top out at 12px; shadows are flat Fluent elevations.

**Implication:** the visual move is *concentrated*. Raise translucency, add edge lighting + refraction, soften/round geometry, give the glass something to refract, and add fluid motion.

---

## 2. Design goals & constraints (the brief)

**Goals**
1. **Material, not decoration.** Panels read as physical glass: translucent, light-bending, edge-lit — not "white card with a drop shadow."
2. **Depth hierarchy.** Content floats above a living background; chrome (nav, controls) floats above content.
3. **Calm + technical.** Fits an academic/clinician + techno-industrialist identity: precise, legible, restrained — not a flashy demo.
4. **Adaptive light/dark**, preserving the existing theme toggle.

**Hard constraints**
- **Legibility ≥ aesthetics.** WCAG AA on all body text, over glass.
- **Graceful degradation.** `backdrop-filter` is well-supported but must have a solid-fill fallback (`@supports not`).
- **Performance.** Blur is GPU-expensive; cap the number of simultaneously-blurred surfaces and the blur radius.
- **`prefers-reduced-motion` and `prefers-reduced-transparency`** must both be honored.

---

## 3. The material system (core of the redesign)

Liquid Glass is four optical effects layered together. Define each as tokens so the whole site moves at once.

**3.1 Translucency + blur (the "frosting")**
- `--glass-bg: rgba(255,255,255,0.55)` light / `rgba(28,28,30,0.55)` dark.
- `--glass-blur: blur(24px) saturate(180%)`. (Saturation boost is what makes it read as *glass* lensing colour, not just grey frost. Lower blur radius than today's 40px for a crisper, more "liquid" feel and better perf.)

**3.2 Edge highlight (the defining Apple detail)**
- A bright 1px inner rim, brighter top-left, that simulates light catching the glass edge:
  - `box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), inset 0 0 0 1px rgba(255,255,255,0.18)`.
- In dark mode the rim is a subtle white at lower opacity.

**3.3 Specular sheen**
- A faint diagonal gradient overlay (`::before`) on each panel: `linear-gradient(135deg, rgba(255,255,255,0.25), transparent 40%)` — the soft reflection across the top of the glass.

**3.4 Refraction / lensing (the "liquid" part)**
- True refraction needs SVG `feDisplacementMap` filters or a thin WebGL layer. **Recommendation: tier it.**
  - **Tier 1 (ship first):** fake it convincingly with blur + saturate + edge highlight + sheen. 90% of the look, ~10% of the cost.
  - **Tier 2 (optional polish):** add an SVG turbulence/displacement filter on hero + nav only, gated behind a capability + reduced-motion check. Do not put it on every card (perf).

**3.5 Depth shadow**
- Replace flat Fluent shadows with a soft, large ambient shadow so panels appear to *hover*: `0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)`.

**Token additions to `tokens.css`:** `--glass-bg`, `--glass-blur`, `--glass-rim`, `--glass-sheen`, `--glass-shadow`, plus dark-mode overrides. One source of truth.

---

## 4. Background — the thing glass refracts

**Glass over a flat `#f3f3f3` canvas looks like nothing.** Glass needs visible, ideally moving, content behind it. Add one ambient background layer behind the whole shell.

Options (pick one):
- **A. Aurora mesh gradient (recommended).** 2–3 soft blurred colour blobs (reuse the existing blue→green accent palette) drifting slowly. Pure CSS, cheap, on-brand, gives the glass colour to lens. Pauses under `prefers-reduced-motion`.
- **B. Existing photo.** Reuse `assets/images/background.jpg` heavily blurred + darkened as the bed. Faster to do, more "personal," less abstract.
- **C. Subtle technical grid / dot field** drifting behind the aurora — leans into the techno-industrialist identity.

Recommendation: **A as the base, optionally a faint C on top.** Keep it low-contrast so text on glass stays readable.

---

## 5. Component mapping (element by element)

Keep the Bento information architecture. Restyle each primitive.

| Element (class) | Today | Liquid Glass treatment |
|---|---|---|
| **Top bar** (`.fds-topbar`) | Sticky blurred bar, full width | **Floating capsule** glass bar, detached from edges, rounded, edge-lit. Shrinks/condenses on scroll. |
| **Nav items** (`PrimaryNav`) | Text links, accent underline | Active item = a small **glass pill** that slides between items (motion). |
| **Theme + search** (`ThemeControl`, search shell) | Subtle-fill controls | Discrete floating glass controls (Apple "floats controls over content"). |
| **Hero identity card** (`.fds-card--mica`) | Proto-glass already | Full glass panel, strongest edge highlight + sheen — the showpiece. |
| **Hero main / accent card** (`.fds-card--accent`) | Blue tint gradient | Glass tinted by accent, refracting the aurora behind it. |
| **Bento cards** (`.fds-card`) | Opaque white | Glass panels. Vary opacity slightly by importance to create depth tiers. |
| **Chips** (`.fds-chip`) | Flat fills | Tiny glass capsules with rim light. |
| **Buttons** (`.fds-btn`) | Solid accent / subtle | Primary = liquid-tinted glass with gel press (scale + spring). Secondary = clear glass. |
| **CTA card** (`.fds-card--cta`) | Gradient | Most saturated glass tint; the visual "end punctuation" of the page. |
| **Footer** | Plain | Clear glass strip. |

**Geometry & spacing changes:**
- Raise radii: cards `20–24px`, controls fully `capsule`. Use **concentric corners** (inner radius = outer − padding) so nested glass looks injection-moulded, the Apple tell.
- Slightly increase padding and gap so panels read as floating objects with air around them.

---

## 6. Motion (the "liquid")

Framer Motion is already a dependency — use it.
- **Background:** slow continuous drift of the aurora blobs (CSS `@keyframes`, 30–60s).
- **Cards:** the existing `data-reveal` stagger stays; on hover, a subtle lift + sheen sweep + 1–2° tilt toward the cursor (parallax). Keep it gentle.
- **Buttons/controls:** gel press — `scale(0.96)` with a spring on tap; release overshoots slightly and settles.
- **Nav pill:** layout animation (`layoutId`) so the active indicator *flows* between items.
- **Global:** everything respects `prefers-reduced-motion` (drift stops, tilts off, transitions become instant/short fades).

---

## 7. Colour & typography

**Colour**
- Keep the **blue→green accent** as the brand signal but use it primarily as a *tint inside glass* and in the background aurora, rather than as solid fills. This is the cleanest way to stay recognizably "yours" while reading as Apple-glass.
- Consider warming/desaturating slightly; Liquid Glass tends toward softer, lower-chroma tints than Office blue.

**Typography**
- Liquid Glass is about material, so type can largely stay. But two notes:
  - For maximum legibility *over glass*, a clean sans (current `--font-ui` Segoe/Inter stack) for UI is right. Keep **Source Serif 4** for long-form body if you like the academic tone — or move fully to sans for a more "device-native" Apple feel. **Decision point.**
  - Slightly increase font-weight/contrast for any text sitting directly on glass.

---

## 8. Accessibility & performance (non-negotiable)

- **Contrast:** test every text-on-glass combination at AA. Where it fails, increase panel opacity locally or add a subtle solid scrim behind text — do not lower text weight.
- **`@supports not (backdrop-filter: blur())`:** fall back to solid `--color-bg-layer-1` panels. Site must be fully usable with zero blur.
- **`prefers-reduced-transparency`:** swap glass tokens to near-opaque fills.
- **`prefers-reduced-motion`:** freeze aurora + disable tilt/parallax.
- **Performance budget:** cap blurred surfaces on screen (~6–8), keep blur ≤ 24px, avoid blurring during scroll if jank appears, reserve Tier-2 SVG refraction for ≤2 elements.

---

## 9. Implementation sequence (efficient path)

1. **Tokens.** Add glass + shadow + radius tokens (light + dark) to `tokens.css`. *(Half day)*
2. **Background layer.** Add aurora-mesh element + keyframes to the shell + `base.css`. *(Half day)*
3. **Card primitive.** Convert `.fds-card` (+ `--mica`, `--accent`, `--cta`) to glass with rim + sheen + concentric radii. This cascades to every page at once. *(Half day)*
4. **Chrome.** Floating capsule topbar, glass controls, sliding nav pill. *(Half day)*
5. **Motion.** Hover tilt/sheen, gel buttons, nav `layoutId`, reduced-motion guards. *(Half day)*
6. **Fallbacks + a11y audit.** `@supports`, reduced-transparency/motion, contrast pass. *(Half day)*
7. **(Optional) Tier-2 refraction** on hero + nav. *(Half day)*
8. **Build + deploy.** `npm run build` → `publish:root`, verify on GitHub Pages.

**Why this order:** steps 1–3 deliver ~80% of the visual change with the least code, because the token + card layers cascade across all four pages. Motion and refraction are additive polish that can ship later without rework.

---

## 10. Decisions (locked 2026-06-10)

1. **Refraction depth:** ✅ **Tier 1** — CSS-faked (blur + saturate + rim + sheen). Tier 2 deferred.
2. **Background:** ✅ **A. Aurora mesh gradient** — blue→green brand palette, slow drift, pure CSS.
3. **Default theme:** follow system (existing toggle preserved). *(default, not explicitly asked)*
4. **Typography:** ✅ **Keep Source Serif 4** for long-form body; sans for UI. Academic tone retained.
5. **Scope:** ✅ **All four pages in one pass** — change concentrates in `tokens.css` + `base.css`, cascades site-wide.
6. **Legacy Jekyll tree:** leave as-is for now.
