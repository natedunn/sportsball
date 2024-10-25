import { DatePicker } from "@/components/ui/date-picker";
import { AllGames } from "./_components/AllGames";
import { GamesHeaderText } from "./_components/GamesHeaderText";
import {
	PreviousDayButton,
	NextDayButton,
	TodayButton,
} from "./_components/paginate-date";
import { ThemeSwitchButton } from "@/components/theme-switch-button";
import { Lightbulb } from "@phosphor-icons/react/dist/ssr";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "NBA scoreboard — Sportball",
};

export default function NbaPage() {
	return (
		<div className="flex flex-col gap-4 py-12">
			<h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
				<GamesHeaderText />
			</h1>
			<div className="flex items-center justify-between gap-4 flex-wrap">
				<div className="flex items-center flex-wrap gap-4">
					<PreviousDayButton />
					<DatePicker />
					<TodayButton />
					<NextDayButton />
				</div>
				<ThemeSwitchButton>
					<Lightbulb size={16} />
					<span>Theme</span>
				</ThemeSwitchButton>
			</div>
			<AllGames />
		</div>
	);
}
