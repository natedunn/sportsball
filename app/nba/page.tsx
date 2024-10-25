import { DatePicker } from "@/components/ui/date-picker";
import { AllGames } from "./_components/AllGames";
import { GamesHeaderText } from "./_components/GamesHeaderText";

export default function NbaPage() {
	return (
		<div className="flex flex-col gap-4 py-12">
			<h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
				<GamesHeaderText />
			</h1>
			<DatePicker />
			<AllGames />
		</div>
	);
}
