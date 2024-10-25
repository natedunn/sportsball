"use client";

import { useTimestamp } from "@/lib/nuqs/use-timestamp";

export const GamesHeaderText = () => {
	const { date, currentDate, formatDate } = useTimestamp();

	if (formatDate(date) === formatDate(currentDate)) {
		return <span>Today&apos;s Games</span>;
	}
	return <span>Games for {date.toLocaleDateString()}</span>;
};
