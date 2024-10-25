import { DatePicker } from "@/components/ui/date-picker";
import { AllGames } from "./_components/AllGames";
import { GamesHeaderText } from "./_components/GamesHeaderText";
import {
	PreviousDayButton,
	NextDayButton,
	TodayButton,
} from "./_components/paginate-date";

export default function NbaPage() {
	return (
		<div className="flex flex-col gap-4 py-12">
			<h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
				<GamesHeaderText />
			</h1>
			<div className="flex items-center gap-4">
				<PreviousDayButton />
				<DatePicker />
				<TodayButton />
				<NextDayButton />
			</div>
			<AllGames />
		</div>
	);
}
