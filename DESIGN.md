---
name: Pranav Darga — Portfolio
description: A frontend engineer's portfolio where the site itself is the work sample.
colors:
  cobalt: "#1456f0"
  cobalt-deep: "#0c3fb8"
  midnight: "#0a2540"
  ink: "#1a1a1a"
  slate: "#5a6472"
  paper: "#ffffff"
  mist: "#f5f7fb"
  hairline: "#e3e7ee"
  accent-amber: "#f97316"
  accent-amber-light: "#fbbf24"
  accent-lavender: "#c084fc"
  accent-lavender-deep: "#e879a0"
  footer-muted: "#b8c2d4"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1.15
  title:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.3rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
    letterSpacing: "normal"
rounded:
  md: "14px"
  lg: "24px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "64px"
  section: "140px"
components:
  button-primary:
    backgroundColor: "{colors.cobalt}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-deep}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.midnight}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline-hover:
    backgroundColor: "{colors.midnight}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  chip:
    backgroundColor: "#ffffff"
    textColor: "{colors.midnight}"
    rounded: "{rounded.pill}"
    padding: "6px 14px"
---

# Design System: Pranav Darga — Portfolio

## 1. Overview

**Creative North Star: "The Working Proof"**

This isn't a portfolio that describes skill — it's one that demonstrates it. Every scroll reveal, every timed transition, every pixel of a card's border-radius is itself the evidence a recruiter is evaluating, alongside the words on the page. The system reads as corporate-editorial confidence: a strong cobalt anchors action, midnight ink carries weight and authority, and everything else steps back into quiet neutrals so the craft — not the color — does the convincing.

The system explicitly rejects the generic, unmodified template look. Nothing here should feel like a free Bootstrap portfolio with the name swapped in. It also rejects gimmick for its own sake: motion and decoration earn their place only when they reinforce precision and credibility, never novelty for its own sake, per the anti-reference already set in PRODUCT.md.

**Key Characteristics:**
- Confident, precise, minimal — restraint reads as competence to this audience.
- One accent color (cobalt) carries almost all interactive weight; midnight carries authority and structure.
- Soft, ambient, navy-tinted shadows lift key surfaces (hero image, photo frame, active project slide) off a flat, mostly-white canvas.
- Motion is a reveal, not a performance: content fades and rises into place once, on scroll, then gets out of the way.

## 2. Colors

A restrained, largely monochrome-blue palette with one deliberate, quiet flourish of warmth.

### Primary
- **Cobalt** (`#1456f0` / `{colors.cobalt}`): the single interactive accent — primary buttons, the logo, links, active-state highlights. Used sparingly and consistently so it always signals "this is actionable."
- **Cobalt Deep** (`#0c3fb8` / `{colors.cobalt-deep}`): the hover state for cobalt surfaces. Never used at rest.

### Neutral
- **Midnight** (`#0a2540` / `{colors.midnight}`): the authority color — footer background, outline-button ink, filled hover states, chip text. Reads as "executive," not "playful."
- **Ink** (`#1a1a1a` / `{colors.ink}`): primary body and heading text on light surfaces.
- **Slate** (`#5a6472` / `{colors.slate}`): secondary text — job descriptions, project descriptions, captions. Never used for anything a visitor needs to act on.
- **Paper** (`#ffffff` / `{colors.paper}`): the base canvas.
- **Mist** (`#f5f7fb` / `{colors.mist}`): the one-step-off-white surface for cards and grouped content (job cards, the slider nav pill).
- **Hairline** (`#e3e7ee` / `{colors.hairline}`): all borders and dividers. Never darker than this for a structural line.
- **Footer Muted** (`#b8c2d4` / `{colors.footer-muted}`): the one text color that exists only for the dark footer — a light, cool tint of Midnight, used for the copyright line where full white would be too loud against the dark surface.

### Named Rules
**The One Accent Rule.** Cobalt is the only color that means "click me." If a new interactive element needs a color, it's cobalt or it's midnight-on-hover — never a third hue.

