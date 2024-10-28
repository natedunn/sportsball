import Image from "next/image";
import { FlickeringTeamColorGrid } from "./flickering-team-color-grid";
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
			<style jsx>{`
				.
			`}</style>
			<div
				className={cn(
					"z-10 absolute inset-0 from-card to-transparent from-40%",
					homeAway === "home" && "bg-gradient-to-tr",
					homeAway === "away" && "bg-gradient-to-tl"
				)}
			></div>
			<FlickeringTeamColorGrid dark={team.darkColor} light={team.lightColor} />
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
				<div className="flex flex-col items-center">
					<span className="text-sm font-bold">{team.name}</span>
					<span className="text-sm font-mono">{team.seasonRecord}</span>
				</div>
			</div>
		</div>
	);
};
