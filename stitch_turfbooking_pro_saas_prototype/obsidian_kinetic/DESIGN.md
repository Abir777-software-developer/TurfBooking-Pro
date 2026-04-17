# Design System Strategy: The Kinetic Void

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Void"**
This design system moves away from the static, "boxy" nature of traditional SaaS platforms to embrace a sense of weightlessness and orbital motion. It is an editorial take on the futuristic athlete—where high-performance data meets the fluidity of the pitch. 

To break the "template" look, we leverage **intentional asymmetry**. Hero elements should bleed off the edge of the viewport, and floating containers should utilize varying Z-index elevations to create a "stacked glass" effect. We avoid the rigid 12-column grid in favor of an **interlocking layer approach**, where components feel as though they are magnetically suspended in a deep obsidian space.

## 2. Colors: Obsidian & Electric Pulse
The palette is rooted in a "Deep Dark" philosophy. The base is not a true black, but a rich, layered obsidian that provides the canvas for vibrant, neon-infused data and interactions.

### The "No-Line" Rule
**Borders are forbidden for sectioning.** To separate a sidebar from a main feed or a header from a hero, use background shifts. A `surface-container-low` (#10131a) section sitting on a `background` (#0b0e14) provides a sophisticated, seamless transition that feels architectural rather than "drawn."

### Surface Hierarchy & Nesting
Depth is achieved through the physical stacking of Material tokens.
*   **Base Level:** `surface` (#0b0e14)
*   **Low Elevation (Recessed):** `surface-container-low` (#10131a)
*   **Medium Elevation (Active):** `surface-container` (#161a21)
*   **High Elevation (Floating):** `surface-container-highest` (#22262f)

### The Glass & Gradient Rule
For primary CTAs and high-impact data points, utilize **Signature Textures**. 
*   **The Pulse Gradient:** Transition from `primary` (#a2ffbf) to `secondary` (#00cffc) at a 135-degree angle. This represents the energy of the game.
*   **Glassmorphism:** For floating overlays (e.g., booking confirmations), use `surface-variant` (#22262f) at 60% opacity with a `24px` backdrop-blur. This ensures the "antigravity" feel.

## 3. Typography: The Editorial Engine
We utilize a dual-typeface system to balance technical precision with aggressive sport-lifestyle aesthetics.

*   **Display & Headlines (Space Grotesk):** This is our "Engine." It’s wide, technical, and authoritative. Use `display-lg` (3.5rem) for hero bookings to create a high-end editorial impact. Maintain tight letter-spacing (-0.02em) for headlines.
*   **Body & Labels (Manrope):** Our "Utility." Manrope provides excellent legibility in the dark theme. Use `body-md` (0.875rem) for most metadata. 
*   **Visual Hierarchy:** Use `tertiary` (#d674ff) for micro-labels (e.g., "Field Status") to provide a high-contrast "ping" against the dark background.

## 4. Elevation & Depth: Tonal Sculpting
Traditional drop shadows are too heavy for a "futuristic" UI. We use light and tone to sculpt the interface.

*   **The Layering Principle:** Instead of shadows, use "recessed" logic. An input field should be `surface-container-lowest` (#000000) carved into a `surface-container` (#161a21) background, creating a Neumorphic "inset" look.
*   **Ambient Shadows:** For floating "Antigravity" cards, use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4)`. To add "soul," add a 1px "Ghost Border" using `outline-variant` (#45484f) at 15% opacity to catch the simulated light.
*   **3D Tilt:** High-value cards (Turf Showcases) should implement a subtle JS-based tilt effect (max 5 degrees) to respond to mouse movement, reinforcing the "floating in space" aesthetic.

## 5. Components

### Buttons: The Kinetic Trigger
*   **Primary:** A gradient fill (`primary` to `primary_container`). Border-radius: `full`. No border. On hover, add a subtle `primary` outer glow (8px blur).
*   **Secondary:** Glassmorphic. `surface_variant` at 20% opacity, 1px Ghost Border (`outline_variant` at 20%).
*   **Tertiary:** Pure text using `primary_dim` with a 2px underline that expands from center on hover.

### Cards: The Floating Pitch
*   **Rule:** Forbid divider lines.
*   **Structure:** Use `xl` (1.5rem) roundedness. Use `surface-container-high` for the card body. Use vertical padding (`spacing-32`) to separate the title from the metadata.
*   **Interaction:** On hover, the card should lift (translateY: -8px) and the Ghost Border opacity should increase to 40%.

### Input Fields: Inset Tech
*   **Style:** Neumorphic "inset." Background: `surface-container-lowest`. 
*   **Focus State:** The border doesn't just change color; it glows. Use `secondary` (#00cffc) at 50% opacity for a 1px border and a 4px outer blur.

### Chips: The Status Pings
*   **Selection Chips:** Use `secondary_container` with `on_secondary_container` text.
*   **Vibe:** Should look like small LED indicators on a control panel.

### Specialized Component: The "Orbital" Loader
For turf availability searches, use an asymmetrical spinning ring using `primary` and `tertiary` gradients, mimicking a scanning radar.

## 6. Do's and Don'ts

### Do:
*   **Do** use `display-lg` typography for numbers (e.g., prices, clock times) to make them feel like "stats."
*   **Do** use parallax on background obsidian textures to create a sense of infinite depth.
*   **Do** prioritize `primary` (#a2ffbf) for "Success" actions and `tertiary` (#d674ff) for "Urgency/Live" indicators.

### Don't:
*   **Don't** use 1px solid lines to separate content. Use the `surface-container` scale.
*   **Don't** use pure white (#ffffff) for body text. Use `on_surface_variant` (#a9abb3) to reduce eye strain and maintain the "Premium Dark" vibe.
*   **Don't** use "Snap-to" animations. All transitions must use `cubic-bezier(0.23, 1, 0.32, 1)` for a smooth, high-end feel.