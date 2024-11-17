export type NbaEventResponse = {
	boxscore?: Boxscore;
	format?: Format;
	gameInfo?: GameInfo;
	leaders?: NbaEventResponseLeader[];
	seasonseries?: Seasonsery[];
	broadcasts?: unknown[];
	predictor?: Predictor;
	pickcenter?: unknown[];
	againstTheSpread?: AgainstTheSpread[];
	odds?: unknown[];
	winprobability?: Winprobability[];
	header?: Header;
	news?: News;
	article?: NbaEventResponseArticle;
	videos?: NbaEventResponseVideo[];
	plays?: Play[];
	standings?: NbaEventResponseStandings;
};

export type AgainstTheSpread = {
	team?: AgainstTheSpreadTeam;
	records?: unknown[];
};

export type AgainstTheSpreadTeam = {
	id?: string;
	uid?: string;
	displayName?: string;
	abbreviation?: string;
	links?: FullViewLinkElement[];
	logo?: string;
	logos?: LogoElement[];
};

export type FullViewLinkElement = {
	href?: string;
	text?: Text;
};

export type Text = "Clubhouse" | "Schedule" | "Full Standings";

export type LogoElement = {
	href?: string;
	width?: number;
	height?: number;
	alt?: string;
	rel?: BoxscoreSource[];
	lastUpdated?: LastUpdated;
};

export type LastUpdated = string;

export type BoxscoreSource = "full" | "default" | "dark" | "scoreboard" | "day";

export type NbaEventResponseArticle = {
	id?: number;
	nowID?: string;
	contentKey?: string;
	dataSourceIdentifier?: string;
	type?: string;
	gameID?: string;
	headline?: string;
	description?: string;
	linkText?: string;
	categorized?: Date;
	originallyPosted?: Date;
	lastModified?: Date;
	published?: Date;
	section?: string;
	source?: string;
	images?: ArticleImage[];
	video?: ArticleVideo[];
	categories?: VideoCategory[];
	keywords?: string[];
	premium?: boolean;
	links?: StickyLinks;
	allowComments?: boolean;
	allowSearch?: boolean;
	allowContentReactions?: boolean;
	metrics?: Metric[];
	story?: string;
};

export type VideoCategory = {
	id?: number;
	type?: CategoryType;
	uid?: string;
	guid?: string;
	description?: string;
	sportID?: number;
	teamID?: number;
	team?: PurpleTeam;
	leagueID?: number;
	league?: PurpleLeague;
	topicID?: number;
	athleteID?: number;
	athlete?: PurpleAthlete;
};

export type PurpleAthlete = {
	id?: number;
	description?: string;
	links?: PurpleLinks;
};

export type PurpleLinks = {
	web?: PurpleMobile;
	mobile?: PurpleMobile;
};

export type PurpleMobile = {
	athletes?: SelfClass;
};

export type SelfClass = {
	href?: string;
};

export type PurpleLeague = {
	id?: number;
	description?: string;
	abbreviation?: string;
	logos?: Logos;
	links?: FluffyLinks;
};

export type FluffyLinks = {
	web?: FluffyMobile;
	mobile?: FluffyMobile;
};

export type FluffyMobile = {
	leagues?: SelfClass;
};

export type Logos = {
	full?: Default;
	large?: Default;
	medium?: Default;
	small?: Default;
	xsmall?: Default;
	xxsmall?: Default;
};

export type Default = {
	href?: string;
	width?: number;
	height?: number;
	dark?: Default;
};

export type PurpleTeam = {
	id?: number;
	description?: string;
	links?: TentacledLinks;
};

export type TentacledLinks = {
	web?: TentacledMobile;
	mobile?: TentacledMobile;
};

export type TentacledMobile = {
	teams?: SelfClass;
};

export type CategoryType = "league" | "team" | "guid" | "athlete" | "topic";

export type ArticleImage = {
	type?: ImageType;
	name?: string;
	caption?: string;
	height?: number;
	width?: number;
	url?: string;
	ratio?: Ratio;
	alt?: string;
};

export type Ratio = "16x9" | "1x1" | "5x2";

export type ImageType = "Media" | "stitcher";

export type StickyLinks = {
	web?: SelfClass;
	mobile?: SelfClass;
	api?: PurpleAPI;
	app?: App;
};

export type PurpleAPI = {
	self?: SelfClass;
};

export type App = {
	sportscenter?: SelfClass;
};

export type Metric = {
	type?: string;
	count?: number;
};