**The Warmth-in-Moderation Rule.** The amber (`linear-gradient(145deg, {colors.accent-amber-light}, {colors.accent-amber})` — `#fbbf24` → `#f97316`) and lavender (`linear-gradient(145deg, {colors.accent-lavender}, {colors.accent-lavender-deep})` — `#c084fc` → `#e879a0`) gradient blobs behind the About photo are the system's only departure from blue/neutral. They exist to add a trace of humanity against an otherwise corporate palette — but they are a whisper, not a shout: low opacity (0.5), softened saturation (`filter: saturate(0.65)`), and confined to that one moment on the page. They do not reappear elsewhere as a color family, and their `16px` corner radius is a deliberate one-off — softer than any card in the system, appropriate only to a purely decorative shape.

## 3. Typography

**Display / Body Font:** Plus Jakarta Sans (weights 400–800), with `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` as fallback.

**Character:** One typeface family carrying the entire system through weight alone — 800 for anything that needs to command attention, 400–500 for anything meant to be read comfortably. That restraint is itself part of "confident, precise, minimal": no second display face competing for attention.

### Hierarchy
- **Display** (800, `clamp(1.8rem, 3.2vw, 2.6rem)`, 1.15 line-height, `-0.5px` tracking): the hero headline only.
- **Headline** (800, 2rem, 1.15 line-height): section titles ("Where I've Worked", "Projects") and the About heading.
- **Title** (700, 1.3rem–1.4rem, 1.2 line-height): job titles at 1.3rem; project and project-detail titles run slightly larger at 1.4rem since they carry more visual weight in the slider.
- **Body** (400, 1.05rem, 1.7 line-height): about copy, job descriptions, project descriptions. Generous 1.7 line-height keeps long paragraphs comfortable at this size.
- **Label** (600, 0.82rem–0.95rem): the system's small-text role, spanning a narrow range by context rather than one fixed size — job dates and nav links sit at 0.95rem (closer to body-adjacent, since they're primary navigation); chips, footer links, project links, the toast, and the slider count run 0.82–0.9rem (quieter, secondary chrome). All weighted 600 rather than sized up, so nothing competes with headlines.

### Named Rules
**The Weight-Over-Size Rule.** Emphasis comes from jumping to 700–800 weight, not from stretching a size outside the documented ranges above.

**The Sanctioned Exception Rule.** Two sizes sit outside the ramp entirely, by design, each used exactly once: the header wordmark (800, 1.25rem) and the slider's nav-arrow glyph (1.1rem). Neither is a role to reuse elsewhere — they're chrome for one specific element, not new hierarchy steps.

## 4. Elevation

The system is mostly flat, with elevation reserved for the handful of surfaces that are meant to feel like they're being presented to the visitor — the hero image, the About photo frame, and the active project slide. Those get a soft, wide, navy-tinted ambient shadow that reads as a deliberate "spotlight," not generic drop-shadow noise. Small circular controls (nav arrows, the slider play button, the toast) get a tighter black-based shadow instead, since they're floating UI chrome rather than featured content.

### Shadow Vocabulary
- **Ambient Lift** (`box-shadow: 0 20px 50px rgba(10, 37, 64, 0.18)` / `0 24px 50px rgba(10, 37, 64, 0.18)`): the hero image, photo frame, and active project slide. Wide, soft, tinted toward midnight rather than pure black — this is what makes the lift feel "designed" rather than default.
- **Control Shadow** (`box-shadow: 0 2px 6px rgba(10, 37, 64, 0.12)`): small circular nav controls at rest.
- **Floating Shadow** (`box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2)`): the play button and toast — chrome that floats above content rather than sitting on the page.

### Named Rules
**The Spotlight, Not Drop-Shadow Rule.** Ambient Lift is reserved for content the visitor should look at, never for structural containers like nav or footer. If everything is elevated, nothing is.

## 5. Components

### Buttons
- **Shape:** fully rounded (`{rounded.pill}`, 999px) for all standard actions — reads as approachable and confident, not boxy-corporate.
- **Primary:** cobalt background, white text, `14px 28px` padding, 600 weight. Hover deepens to Cobalt Deep and lifts 2px (`translateY(-2px)`).
- **Outline:** transparent fill, 2px midnight border, midnight text. Hover fills solid midnight with white text — a firm, confident state change rather than a subtle one.
- **Dark (signature exception):** the "View Resume" link breaks the pill shape deliberately — solid midnight fill, square corners (`radius: 0`), tighter padding (`8px 28px`). It reads as a stamped credential, not a call-to-action, which is the point: it's a document link, not an invitation to explore.

