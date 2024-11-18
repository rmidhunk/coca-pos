import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        heading: [
          "64px",
          {
            lineHeight: "76.8px",
            letterSpacing: "-3%",
            fontWeight: "500",
          },
        ],
        "400-14": [
          "14px",
          {
            lineHeight: "19.6px",
            fontWeight: "400",
          },
        ],
        "400-16": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: "400",
          },
        ],
        "400-18": [
          "18px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "400-20": [
          "20px",
          {
            lineHeight: "28px",
            fontWeight: "400",
          },
        ],
        "500-14": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: "500",
          },
        ],
        "500-24": [
          "24px",
          {
            lineHeight: "36px",
            fontWeight: "500",
          },
        ],
        "500-32": [
          "32px",
          {
            lineHeight: "40px",
            fontWeight: "500",
          },
        ],
        "500-48": [
          "48px",
          {
            lineHeight: "64px",
            fontWeight: "500",
          },
        ],
        "500-64": [
          "64px",
          {
            lineHeight: "76.8px",
            fontWeight: "500",
          },
        ],
        "600-16": [
          "16px",
          {
            lineHeight: "20px",
            fontWeight: "600",
          },
        ],
        "600-18": [
          "18px",
          {
            lineHeight: "27px",
            fontWeight: "600",
          },
        ],
      },
      colors: {
        "background-blue": "#F8F9FD",
        "background-black": "#19191C",
        "primary-orange": "#FF5C00",
        "grey-1": "#4D4E57",
        "grey-2": "#C2C2C2",
        "border-1": "#E4E4E4",
        "border-2": "#35353D",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
