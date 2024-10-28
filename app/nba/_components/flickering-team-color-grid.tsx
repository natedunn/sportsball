"use client";

import FlickeringGrid from "@/components/ui/flickering-grid";
import { useTheme } from "next-themes";

export const FlickeringTeamColorGrid = ({
	dark,
	light,
}: {
	dark: string;
	light: string;
}) => {
	const { theme } = useTheme();

	return (
		<FlickeringGrid
			className="z-0 absolute inset-0"
			squareSize={4}
			gridGap={6}
			color={`#${theme === "dark" ? dark : light}`}
			maxOpacity={0.7}
			flickerChance={0.1}
			height={130}
			width={130}
		/>
	);
};
