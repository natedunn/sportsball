import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animatePlugin from "tailwindcss-animate";

const maxWidth = "50rem";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "0.5rem",
			screens: {
				sm: maxWidth,
				md: maxWidth,
				lg: maxWidth,
				xl: maxWidth,
				"2xl": maxWidth,
			},
		},
		extend: {
			colors: {
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
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [
		plugin(function ({
			addVariant,
		}: {
			addVariant: (name: string, variants: string[]) => void;
		}) {
			addVariant("hocus", ["&:hover", "&:focus"]);
			addVariant("group-hocus", [
				":merge(.group):hover &",
				":merge(.group):focus &",
			]);
			addVariant("factive", ["&:active", "&:focus"]);
			addVariant("all", ["&:active", "&:focus", "&:hover"]);
			addVariant("list", [".list-primary &"]);
			addVariant("light", ["html.light &"]);
		}),
		animatePlugin,
	],
};
export default config;
