"use client";

import { Button } from "@/components/ui/button";
import { useTimestamp } from "@/lib/nuqs/use-timestamp";
import { ArrowLeft, ArrowRight, CaretLineDown } from "@phosphor-icons/react";

export const PreviousDayButton = () => {
	const { date, setDate } = useTimestamp();

	const handleClick = () => {
		// Get the previous day from the provided `date` value
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();

		const previousDate = new Date(year, month, day - 1, 0, 0, 0, 0);

		setDate(previousDate);
	};

	return (
		<Button
			variant="outline"
			onClick={handleClick}
			className="flex items-center gap-2"
		>
			<ArrowLeft size={16} />
			<span className="hidden sm:block">Previous Day</span>
		</Button>
	);
};

export const NextDayButton = () => {
	const { date, setDate } = useTimestamp();

	const handleClick = () => {
		// Get the previous day from the provided `date` value
		const year = date.getFullYear();
		const month = date.getMonth();
		const day = date.getDate();

		const nextDate = new Date(year, month, day + 1, 0, 0, 0, 0);

		setDate(nextDate);
	};

	return (
		<Button
			variant="outline"
			onClick={handleClick}
			className="flex items-center gap-2"
		>
			<span className="hidden sm:block">Next Day</span>
			<ArrowRight size={16} />
		</Button>
	);
};

export const TodayButton = () => {
	const { setDate } = useTimestamp();

	const handleClick = () => {
		setDate(new Date());
	};

	return (
		<Button
			variant="outline"
			onClick={handleClick}
			className="flex items-center gap-2"
		>
			<CaretLineDown size={16} />
			<span className="hidden sm:block">Today</span>
		</Button>
	);
};