export type ArticleVideo = {
	id?: number;
	dataSourceIdentifier?: string;
	cerebroID?: string;
	source?: string;
	headline?: string;
	caption?: string;
	title?: string;
	description?: string;
	lastModified?: Date;
	originalPublishDate?: Date;
	premium?: boolean;
	syndicatable?: boolean;
	duration?: number;
	timeRestrictions?: TimeRestrictions;
	deviceRestrictions?: DeviceRestrictions;
	geoRestrictions?: GeoRestrictions;
	thumbnail?: string;
	images?: VideoImage[];
	posterImages?: PosterImages;
	links?: VideoLinks;
	categories?: VideoCategory[];
	ad?: Ad;
	tracking?: Tracking;
	contributingPartner?: string;
	contributingSystem?: string;
};

export type Ad = {
	sport?: string;
	bundle?: string;
};

export type DeviceRestrictions = {
	type?: string;
	devices?: string[];
};

export type GeoRestrictions = {
	type?: string;
	countries?: string[];
};

export type VideoImage = {
	name?: string;
	caption?: string;
	alt?: string;
	credit?: string;
	height?: number;
	width?: number;
	url?: string;
};

export type VideoLinks = {
	web?: Web;
	mobile?: StickyMobile;
	api?: FluffyAPI;
	source?: Source;
	sportscenter?: SelfClass;
};

export type FluffyAPI = {
	self?: SelfClass;
	artwork?: SelfClass;
};

export type StickyMobile = {
	href?: string;
	source?: SelfClass;
	alert?: SelfClass;
	streaming?: SelfClass;
	progressiveDownload?: SelfClass;
};

export type Source = {
	href?: string;
	mezzanine?: SelfClass;
	flash?: SelfClass;
	hds?: SelfClass;
	hls?: HLS;
	hd?: SelfClass;
	full?: SelfClass;
};

export type HLS = {
	href?: string;
	hd?: SelfClass;
};

export type Web = {
	href?: string;
	self?: Self;
	seo?: SelfClass;
};

export type Self = {
	href?: string;
	dsi?: SelfClass;
};

export type PosterImages = {
	default?: Default;
	full?: SelfClass;
	wide?: SelfClass;
	square?: SelfClass;
};

export type TimeRestrictions = {
	embargoDate?: Date;
	expirationDate?: Date;
};

export type Tracking = {
	sportName?: string;
	leagueName?: string;
	coverageType?: string;
	trackingName?: string;
	trackingID?: string;
};

export type Boxscore = {
	teams?: TeamElement[];
	players?: Player[];
};

export type Player = {
	team?: PlayerTeam;
	statistics?: PlayerStatistic[];
	displayOrder?: number;
};

export type PlayerStatistic = {
	names?: string[];
	keys?: string[];
	labels?: string[];
	descriptions?: string[];
	athletes?: AthleteElement[];
	totals?: string[];
};

export type AthleteElement = {
	active?: boolean;
	athlete?: AthleteAthlete;
	starter?: boolean;
	didNotPlay?: boolean;
	reason?: Reason;
	ejected?: boolean;
	stats?: string[];
};

export type AthleteAthlete = {
	id?: string;
	uid?: string;
	guid?: string;
	displayName?: string;
	shortName?: string;
	links?: AthleteLink[];
	headshot?: Headshot;
	jersey?: string;
	position?: PurplePosition;
};

export type Headshot = {
	href?: string;
	alt?: string;
};

export type AthleteLink = {
	rel?: string[];
	href?: string;
	text?: string;
};

export type PurplePosition = {
	name?: string;
	displayName?: string;
	abbreviation?: string;
};

export type Reason = "COACH'S DECISION";

export type PlayerTeam = {
	id: string;
	uid: string;
	slug?: string;
	location?: string;
	name: string;
	abbreviation?: string;
	displayName?: string;
	shortDisplayName?: string;
	color?: string;
	alternateColor?: string;
	logo?: string;
};

export type TeamElement = {
	team: PlayerTeam;
	statistics: TeamStatistic[] | [];
	displayOrder?: number;
	homeAway?: string;
};

export type TeamStatistic = {
	name: string;
	displayValue: string;
	label: string;
	abbreviation: string;
};

export type Format = {
	regulation?: Regulation;
	overtime?: Overtime;
};

export type Overtime = {
	clock?: number;
};

export type Regulation = {
	periods?: number;
	displayName?: string;
	slug?: string;
	clock?: number;
};

export type GameInfo = {
	venue?: Venue;
	attendance?: number;
	officials?: Official[];
};

export type Official = {
	fullName?: string;
	displayName?: string;
	position?: OfficialPosition;
	order?: number;
};

export type OfficialPosition = {
	name?: string;
	displayName?: string;
	id?: string;
};

