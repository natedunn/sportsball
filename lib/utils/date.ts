type MonthMap = {
	[key: string]: number;
};

const getMonthNumber = (monthName: string): number => {
	const months: MonthMap = {
		January: 0,
		February: 1,
		March: 2,
		April: 3,
		May: 4,
		June: 5,
		July: 6,
		August: 7,
		September: 8,
		October: 9,
		November: 10,
		December: 11,
	};
	return months[monthName];
};

export const parseCustomDateFormat = (dateString: string): Date => {
	const regex =
		/^(?:\w+), (\w+) (\d+)(?:st|nd|rd|th) at (\d+):(\d+) (AM|PM) EDT$/;

	const match = dateString.match(regex);
	if (!match) {
		throw new Error(
			'Invalid date format. Expected format: "Mon, October 28th at 7:00 PM EDT"'
		);
	}

	const [, month, day, hours, minutes, period] = match;

	// Convert to 24-hour format
	let hour = parseInt(hours);
	if (period === "PM" && hour !== 12) {
		hour += 12;
	} else if (period === "AM" && hour === 12) {
		hour = 0;
	}

	const currentYear = new Date().getFullYear();

	// Create date in EDT
	const date = new Date(
		`${currentYear}-${(getMonthNumber(month) + 1)
			.toString()
			.padStart(2, "0")}-${day.padStart(2, "0")}T${hour
			.toString()
			.padStart(2, "0")}:${minutes}:00-04:00`
	);

	return date;
};

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

export const playDateFormat = (date: Date): string => {
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
	return `${weekday}, ${month} ${day}${suffix}${yearSuffix} at ${time} ${tz}`;
};
