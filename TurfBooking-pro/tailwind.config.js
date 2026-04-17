/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-primary": "var(--on-primary)",
        "surface-dim": "var(--surface-dim)",
        "on-primary-fixed-variant": "var(--on-primary-fixed-variant)",
        "background": "var(--background)",
        "tertiary-fixed-dim": "var(--tertiary-fixed-dim)",
        "on-tertiary-fixed-variant": "var(--on-tertiary-fixed-variant)",
        "on-secondary-fixed": "var(--on-secondary-fixed)",
        "on-secondary-fixed-variant": "var(--on-secondary-fixed-variant)",
        "surface-container": "var(--surface-container)",
        "surface-bright": "var(--surface-bright)",
        "surface-container-high": "var(--surface-container-high)",
        "surface": "var(--surface)",
        "on-primary-fixed": "var(--on-primary-fixed)",
        "error": "var(--error)",
        "inverse-primary": "var(--inverse-primary)",
        "secondary-container": "var(--secondary-container)",
        "inverse-surface": "var(--inverse-surface)",
        "on-surface-variant": "var(--on-surface-variant)",
        "on-primary-container": "var(--on-primary-container)",
        "tertiary-fixed": "var(--tertiary-fixed)",
        "surface-container-low": "var(--surface-container-low)",
        "error-dim": "var(--error-dim)",
        "on-surface": "var(--on-surface)",
        "secondary-fixed-dim": "var(--secondary-fixed-dim)",
        "primary-fixed-dim": "var(--primary-fixed-dim)",
        "on-tertiary": "var(--on-tertiary)",
        "outline": "var(--outline)",
        "primary-fixed": "var(--primary-fixed)",
        "secondary-fixed": "var(--secondary-fixed)",
        "tertiary": "var(--tertiary)",
        "on-secondary": "var(--on-secondary)",
        "tertiary-container": "var(--tertiary-container)",
        "on-tertiary-container": "var(--on-tertiary-container)",
        "tertiary-dim": "var(--tertiary-dim)",
        "surface-container-highest": "var(--surface-container-highest)",
        "secondary": "var(--secondary)",
        "surface-container-lowest": "var(--surface-container-lowest)",
        "on-tertiary-fixed": "var(--on-tertiary-fixed)",
        "on-background": "var(--on-background)",
        "on-error": "var(--on-error)",
        "primary-dim": "var(--primary-dim)",
        "surface-variant": "var(--surface-variant)",
        "outline-variant": "var(--outline-variant)",
        "surface-tint": "var(--surface-tint)",
        "error-container": "var(--error-container)",
        "secondary-dim": "var(--secondary-dim)",
        "on-error-container": "var(--on-error-container)",
        "inverse-on-surface": "var(--inverse-on-surface)",
        "primary-container": "var(--primary-container)",
        "primary": "var(--primary)"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
