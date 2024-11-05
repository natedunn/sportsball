import type { LoggerLinkOptions, Operation } from "@trpc/client";
import type { AppRouter } from "./routers/_app";

import { loggerLink } from "@trpc/client";

import { env } from "@/lib/env/client";

export type apiDataType<DataType> = {
	code?: string | number | null;
} & (
	| {
			data: DataType;
			success: true;
			message?: string | null;
	  }
	| {
			data: DataType | null;
			success: false;
			message: string;
	  }
);

/**
 * Structure data returns consistently
 *
 * @param apiDataType
 */
export const apiData = <DataType = never>(props: apiDataType<DataType>) => {
	const { data = null, success, message = null, code = null } = props;
	if (!success && !message) {
		throw new Error("Message is required when success is false");
	}

	return {
		data: data as DataType,
		success,
		message,
		code,
	};
};

export function getTRPCUrl() {
	return `${env.NEXT_PUBLIC_ROOT_DOMAIN}/api/trpc`;
}

export const skipStream = (op: Operation) => {
	const nonStreamPaths = ["user.", "auth.", "console."];
	const skipStreamLink =
		nonStreamPaths.some((path) => op.path.includes(path)) ||
		!!op.context.skipStream;
	return skipStreamLink;
};

export const customLoggerLink = () => {
	function styledConsoleLog({
		type,
		path,
		input,
		result,
	}: {
		type: string;
		path: string;
		input: unknown;
		result?: unknown;
	}) {
		const cyanBackground = "\u001B[46m\u001B[30m";
		const magentaBackground = "\u001B[45m\u001B[30m";
		const whiteBackground = "\u001B[47m\u001B[30m";
		const blueBackground = "\u001B[44m\u001B[37m";
		const grayText = "\u001B[90m";
		const grayBackground = "\u001B[100m\u001B[30m";

		const resetStyle = "\u001B[0m";

		const typeColor = () => {
			if (type === "query") return cyanBackground;
			if (type === "mutation") return magentaBackground;
		};
		const typeSymbol = () => {
			if (type === "query") return "↓";
			if (type === "mutation") return "↑";
		};

		const stringifiedResult = JSON.stringify(result, null, 2);

		const maxResultLength =
			Number(env.NEXT_PUBLIC_LOGGER_RESULT_LENGTH) ?? 10000;

		const formattedResult =
			typeof stringifiedResult === "string"
				? stringifiedResult.substring(0, maxResultLength)
				: stringifiedResult;

		const lengthNotice = [
			`\n \n ${grayBackground} ------ max ${maxResultLength} characters reached ------ ${resetStyle}`,
		];

		const resultOutput = [
			...(maxResultLength > 0
				? [`\n \n${grayText} ${formattedResult} ${resetStyle}`]
				: []),
			...(typeof stringifiedResult === "string" &&
			stringifiedResult.length >= maxResultLength &&
			maxResultLength > 0
				? lengthNotice
				: []),
		];

		const message = [
			` ${typeColor()} ${typeSymbol()} ${type} ${resetStyle} `,
			`${whiteBackground} ${path} ${resetStyle} `,
			`${blueBackground}${grayText} ${
				JSON.stringify(input) ?? `\u001B[3mno input`
			} ${resetStyle} `,
			...(result ? resultOutput : []),
			"\n",
		];

		console.log(message.join(""));
	}

	const logger: Pick<LoggerLinkOptions<AppRouter>, "logger">["logger"] = (
		event
	) => {
		styledConsoleLog({
			type: event.type,
			path: event.path,
			input: event.input,
			result: event.direction === "down" ? event.result : undefined,
		});
	};

	return loggerLink({
		enabled: () => process.env.NODE_ENV === "development",
		logger,
	});
};
