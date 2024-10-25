import Image from "next/image";
import FlickeringGrid from "@/components/ui/flickering-grid";
import type { API } from "@/lib/trpc/routers/_app";
import { cn } from "@/lib/utils";

type CompetitorProps = {
	team:
		| NonNullable<API["output"]["nba"]["allGames"]>[0]["away"]
		| NonNullable<API["output"]["nba"]["allGames"]>[0]["home"];
	homeAway: "away" | "home";
};

export const Competitor = ({ team, homeAway }: CompetitorProps) => {
	return (
		<div className="overflow-hidden relative flex flex-col gap-2 items-center p-4 md:min-w-[130px]">
			<div
				className={cn(
					"z-10 absolute inset-0 from-card to-transparent",
					homeAway === "home" && "bg-gradient-to-r",
					homeAway === "away" && "bg-gradient-to-l"
				)}
			></div>
			<FlickeringGrid
				className="z-0 absolute inset-0"
				squareSize={4}
				gridGap={6}
				color={`#${team.color}`}
				maxOpacity={0.5}
				flickerChance={0.1}
				height={130}
				width={130}
			/>
			<div className="z-10 flex flex-col gap-2 items-center justify-center h-full">
				{team.logo && team.name && (
					<Image
						className="w-8 sm:w-10 md:w-12"
						src={team.logo}
						alt={team.name}
						width={48}
						height={48}
					/>
				)}
				<span className="text-sm font-bold">{team.name}</span>
			</div>
		</div>
	);
};
