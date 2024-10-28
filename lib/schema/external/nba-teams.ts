export type NBATeamsResponse = {
	sports?: Sport[];
};

export type Sport = {
	id?: string;
	uid?: string;
	name?: string;
	slug?: string;
	leagues?: League[];
};

export type League = {
	id?: string;
	uid?: string;
	name?: string;
	abbreviation?: string;
	shortName?: string;
	slug?: string;
	teams?: TeamElement[];
	year?: number;
	season?: Season;
};

export type Season = {
	year?: number;
	displayName?: string;
};

export type TeamElement = {
	team?: TeamTeam;
};

export type TeamTeam = {
	id?: string;
	uid: string;
	slug: string;
	abbreviation?: string;
	displayName?: string;
	shortDisplayName?: string;
	name: string;
	nickname?: string;
	location?: string;
	color: string;
	alternateColor?: string;
	isActive?: boolean;
	isAllStar?: boolean;
	logos: Logo[];
	links?: Link[];
};

export type Link = {
	language?: Language;
	rel?: LinkRel[];
	href?: string;
	text?: Text;
	shortText?: Text;
	isExternal?: boolean;
	isPremium?: boolean;
	isHidden?: boolean;
};

export type Language = "en-US";

export type LinkRel =
	| "clubhouse"
	| "desktop"
	| "team"
	| "roster"
	| "stats"
	| "schedule"
	| "tickets"
	| "depthchart";

export type Text =
	| "Clubhouse"
	| "Roster"
	| "Statistics"
	| "Schedule"
	| "Tickets"
	| "Depth Chart";

export type Logo = {
	href?: string;
	alt?: string;
	rel?: LogoRel[];
	width?: number;
	height?: number;
};

export type LogoRel = "full" | "default" | "dark" | "scoreboard";