### Chips
- **Style:** white background, 1px hairline border, pill radius, midnight text, 600 weight, `6px 14px` padding. Used for tech tags on jobs and projects — small, quiet proof points, never competing with the headline above them.

### Cards / Containers
- **Corner Style:** `{rounded.md}` (14px) for job cards; `{rounded.lg}` (24px) for larger featured surfaces (hero image, photo frame, active project slide).
- **Background:** Mist for grouped content (job cards, slider nav pill); Paper for the page canvas itself.
- **Shadow Strategy:** job cards stay flat (hairline border only); only the featured surfaces named in Elevation get Ambient Lift.
- **Border:** 1px Hairline on job cards and the slider nav pill.
- **Internal Padding:** `{spacing.lg}` (32px) on job cards.
- **Company Logo:** sits in the `job-meta` column, stacked below the dates and location (`margin-top: 16px`), filling space that would otherwise sit empty in that 200px sidebar. Rendered at a fixed `24px` height (`width: auto`, `max-width: 150px`, `object-fit: contain`, `align-self: flex-start`) so wordmarks of differing native proportions sit at consistent visual weight down the column. This is the Working Proof concept applied literally to Experience: real logos, not placeholder text, are part of the proof. Source assets that bundle a tagline or extra whitespace (as Innominds' did) are cropped to just the mark before use, rather than shipped undersized to fit.

### Navigation
- Sticky header, translucent white (`rgba(255,255,255,0.92)`) with an 8px backdrop blur, 1px Hairline bottom border. Nav links are 500-weight body text that shifts to Cobalt on hover — no underline, no background pill, just a color change. Below 640px, the nav collapses into a hamburger toggle and drops down as a solid white panel.

### Signature Component: Project Slider
A three-up carousel (previous / active / next) where the active slide is large and sharp, the side slides are visually receded (150px wide, 45% opacity, brightening on hover). This is the system's most expressive component — it exists specifically to let a visitor "audition" a project's live demo inline before committing a click, reinforcing the Working Proof concept directly.

Slide swaps transition `width` and `height` directly rather than `transform` — a deliberate exception to the usual transform/opacity-only motion rule. The three thumbnails share one flex row and need to reflow together as the active slide grows and its neighbors shrink; a transform-only swap would scale the boxes without the siblings making room, breaking the layout. The trade-off (layout thrash on a rare, deliberate user action) is accepted here; it should not be treated as a pattern to reuse elsewhere.

## 6. Do's and Don'ts

### Do:
- **Do** keep cobalt as the only color that signals "actionable" — buttons, active links, hover states.
- **Do** use the pill shape (999px) for standard buttons and chips; reserve square corners for the one deliberate exception (the resume link).
- **Do** reserve Ambient Lift shadows for featured content only (hero image, photo frame, active project slide) — never for structural chrome.
- **Do** let real, verifiable proof (live project links, GitHub) carry the Projects and Experience sections, per PRODUCT.md's "verifiable over descriptive" principle.
- **Do** keep the header's Contact link reachable at every scroll position — PRODUCT.md's belief ladder depends on it.

### Don't:
- **Don't** let this read as a generic, unmodified template portfolio — no stock Bootstrap card grids, no default framework styling left unclaimed. (PRODUCT.md anti-reference.)
- **Don't** add gimmicky or novelty visual effects — bouncing icons, confetti, cartoonish illustration — anything that trades credibility for cuteness with a recruiter audience. (PRODUCT.md anti-reference.)
- **Don't** introduce a third accent hue outside cobalt/midnight for interactive elements.
- **Don't** let the About section's decorative amber/lavender blobs grow louder than a whisper — keep opacity low and saturation soft; they're a signature detail, not a focal point.
- **Don't** apply Ambient Lift-style shadows to everything — if every card floats, the featured surfaces stop feeling featured.
