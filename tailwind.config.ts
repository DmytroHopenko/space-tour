import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'home-pattern-d' : "url('/assets/home/background-home-desktop.jpg')",
        'home-pattern-t': "url('/assets/home/background-home-tablet.jpg')",
        'home-pattern-m': "url('/assets/home/background-home-mobile.jpg')",
        'crew-pattern-d': "url('/assets/crew/background-crew-desktop.jpg')",
        'crew-pattern-t': "url('/assets/crew/background-crew-tablet.jpg')",
        'crew-pattern-m': "url('/assets/crew/background-crew-mobile.jpg')",
        'destination-pattern-d': "url('/assets/destination/background-destination-desktop.jpg')",
        'destination-pattern-t': "url('/assets/destination/background-destination-tablet.jpg')",
        'destination-pattern-m': "url('/assets/destination/background-destination-mobile.jpg')",
        'tech-pattern-d': "url('/assets/technology/background-technology-desktop.jpg')",
        'tech-pattern-t': "url('/assets/technology/background-technology-tablet.jpg')",
        'tech-pattern-m': "url('/assets/technology/background-technology-mobile.jpg')",
      }
    },
  },
  plugins: [],
};
export default config;