export type Venue = {
	id?: string;
	fullName?: string;
	shortName?: string;
	address?: Address;
	grass?: boolean;
	images?: LogoElement[];
};

export type Address = {
	city?: string;
	state?: string;
};

export type Header = {
	id?: string;
	uid?: string;
	season?: Season;
	timeValid?: boolean;
	competitions?: Competition[];
	links?: HeaderLink[];
	league?: HeaderLeague;
};

export type Competition = {
	id: string;
	uid: string;
	date?: string;
	neutralSite?: boolean;
	conferenceCompetition?: boolean;
	boxscoreAvailable?: boolean;
	commentaryAvailable?: boolean;
	liveAvailable?: boolean;
	shotChartAvailable?: boolean;
	timeoutsAvailable?: boolean;
	possessionArrowAvailable?: boolean;
	onWatchESPN?: boolean;
	recent?: boolean;
	boxscoreSource?: BoxscoreSource;
	playByPlaySource?: BoxscoreSource;
	competitors?: CompetitionCompetitor[];
	status: CompetitionStatus;
	broadcasts?: Broadcast[];
	series?: Series[];
};

export type Broadcast = {
	type?: BroadcastType;
	market?: Market;
	media?: Media;
	lang?: string;
	region?: string;
};

export type Market = {
	id?: string;
	type?: string;
};

export type Media = {
	shortName?: string;
};

export type BroadcastType = {
	id?: string;
	shortName?: string;
};

export type CompetitionCompetitor = {
	id?: string;
	uid?: string;
	order?: number;
	homeAway?: string;
	winner?: boolean;
	team?: FluffyTeam;
	score?: string;
	linescores?: Clock[];
	record?: Record[];
	possession?: boolean;
};

export type Clock = {
	displayValue?: string;
};

export type Record = {
	type?: string;
	summary?: string;
	displayValue?: string;
};

export type FluffyTeam = {
	id: string;
	uid: string;
	location?: string;
	name?: string;
	abbreviation?: string;
	displayName?: string;
	color?: string;
	alternateColor?: string;
	logos?: LogoElement[];
	links?: AthleteLink[];
};

export type Series = {
	type?: string;
	title?: string;
	description?: string;
	summary?: string;
	completed?: boolean;
	totalCompetitions?: number;
	competitors?: SeriesCompetitor[];
	events?: SeriesEvent[];
	startDate?: string;
};

export type SeriesCompetitor = {
	id?: string;
	uid?: string;
	wins?: number;
	ties?: number;
	team?: AthleteTeam;
};

export type AthleteTeam = {
	ref?: string;
};

export type SeriesEvent = {
	ref?: string;
	id?: string;
};

export type CompetitionStatus = {
	type: StatusTypeClass;
};

export type StatusTypeClass = {
	id?: string;
	name?: string;
	state: string;
	completed?: boolean;
	description?: string;
	detail?: string;
	shortDetail?: string;
};

export type HeaderLeague = {
	id?: string;
	uid?: string;
	name?: string;
	abbreviation?: string;
	slug?: string;
	isTournament?: boolean;
	links?: AthleteLink[];
};

export type HeaderLink = {
	rel?: string[];
	href?: string;
	text?: string;
	shortText?: string;
	isExternal?: boolean;
	isPremium?: boolean;
	language?: string;
};

export type Season = {
	year?: number;
	type?: number;
};

export type NbaEventResponseLeader = {
	team?: AgainstTheSpreadTeam;
	leaders?: PurpleLeader[];
};

export type PurpleLeader = {
	name?: string;
	displayName?: string;
	leaders?: FluffyLeader[];
};

export type FluffyLeader = {
	displayValue?: string;
	athlete?: LeaderAthlete;
	statistics?: Stat[];
};

export type LeaderAthlete = {
	id?: string;
	uid?: string;
	guid?: string;
	lastName?: string;
	fullName?: string;
	displayName?: string;
	shortName?: string;
	links?: AthleteLink[];
	headshot?: Headshot;
	jersey?: string;
	position?: FluffyPosition;
	team?: AthleteTeam;
	status?: AthleteStatus;
};

export type FluffyPosition = {
	abbreviation?: string;
};

export type AthleteStatus = {
	id?: string;
	name?: string;
	type?: string;
	abbreviation?: string;
};

export type Stat = {
	name?: string;
	displayName?: string;
	shortDisplayName?: string;
	description?: string;
	abbreviation?: string;
	value?: number;
	displayValue?: string;
	type?: StatisticType;
};

export type StatisticType =
	| "gamesbehind"
	| "losses"
	| "streak"
	| "winpercent"
	| "wins";

