"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useTimestamp } from "@/lib/nuqs/use-timestamp";
import { CalendarBlank } from "@phosphor-icons/react";

export function DatePicker() {
	const { date, setDate } = useTimestamp();

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={"outline"}
					className={cn(
						"justify-start text-left font-normal",
						!date && "text-muted-foreground"
					)}
				>
					<CalendarBlank size={16} />
					<span className="hidden sm:block">Pick a date</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={(selectedDate) => selectedDate && setDate(selectedDate)}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
