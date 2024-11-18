import { addDays, format, parseISO, subDays } from 'date-fns';
import { fromZonedTime } from 'date-fns-tz';

export function formatDate(
	date: Date | string,
	dateFormat: 'YYYYMMDD' | 'YYYY-MM-DD' = 'YYYYMMDD'
): string {
	let dateObj: Date;
	if (typeof date === 'string') {
		dateObj = fromZonedTime(parseISO(date), Intl.DateTimeFormat().resolvedOptions().timeZone);
	} else {
		dateObj = date;
	}

	if (dateFormat === 'YYYYMMDD') {
		return format(dateObj, 'yyyyMMdd');
	} else {
		return format(dateObj, 'yyyy-MM-dd');
	}
}

const getOrdinalSuffix = (day: number): string => {
	if (day > 3 && day < 21) return 'th';
	switch (day % 10) {
		case 1:
			return 'st';
		case 2:
			return 'nd';
		case 3:
			return 'rd';
		default:
			return 'th';
	}
};

export const formatGameDate = (date: Date, dayOf: boolean = false): string => {
	// Get user's local timezone
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	const formatOptions = { timeZone };

	const currentYear = new Date().getFullYear();
	const dateYear = date.getFullYear();

	// Use the timeZone in all formatting operations
	const weekday = date.toLocaleString('en-US', {
		...formatOptions,
		weekday: 'long'
	});
	const month = date.toLocaleString('en-US', {
		...formatOptions,
		month: 'long'
	});
	const day = new Date(date.toLocaleString('en-US', formatOptions)).getDate();
	const suffix = getOrdinalSuffix(day);
	const time = date.toLocaleString('en-US', {
		...formatOptions,
		hour: 'numeric',
		minute: '2-digit',
		hour12: true
	});

	const tz = date.toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];

	const yearSuffix = dateYear !== currentYear ? `, ${dateYear}` : '';

	if (dayOf) {
		return `${time} ${tz}`;
	}

	return `${weekday}, ${month} ${day}${suffix}${yearSuffix} at ${time} ${tz}`;
};

// const dateParam = z.string().date();
type DateParam = string;

export const moveDate = (date: DateParam, direction: 'prev' | 'next' | 'today'): DateParam => {
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	if (direction === 'today') {
		// For "today", we ignore the input date and use the current date
		const today = new Date();
		const utcToday = fromZonedTime(today, timeZone);
		return format(utcToday, 'yyyy-MM-dd');
	}

	// Original logic for prev/next
	const utcDate = fromZonedTime(date, timeZone);
	const newDate = direction === 'next' ? addDays(utcDate, 1) : subDays(utcDate, 1);

	return format(newDate, 'yyyy-MM-dd');
};