export type News = {
	header?: string;
	link?: HeaderLink;
	articles?: ArticleElement[];
};

export type ArticleElement = {
	dataSourceIdentifier?: string;
	description?: string;
	type?: string;
	premium?: boolean;
	links?: AmbitiousLinks;
	categories?: PurpleCategory[];
	headline?: string;
	images?: ArticleImage[];
	published?: Date;
	lastModified?: Date;
};

export type PurpleCategory = {
	id?: number;
	description?: string;
	type?: CategoryType;
	sportID?: number;
	leagueID?: number;
	league?: FluffyLeague;
	uid?: string;
	createDate?: Date;
	teamID?: number;
	team?: TentacledTeam;
	guid?: string;
	athleteID?: number;
	athlete?: FluffyAthlete;
	topicID?: number;
};

export type FluffyAthlete = {
	id?: number;
	description?: string;
	links?: IndigoLinks;
};

export type IndigoLinks = {
	api?: PurpleMobile;
	web?: PurpleMobile;
	mobile?: PurpleMobile;
};

export type FluffyLeague = {
	id?: number;
	description?: string;
	links?: IndecentLinks;
};

export type IndecentLinks = {
	api?: FluffyMobile;
	web?: FluffyMobile;
	mobile?: FluffyMobile;
};

export type TentacledTeam = {
	id?: number;
	description?: string;
	links?: HilariousLinks;
};

export type HilariousLinks = {
	api?: TentacledMobile;
	web?: TentacledMobile;
	mobile?: TentacledMobile;
};

export type AmbitiousLinks = {
	api?: TentacledAPI;
	web?: SelfClass;
	mobile?: SelfClass;
};

export type TentacledAPI = {
	news?: SelfClass;
	self?: SelfClass;
};

export type Play = {
	id?: string;
	sequenceNumber?: string;
	type?: PlayType;
	text?: string;
	awayScore?: number;
	homeScore?: number;
	period?: Period;
	clock?: Clock;
	scoringPlay?: boolean;
	scoreValue?: number;
	team?: HomeTeam;
	participants?: Participant[];
	wallclock?: Date;
	shootingPlay?: boolean;
	coordinate?: Coordinate;
};

export type Coordinate = {
	x?: number;
	y?: number;
};

export type Participant = {
	athlete?: HomeTeam;
};

export type HomeTeam = {
	id?: string;
};

export type Period = {
	number?: number;
	displayValue?: DisplayValue;
};

export type DisplayValue =
	| "1st Quarter"
	| "2nd Quarter"
	| "3rd Quarter"
	| "4th Quarter";

export type PlayType = {
	id?: string;
	text?: string;
};

export type Predictor = {
	header?: string;
	homeTeam?: HomeTeam;
	awayTeam?: AwayTeam;
};

export type AwayTeam = {
	id?: string;
	gameProjection?: string;
	teamChanceLoss?: string;
};

export type Seasonsery = {
	type?: string;
	title?: string;
	description?: string;
	summary?: string;
	completed?: boolean;
	totalCompetitions?: number;
	events?: SeasonseryEvent[];
};

export type SeasonseryEvent = {
	id?: string;
	uid?: string;
	date?: Date;
	timeValid?: boolean;
	status?: string;
	statusType?: StatusTypeClass;
	competitors?: EventCompetitor[];
	links?: HeaderLink[];
	broadcasts?: unknown[];
};

export type EventCompetitor = {
	homeAway?: string;
	winner?: boolean;
	team?: AgainstTheSpreadTeam;
	score?: string;
};

export type NbaEventResponseStandings = {
	fullViewLink?: FullViewLinkElement;
	groups?: Group[];
};

export type Group = {
	standings?: GroupStandings;
	header?: string;
	href?: string;
};

export type GroupStandings = {
	entries?: Entry[];
};

export type Entry = {
	team?: string;
	link?: string;
	id?: string;
	uid?: string;
	stats?: Stat[];
	logo?: LogoElement[];
};

export type NbaEventResponseVideo = {
	id?: number;
	cerebroID?: string;
	source?: string;
	headline?: string;
	lastModified?: Date;
	originalPublishDate?: Date;
	duration?: number;
	timeRestrictions?: TimeRestrictions;
	deviceRestrictions?: DeviceRestrictions;
	geoRestrictions?: GeoRestrictions;
	thumbnail?: string;
	links?: VideoLinks;
	ad?: Ad;
	tracking?: Tracking;
	description?: string;
};

export type Winprobability = {
	tiePercentage?: number;
	homeWinPercentage?: number;
	playID?: string;
};
