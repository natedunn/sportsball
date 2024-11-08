const getOrdinalSuffix = (day: number): string => {
	if (day > 3 && day < 21) return "th";
	switch (day % 10) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
};

export const formatGameDate = (date: Date, dayOf: boolean = false): string => {
	// Get user's local timezone
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const formatOptions = { timeZone };

	const currentYear = new Date().getFullYear();
	const dateYear = date.getFullYear();

	// Use the timeZone in all formatting operations
	const weekday = date.toLocaleString("en-US", {
		...formatOptions,
		weekday: "long",
	});
	const month = date.toLocaleString("en-US", {
		...formatOptions,
		month: "long",
	});
	const day = new Date(date.toLocaleString("en-US", formatOptions)).getDate();
	const suffix = getOrdinalSuffix(day);
	const time = date.toLocaleString("en-US", {
		...formatOptions,
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	const tz = date
		.toLocaleTimeString("en-us", { timeZoneName: "short" })
		.split(" ")[2];

	const yearSuffix = dateYear !== currentYear ? `, ${dateYear}` : "";

	if (dayOf) {
		return `${time} ${tz}`;
	}

	return `${weekday}, ${month} ${day}${suffix}${yearSuffix} at ${time} ${tz}`;
};
