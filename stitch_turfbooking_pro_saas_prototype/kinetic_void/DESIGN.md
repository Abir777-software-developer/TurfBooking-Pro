# Design System Specification: The Kinetic Void

## 1. Creative North Star: The Kinetic Void
This design system is anchored by the concept of **"The Kinetic Void"**—a digital arena where high-performance data meets atmospheric depth. We are moving away from the rigid, "boxed-in" layout of traditional sports apps. Instead, we treat the screen as an expansive, multidimensional space where movement is fluid and energy is palpable. 

The aesthetic is a **Glass-Neumorphic Hybrid**. We leverage the soft, extruded volumes of Neumorphism to suggest physical equipment (the grip of a ball, the curve of a track) and the ethereal transparency of Glassmorphism to represent the speed and clarity of elite performance. By using intentional asymmetry and overlapping elements, we create a sense of forward motion that applies to any court, field, or rink.

---

## 2. Color & Atmospheric Theory

### The Palette (Dark & Light)
In this system, color is not just decoration; it is energy. 
- **Dark Mode (The Obsidian Void):** Uses `#131313` as a deep, non-distracting base. The primary accent is `#00FF94` (Electric Mint), a high-vibrancy hue that cuts through the dark to highlight critical performance metrics.
- **Light Mode (The Alabaster Arena):** Uses `#F2FFF1` as the base. The primary accent shifts to a sophisticated **Deep Court Teal** (`#006D3C`), providing a high-contrast, professional editorial feel.

### The "No-Line" Rule
Traditional 1px borders are prohibited. They create "visual noise" that traps the eye.
*   **Instruction:** Define boundaries through **Background Shifts**. A `surface-container-low` section sitting on a `surface` background is sufficient to denote a change in context.
*   **Surface Hierarchy:** Use the `surface-container` tiers (Lowest to Highest) to create a "nested" physical depth. An inner card should feel like it is either carved out of or floating slightly above its parent container.

### Signature Textures
*   **The Kinetic Gradient:** Use a linear gradient from `primary` (#00FF94) to `primary-container` (#00713F) at a 135-degree angle for main CTAs. This creates a "pulse" effect.
*   **Glassmorphism:** For floating overlays (modals, navigation bars), use `surface-variant` with a 60% opacity and a `24px` backdrop-blur.

---

## 3. Typography: Editorial Authority

We use a high-contrast type pairing to balance technical precision with aggressive athleticism.

*   **Display & Headlines (Space Grotesk):** This typeface provides a technical, "scorecard" aesthetic. Use `display-lg` (3.5rem) with tight tracking (-2%) for hero statistics to make them feel monumental.
*   **Body & Titles (Manrope):** A sophisticated geometric sans-serif that ensures readability in dense data environments.
*   **Hierarchy Note:** Use `label-md` in all-caps with 10% letter spacing for category tags (e.g., "LIVE," "QUARTER 3," "FIRST SERVE").

---

## 4. Elevation & Depth: Tonal Layering

Shadows and borders are crutches; we use **Tonal Stacking**.

*   **The Layering Principle:** 
    *   Base: `surface`
    *   Sectioning: `surface-container-low`
    *   Interactive Cards: `surface-container-highest`
*   **Ambient Shadows:** When a float is required, use a shadow with a `40px` blur, `0px` offset, and `6%` opacity using the `on-surface` color. It should feel like a soft glow, not a dark smudge.
*   **The Ghost Border:** If high-contrast separation is required for accessibility, use the `outline-variant` at **15% opacity**. Never 100%.

---

## 5. Component Guidelines

### Buttons: The Kinetic Strike
*   **Primary:** A pill-shaped (`full` roundedness) container using the Kinetic Gradient. No border. Text is `on-primary` (Deep Green), bold.
*   **Secondary:** A "Glass" button. Semi-transparent background with a 1px "Ghost Border."
*   **State:** On hover, the button should scale by 1.02x and increase backdrop-blur intensity.

### Cards: The Arena Modules
*   **Rule:** Forbid divider lines. 
*   **Style:** Use `xl` (1.5rem) corner radius. Use a subtle inner-glow (1px white inner shadow at 5% opacity) on the top edge to simulate light hitting the edge of a glass pane.
*   **Multi-sport Context:** Use the background of the card to house a desaturated, high-motion crop of the sport (a blurred texture of a tennis court or a basketball rim), layered under a `surface-container` tint.

### Performance Chips
*   Small, high-contrast pills. For "Live" states, use `primary_fixed_dim` with a soft pulsing animation. 

### Input Fields: The Precision Slot
*   Use `surface-container-lowest` for the field background to create a "recessed" look (Neumorphic inset).
*   Focus state: The "Ghost Border" transitions to a 1px `primary` solid edge with a soft outer glow.

---

## 6. Do’s and Don’ts

### Do:
*   **Embrace Negative Space:** Allow the "Void" to breathe. High-performance data requires room to be interpreted.
*   **Use Asymmetry:** Place a large display stat (e.g., "98%") partially overlapping the edge of a container to create a sense of raw, uncontained energy.
*   **Animate Transitions:** Elements should "slide and fade" into place, mimicking the movement of an athlete entering the frame.

### Don’t:
*   **Don't use 100% Black:** Even in dark mode, the `surface` is `#131313`. Pure black kills the depth of the glass effects.
*   **Don't use Grid Lines:** If you feel the urge to draw a line between two items, increase the vertical padding instead.
*   **Don't Default to Football:** Use abstract shapes—circles (balls), arcs (tracks), and rectangles (courts)—to ensure the system feels home to any athlete.

---

## 7. Token Reference Summary

| Token | Value (Dark) | Value (Light) | Usage |
| :--- | :--- | :--- | :--- |
| **Surface Base** | `#131313` | `#F2FFF1` | Main background |
| **Primary Accent** | `#00FF94` | `#006D3C` | High-energy actions |
| **Secondary Ctr** | `#4A4B4F` | `#E2E2E6` | Tertiary UI elements |
| **Outline Variant**| `#3B4B3E` (15% Opacity) | `#849586` (20% Opacity) | The "Ghost Border" |
| **Rounding (LG)** | `1rem` | `1rem` | Standard Card Radius |
| **Rounding (Full)**| `9999px` | `9999px` | Pills and CTAs |