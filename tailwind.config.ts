import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#050816",
        ink: "#0B1120",
        cyanGlow: "#00D4FF",
        electricBlue: "#2563EB"
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 212, 255, 0.24)",
        "glow-strong": "0 0 70px rgba(0, 212, 255, 0.34)"
      },
      backgroundImage: {
        "radial-cyan": "radial-gradient(circle at center, rgba(0, 212, 255, 0.18), transparent 45%)",
        "radial-blue": "radial-gradient(circle at center, rgba(37, 99, 235, 0.16), transparent 48%)"
      },
      animation: {
        aurora: "aurora 16s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite"
      },
      keyframes: {
        aurora: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(2%, -2%, 0) scale(1.08)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        shimmer: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" }
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.45" },
          "50%": { opacity: "0.85" }
        }
      }
    }
  },
  plugins: []
};

export default config;
