# Design System Strategy: The Animated Canvas

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Interactive Storyboard."** 

This system moves beyond the rigid, sterile grids of corporate tech to embrace the kinetic energy of a modern animated series. We are not just building a registration portal; we are building a playground for creators. The aesthetic leverages "Neo-Pop Illustration" principles—combining high-end editorial precision with the chunky, tactile joy of physical toys. 

We break the "template" look by utilizing **intentional overlap** (elements breaking out of their containers), **dynamic asymmetry**, and a **"Gravity-Defying" layout** where components feel like they are floating at different depths within a vibrant, multi-layered world.

## 2. Colors & Surface Architecture
The palette is a high-octane mix of deep purples (`primary`) and electric yellows (`secondary`), grounded by a soft, whimsical lavender-tinted background (`surface`).

### The "No-Line" Rule
Traditional 1px grey borders are strictly prohibited. They feel clinical and thin. Instead, define boundaries through:
- **Tonal Shifts:** Place a `surface_container_low` card against a `surface` background.
- **Color Blocking:** Use high-contrast background shifts (e.g., a `primary_container` section transitioning into a `secondary_container` section) to signal a change in content.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked, "pillowy" layers.
- **Base Layer:** `surface` (#fef3ff) - The canvas.
- **Secondary Layer:** `surface_container` (#f5e2ff) - Use for large content groupings.
- **Interactive Layer:** `surface_container_highest` (#edd3ff) - Reserved for nested elements that require the most "lift."

### Signature Textures & The "Glass" Rule
To elevate the "cartoon" feel into "premium animation," use subtle gradients and blurs:
- **Hero Gradients:** Transition from `primary` (#702ae1) to `primary_container` (#b28cff) at a 135-degree angle to create a sense of internal light.
- **Frosted Elements:** For floating navigation or modal overlays, use `surface_container_lowest` at 80% opacity with a `20px` backdrop-blur. This mimics the look of high-end acrylic or "frosted vinyl" toys.

## 3. Typography: The Editorial Voice
We use a dual-typeface system to balance whimsy with professional clarity.

- **Display & Headlines (Spline Sans):** This is our "Character Voice." Use `display-lg` and `headline-lg` for bold, punchy statements. The geometric nature of Spline Sans mimics the clean line-work of modern animation. Use `on_background` (#3a264b) for maximum readability.
- **Body & Labels (Plus Jakarta Sans):** Our "Narrative Voice." Plus Jakarta Sans offers incredible legibility at smaller scales (`body-md`, `label-sm`) while maintaining a friendly, open-curved aesthetic that matches our rounded corners.
- **The Hierarchy Rule:** Headlines should be set with tight letter-spacing (-0.02em) to feel "chunky" and impactful, while body text should have generous leading (1.5x) to ensure the vibrant background doesn't overwhelm the reading experience.

## 4. Elevation & Depth: Tonal Layering
In this system, depth is "Physical," not "Digital." 

- **The Layering Principle:** Forget drop shadows for standard cards. Instead, achieve lift by placing a `surface_container_lowest` (#ffffff) card on top of a `surface_container` (#f5e2ff). This creates a "clean-edge" depth that feels intentional and modern.
- **Ambient Shadows (The "Cloud" Shadow):** When an element must float (like a primary CTA or a Modal), use a highly diffused shadow: `box-shadow: 0 20px 40px rgba(58, 38, 75, 0.08)`. Note the use of `on_surface` (#3a264b) as the shadow tint rather than pure black.
- **The Ghost Border:** If a container requires more definition, use a 2px "Ghost Border" using `outline_variant` at 20% opacity. This provides a "sticker-peel" effect without the harshness of a standard stroke.

## 5. Components

### Buttons: The "Chunky" Interaction
Buttons are the primary tactile element of the site.
- **Primary Button:** Large `xl` (3rem) rounded corners. Background: `primary`. Text: `on_primary`. 
- **The Press Effect:** On `:hover`, the button should scale by 1.05 and shift slightly upward. On `:active`, use a `transform: translateY(4px)` to simulate "pressing" into the page.
- **Secondary Button:** `secondary_container` background with `on_secondary_container` text. This provides a "pop" of yellow that feels energetic.

### Cards: No-Divider Principle
- **Forbid Dividers:** Never use a horizontal line to separate content. Use the Spacing Scale (e.g., `8` / 2.75rem) to create clear groupings.
- **Style:** Cards should use `lg` (2rem) roundedness. Use `surface_container_low` for the card body and `surface_container_highest` for a "header" area within the card.

### Input Fields: Soft Focus
- **Style:** `md` (1.5rem) roundedness. Background: `surface_container_lowest`. 
- **Focus State:** Instead of a thin blue line, a focused input should gain a 3px solid `primary_container` border and a subtle `primary_fixed_dim` inner glow.

### Additional Signature Component: "The Achievement Badge"
- **Context:** Perfect for hackathon tracks. 
- **Style:** Use a `tertiary_container` (#8ab0ff) circular base with an illustrative icon. Use `full` roundedness and a slight 5-degree rotation to make it feel like a sticker slapped onto the UI.

## 6. Do's and Don'ts

### Do:
- **Use Intentional Asymmetry:** Let an image or an icon overlap the edge of its container by `1rem` to create energy.
- **Use Tonal Stacking:** Always place lighter surfaces on darker ones to create natural hierarchy.
- **Embrace "Big" White Space:** Use the `16` (5.5rem) and `20` (7rem) spacing tokens between major sections to let the "Animated" elements breathe.

### Don't:
- **Don't use 1px Borders:** They break the "cartoon" illusion and feel fragile.
- **Don't use Pure Black (#000000):** It is too heavy for this palette. Use `on_background` (#3a264b) for all "black" needs.
- **Don't use Square Corners:** Even 4px or 8px is too sharp. Stick to the `DEFAULT` (1rem) as a minimum to maintain the "Friendly/Playful" vibe.
- **Don't Overcrowd:** The "Animated" style requires space to move. If a layout feels cramped, increase the spacing scale by one tier.