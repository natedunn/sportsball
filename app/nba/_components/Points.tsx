import { State } from "@/lib/schema/external/nba-scoreboard";
import { cn } from "@/lib/utils";

export const PointsWrapper = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex gap-2 items-center">{children}</div>;
};

export const Point = ({
	total = "0",
	state,
}: {
	total?: string;
	state: "active" | "winner" | "loser";
}) => {
	return (
		<div
			className={cn(
				"flex gap-2 items-center text-2xl sm:text-3xl md:text-4xl font-bold font-mono",
				state === "winner" && "underline",
				state === "loser" && "opacity-50"
			)}
		>
			{total}
		</div>
	);
};

export const PointSeparator = () => {
	return (
		<div className="font-bold text-xl sm:text-2xl md:text-3xl leading-0 opacity-50">
			—
		</div>
	);
};

export const Points = ({
	away,
	home,
	state: gameState,
}: {
	away: string;
	home: string;
	state: State;
}) => {
	const getTeamState = (homeAway: "home" | "away") => {
		if (gameState === "in" || gameState == "pre") return "active";

		if (
			(homeAway === "home" && Number(home) > Number(away)) ||
			(homeAway === "away" && Number(away) > Number(home))
		) {
			return "winner";
		}
		return "loser";
	};

	return (
		<PointsWrapper>
			<Point total={away} state={getTeamState("away")} />
			<PointSeparator />
			<Point total={home} state={getTeamState("home")} />
		</PointsWrapper>
	);
};
