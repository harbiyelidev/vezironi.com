import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [typography],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              position: "relative",
              scrollMarginTop: "5rem",
              '&:hover a': {
                textDecoration: "underline",
              },
              '&::before': {
                content: "'#'",
                position: "absolute",
                left: "-1.5rem",
                color: "#888",
              },
            },
            h2: {
              position: "relative",
              scrollMarginTop: "5rem",
              '&:hover a': {
                textDecoration: "underline",
              },
              '&::before': {
                content: "'#'",
                position: "absolute",
                left: "-1.5rem",
                color: "#888",
              },
            },
            h3: {
              position: "relative",
              scrollMarginTop: "5rem",
              '&:hover a': {
                textDecoration: "underline",
              },
              '&::before': {
                content: "'#'",
                position: "absolute",
                left: "-1.5rem",
                color: "#888",
              },
            },
          },
        },
      },
    },
  },
};

export default config;
