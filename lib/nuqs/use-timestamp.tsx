"use client";

import { parseAsTimestamp, useQueryState } from "nuqs";
import { useEffect, useMemo } from "react";

type UseTimestampArgs = {
	defaultDate?: Date;
};

export const useTimestamp = (args?: UseTimestampArgs) => {
	const currentDate = useMemo(() => new Date(), []);
	const d = args?.defaultDate ?? currentDate;

	const [date, setDate] = useQueryState<Date>(
		"date",
		parseAsTimestamp.withDefault(d)
	);

	const formatDate = (date: Date): string => {
		return (
			date.getFullYear() +
			(date.getMonth() + 1).toString().padStart(2, "0") +
			date.getDate().toString().padStart(2, "0")
		);
	};

	useEffect(() => {
		if (formatDate(date) === formatDate(currentDate)) {
			setDate(null);
		}
	}, [date, setDate, currentDate]);

	return {
		date,
		setDate,
		apiFormat: formatDate(date),
		currentDate,
		formatDate,
	};
};
