import { parseISO } from "date-fns";
import { getTimezoneOffset } from "date-fns-tz";

export const detailToDate = (dateString: string): Date => {
	const regex =
		/^(?:\w+), (\w+) (\d+)(?:st|nd|rd|th) at (\d+):(\d+) (AM|PM) (.+)$/;

	const match = dateString.match(regex);
	if (!match) {
		throw new Error(
			'Invalid date format. Expected format: "Mon, October 28th at 7:00 PM EDT"'
		);
	}

	const [, month, day, hours, minutes, period, timezone] = match;

	// Convert to 24-hour format
	let hour = parseInt(hours);
	if (period === "PM" && hour !== 12) {
		hour += 12;
	} else if (period === "AM" && hour === 12) {
		hour = 0;
	}

	const currentYear = new Date().getFullYear();

	// Parse the date string with the detected timezone
	const dateWithTimezone = parseISO(
		`${currentYear}-${getMonthNumber(month) + 1}-${day.padStart(2, "0")}T${hour
			.toString()
			.padStart(2, "0")}:${minutes}:00${getTimezoneOffset(timezone)}`
	);

	return dateWithTimezone;
};

function getMonthNumber(monthName: string): number {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	return months.indexOf(monthName);
}

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
