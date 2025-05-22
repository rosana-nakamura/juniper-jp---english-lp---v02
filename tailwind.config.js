module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-400": "var(--primary-400)",
        primarycream: "var(--primarycream)",
        "primarygreen-200": "var(--primarygreen-200)",
        "primarygreen-300": "var(--primarygreen-300)",
        "primarygreen-500": "var(--primarygreen-500)",
        "secondarylime-200": "var(--secondarylime-200)",
        tertiarycream: "var(--tertiarycream)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "all-devices-12-small-text-bold":
          "var(--all-devices-12-small-text-bold-font-family)",
        "all-devices-14-paragraph-s-bold":
          "var(--all-devices-14-paragraph-s-bold-font-family)",
        "all-devices-16-paragraph-m-bold":
          "var(--all-devices-16-paragraph-m-bold-font-family)",
        "all-devices-16-paragraph-m-regular":
          "var(--all-devices-16-paragraph-m-regular-font-family)",
        "all-devices-18-paragraph-l-bold":
          "var(--all-devices-18-paragraph-l-bold-font-family)",
        "all-devices-18-paragraph-l-regular":
          "var(--all-devices-18-paragraph-l-regular-font-family)",
        "desktop-20-heading-s-bold":
          "var(--desktop-20-heading-s-bold-font-family)",
        "desktop-24-heading-m-bold":
          "var(--desktop-24-heading-m-bold-font-family)",
        "desktop-40-heading-XL-bold":
          "var(--desktop-40-heading-XL-bold-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
