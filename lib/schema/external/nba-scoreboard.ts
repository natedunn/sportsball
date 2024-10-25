import * as z from "zod";

export const BroadcastEnumSchema = z.enum(["", "ESPN"]);
export type BroadcastEnum = z.infer<typeof BroadcastEnumSchema>;

export const MarketEnumSchema = z.enum(["away", "home", "national"]);
export type MarketEnum = z.infer<typeof MarketEnumSchema>;

export const RelSchema = z.enum(["athlete", "desktop", "playercard"]);
export type Rel = z.infer<typeof RelSchema>;

export const RecordAbbreviationSchema = z.enum(["Total"]);
export type RecordAbbreviation = z.infer<typeof RecordAbbreviationSchema>;

export const RecordNameSchema = z.enum(["Home", "overall", "Road"]);
export type RecordName = z.infer<typeof RecordNameSchema>;

export const SummarySchema = z.enum(["0-0"]);
export type Summary = z.infer<typeof SummarySchema>;

export const RecordTypeSchema = z.enum(["home", "road", "total"]);
export type RecordType = z.infer<typeof RecordTypeSchema>;

export const TypeElementSchema = z.enum([
	"clubhouse",
	"desktop",
	"roster",
	"schedule",
	"stats",
	"team",
]);
export type TypeElement = z.infer<typeof TypeElementSchema>;

export const PurpleTextSchema = z.enum([
	"Clubhouse",
	"Roster",
	"Schedule",
	"Statistics",
]);
export type PurpleText = z.infer<typeof PurpleTextSchema>;

export const LangSchema = z.enum(["en"]);
export type Lang = z.infer<typeof LangSchema>;

export const MarketTypeSchema = z.enum(["Away", "Home", "National"]);
export type MarketType = z.infer<typeof MarketTypeSchema>;

export const RegionSchema = z.enum(["us"]);
export type Region = z.infer<typeof RegionSchema>;

export const ShortNameSchema = z.enum(["Subscription Package", "TV"]);
export type ShortName = z.infer<typeof ShortNameSchema>;

export const DisplayValueSchema = z.enum(["10/11", "20/21", "20/23"]);
export type DisplayValue = z.infer<typeof DisplayValueSchema>;

export const OutcomeTypeSchema = z.enum(["pending"]);
export type OutcomeType = z.infer<typeof OutcomeTypeSchema>;

export const DisplayClockSchema = z.enum(["0.0", "5:55"]);
export type DisplayClock = z.infer<typeof DisplayClockSchema>;

export const DescriptionSchema = z.enum(["In Progress", "Scheduled"]);
export type Description = z.infer<typeof DescriptionSchema>;

export const TypeNameSchema = z.enum([
	"STATUS_IN_PROGRESS",
	"STATUS_SCHEDULED",
]);
export type TypeName = z.infer<typeof TypeNameSchema>;

export const StateSchema = z.enum(["in", "pre", "post"]);
export type State = z.infer<typeof StateSchema>;

export const TypeAbbreviationSchema = z.enum(["STD"]);
export type TypeAbbreviation = z.infer<typeof TypeAbbreviationSchema>;

export const LanguageSchema = z.enum(["en-US"]);
export type Language = z.infer<typeof LanguageSchema>;

export const ShortTextEnumSchema = z.enum([
	"Box Score",
	"Gamecast",
	"Play-by-Play",
]);
export type ShortTextEnum = z.infer<typeof ShortTextEnumSchema>;

export const SlugSchema = z.enum(["regular-season"]);
export type Slug = z.infer<typeof SlugSchema>;

export const DaySchema = z.object({
	date: z.string().optional(),
});
export type Day = z.infer<typeof DaySchema>;

export const BroadcastElementSchema = z.object({
	market: MarketEnumSchema.optional(),
	names: z.array(z.string()).optional(),
});
export type BroadcastElement = z.infer<typeof BroadcastElementSchema>;

export const AthleteLinkSchema = z.object({
	rel: z.array(RelSchema).optional(),
	href: z.string().optional(),
});
export type AthleteLink = z.infer<typeof AthleteLinkSchema>;

export const PositionSchema = z.object({
	abbreviation: z.string().optional(),
});
export type Position = z.infer<typeof PositionSchema>;

export const VenueClassSchema = z.object({
	id: z.string().optional(),
});
export type VenueClass = z.infer<typeof VenueClassSchema>;

export const LinescoreSchema = z.object({
	value: z.number().optional(),
});
export type Linescore = z.infer<typeof LinescoreSchema>;

export const RecordSchema = z.object({
	name: RecordNameSchema.optional(),
	abbreviation: RecordAbbreviationSchema.optional(),
	type: RecordTypeSchema.optional(),
	summary: SummarySchema.optional(),
});
export type Record = z.infer<typeof RecordSchema>;

export const StatisticSchema = z.object({
	name: z.string().optional(),
	abbreviation: z.string().optional(),
	displayValue: z.string().optional(),
});
export type Statistic = z.infer<typeof StatisticSchema>;

export const TeamLinkSchema = z.object({
	rel: z.array(TypeElementSchema).optional(),
	href: z.string().optional(),
	text: PurpleTextSchema.optional(),
	isExternal: z.boolean().optional(),
	isPremium: z.boolean().optional(),
});
export type TeamLink = z.infer<typeof TeamLinkSchema>;

export const RegulationSchema = z.object({
	periods: z.number().optional(),
});
export type Regulation = z.infer<typeof RegulationSchema>;

export const MarketClassSchema = z.object({
	id: z.string().optional(),
	type: MarketTypeSchema.optional(),
});
export type MarketClass = z.infer<typeof MarketClassSchema>;

export const MediaSchema = z.object({
	shortName: z.string().optional(),
	logo: z.string().optional(),
	darkLogo: z.string().optional(),
});
export type Media = z.infer<typeof MediaSchema>;

export const GeoBroadcastTypeSchema = z.object({
	id: z.string().optional(),
	shortName: ShortNameSchema.optional(),
});
export type GeoBroadcastType = z.infer<typeof GeoBroadcastTypeSchema>;

export const AwayTeamOddsTeamSchema = z.object({
	id: z.string().optional(),
	uid: z.string().optional(),
	abbreviation: z.string().optional(),
	name: z.string().optional(),
	displayName: z.string().optional(),
	logo: z.string().optional(),
});
export type AwayTeamOddsTeam = z.infer<typeof AwayTeamOddsTeamSchema>;

export const OutcomeSchema = z.object({
	type: OutcomeTypeSchema.optional(),
});
export type Outcome = z.infer<typeof OutcomeSchema>;

export const TotalSchema = z.object({
	alternateDisplayValue: z.string().optional(),
	american: z.string().optional(),
});
export type Total = z.infer<typeof TotalSchema>;

export const ProviderSchema = z.object({
	id: z.string().optional(),
	name: z.string().optional(),
	priority: z.number().optional(),
});
export type Provider = z.infer<typeof ProviderSchema>;

export const AthletesInvolvedSchema = z.object({
	id: z.string().optional(),
	fullName: z.string().optional(),
	displayName: z.string().optional(),
	shortName: z.string().optional(),
	links: z.array(AthleteLinkSchema).optional(),
	headshot: z.string().optional(),
	jersey: z.string().optional(),
	position: z.string().optional(),
	team: VenueClassSchema.optional(),
});
export type AthletesInvolved = z.infer<typeof AthletesInvolvedSchema>;

export const ProbabilitySchema = z.object({
	tiePercentage: z.number().optional(),
	homeWinPercentage: z.number().optional(),
	awayWinPercentage: z.number().optional(),
});
export type Probability = z.infer<typeof ProbabilitySchema>;

export const LastPlayTypeSchema = z.object({
	id: z.string().optional(),
	text: z.string().optional(),
});
export type LastPlayType = z.infer<typeof LastPlayTypeSchema>;

export const StatusTypeSchema = z.object({
	id: z.string().optional(),
	name: TypeNameSchema.optional(),
	state: StateSchema,
	completed: z.boolean().optional(),
	description: DescriptionSchema.optional(),
	detail: z.string().optional(),
	shortDetail: z.string().optional(),
});
export type StatusType = z.infer<typeof StatusTypeSchema>;

export const TicketLinkSchema = z.object({
	href: z.string().optional(),
});
export type TicketLink = z.infer<typeof TicketLinkSchema>;

export const CompetitionTypeSchema = z.object({
	id: z.string().optional(),
	abbreviation: TypeAbbreviationSchema.optional(),
});
export type CompetitionType = z.infer<typeof CompetitionTypeSchema>;

export const AddressSchema = z.object({
	city: z.string().optional(),
	state: z.string().optional(),
});
export type Address = z.infer<typeof AddressSchema>;

export const EventLinkSchema = z.object({
	language: LanguageSchema.optional(),
	rel: z.array(z.string()).optional(),
	href: z.string().optional(),
	text: ShortTextEnumSchema.optional(),
	shortText: ShortTextEnumSchema.optional(),
	isExternal: z.boolean().optional(),
	isPremium: z.boolean().optional(),
});
export type EventLink = z.infer<typeof EventLinkSchema>;

export const EventSeasonSchema = z.object({
	year: z.number().optional(),
	type: z.number().optional(),
	slug: SlugSchema.optional(),
});
export type EventSeason = z.infer<typeof EventSeasonSchema>;

export const LogoSchema = z.object({
	href: z.string().optional(),
	width: z.number().optional(),
	height: z.number().optional(),
	alt: z.string().optional(),
	rel: z.array(z.string()).optional(),
	lastUpdated: z.string().optional(),
});
export type Logo = z.infer<typeof LogoSchema>;

export const SeasonTypeSchema = z.object({
	id: z.string().optional(),
	type: z.number().optional(),
	name: z.string().optional(),
	abbreviation: z.string().optional(),
});
export type SeasonType = z.infer<typeof SeasonTypeSchema>;

export const NbaScoreboardResponseSeasonSchema = z.object({
	type: z.number().optional(),
	year: z.number().optional(),
});
export type NbaScoreboardResponseSeason = z.infer<
	typeof NbaScoreboardResponseSeasonSchema
>;

export const AthleteSchema = z.object({
	id: z.string().optional(),
	fullName: z.string().optional(),
	displayName: z.string().optional(),
	shortName: z.string().optional(),
	links: z.array(AthleteLinkSchema).optional(),
	headshot: z.string().optional(),
	jersey: z.string().optional(),
	position: PositionSchema.optional(),
	team: VenueClassSchema.optional(),
	active: z.boolean().optional(),
});
export type Athlete = z.infer<typeof AthleteSchema>;

export const CompetitorTeamSchema = z.object({
	id: z.string().optional(),
	uid: z.string().optional(),
	location: z.string().optional(),
	name: z.string().optional(),
	abbreviation: z.string().optional(),
	displayName: z.string().optional(),
	shortDisplayName: z.string().optional(),
	color: z.string().optional(),
	alternateColor: z.string().optional(),
	isActive: z.boolean().optional(),
	venue: VenueClassSchema.optional(),
	links: z.array(TeamLinkSchema).optional(),
	logo: z.string().optional(),
});
export type CompetitorTeam = z.infer<typeof CompetitorTeamSchema>;

export const FormatSchema = z.object({
	regulation: RegulationSchema.optional(),
});
export type Format = z.infer<typeof FormatSchema>;

export const GeoBroadcastSchema = z.object({
	type: GeoBroadcastTypeSchema.optional(),
	market: MarketClassSchema.optional(),
	media: MediaSchema.optional(),
	lang: LangSchema.optional(),
	region: RegionSchema.optional(),
});
export type GeoBroadcast = z.infer<typeof GeoBroadcastSchema>;

export const TeamOddsSchema = z.object({
	favorite: z.boolean().optional(),
	underdog: z.boolean().optional(),
	team: AwayTeamOddsTeamSchema.optional(),
});
export type TeamOdds = z.infer<typeof TeamOddsSchema>;

export const OverSchema = z.object({
	value: z.number().optional(),
	displayValue: DisplayValueSchema.optional(),
	alternateDisplayValue: z.string().optional(),
	decimal: z.number().optional(),
	fraction: DisplayValueSchema.optional(),
	american: z.string().optional(),
	outcome: OutcomeSchema.optional(),
});
export type Over = z.infer<typeof OverSchema>;

export const OpenSchema = z.object({
	over: OverSchema.optional(),
	under: OverSchema.optional(),
	total: OverSchema.optional(),
});
export type Open = z.infer<typeof OpenSchema>;

export const LastPlaySchema = z.object({
	id: z.string().optional(),
	type: LastPlayTypeSchema.optional(),
	text: z.string().optional(),
	scoreValue: z.number().optional(),
	team: VenueClassSchema.optional(),
	probability: ProbabilitySchema.optional(),
	athletesInvolved: z.array(AthletesInvolvedSchema).optional(),
});
export type LastPlay = z.infer<typeof LastPlaySchema>;

export const StatusSchema = z.object({
	clock: z.number().optional(),
	displayClock: DisplayClockSchema.optional(),
	period: z.number().optional(),
	type: StatusTypeSchema,
});
export type Status = z.infer<typeof StatusSchema>;

export const TicketSchema = z.object({
	summary: z.string().optional(),
	numberAvailable: z.number().optional(),
	links: z.array(TicketLinkSchema).optional(),
});
export type Ticket = z.infer<typeof TicketSchema>;

export const VenueSchema = z.object({
	id: z.string().optional(),
	fullName: z.string().optional(),
	address: AddressSchema.optional(),
	indoor: z.boolean().optional(),
});
export type Venue = z.infer<typeof VenueSchema>;

export const LeagueSeasonSchema = z.object({
	year: z.number().optional(),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
	displayName: z.string().optional(),
	type: SeasonTypeSchema.optional(),
});
export type LeagueSeason = z.infer<typeof LeagueSeasonSchema>;

export const LeaderLeaderSchema = z.object({
	displayValue: z.string().optional(),
	value: z.number().optional(),
	athlete: AthleteSchema.optional(),
	team: VenueClassSchema.optional(),
});
export type LeaderLeader = z.infer<typeof LeaderLeaderSchema>;

export const CurrentSchema = z.object({
	over: OverSchema.optional(),
	under: OverSchema.optional(),
	total: TotalSchema.optional(),
});
export type Current = z.infer<typeof CurrentSchema>;

export const SituationSchema = z.object({
	lastPlay: LastPlaySchema.optional(),
});
export type Situation = z.infer<typeof SituationSchema>;

export const LeagueSchema = z.object({
	id: z.string().optional(),
	uid: z.string().optional(),
	name: z.string().optional(),
	abbreviation: z.string().optional(),
	slug: z.string().optional(),
	season: LeagueSeasonSchema.optional(),
	logos: z.array(LogoSchema).optional(),
	calendarType: z.string().optional(),
	calendarIsWhitelist: z.boolean().optional(),
	calendarStartDate: z.string().optional(),
	calendarEndDate: z.string().optional(),
	calendar: z.array(z.string()).optional(),
});
export type League = z.infer<typeof LeagueSchema>;

export const CompetitorLeaderSchema = z.object({
	name: z.string().optional(),
	displayName: z.string().optional(),
	shortDisplayName: z.string().optional(),
	abbreviation: z.string().optional(),
	leaders: z.array(LeaderLeaderSchema).optional(),
});
export type CompetitorLeader = z.infer<typeof CompetitorLeaderSchema>;

export const OddSchema = z.object({
	provider: ProviderSchema.optional(),
	details: z.string().optional(),
	overUnder: z.number().optional(),
	spread: z.number().optional(),
	awayTeamOdds: TeamOddsSchema.optional(),
	homeTeamOdds: TeamOddsSchema.optional(),
	open: OpenSchema.optional(),
	current: CurrentSchema.optional(),
});
export type Odd = z.infer<typeof OddSchema>;

export const CompetitorSchema = z.object({
	id: z.string().optional(),
	uid: z.string().optional(),
	type: TypeElementSchema.optional(),
	order: z.number().optional(),
	homeAway: MarketEnumSchema,
	team: CompetitorTeamSchema.optional(),
	score: z.string(),
	linescores: z.array(LinescoreSchema).optional(),
	statistics: z.array(StatisticSchema).optional(),
	leaders: z.array(CompetitorLeaderSchema).optional(),
	records: z.array(RecordSchema).optional(),
});
export type Competitor = z.infer<typeof CompetitorSchema>;

export const CompetitionSchema = z.object({
	id: z.string().optional(),
	uid: z.string().optional(),
	date: z.string().optional(),
	attendance: z.number().optional(),
	type: CompetitionTypeSchema.optional(),
	timeValid: z.boolean().optional(),
	neutralSite: z.boolean().optional(),
	conferenceCompetition: z.boolean().optional(),
	playByPlayAvailable: z.boolean().optional(),
	recent: z.boolean().optional(),
	venue: VenueSchema.optional(),
	competitors: z.array(CompetitorSchema).min(2),
	notes: z.array(z.any()).optional(),
	situation: SituationSchema.optional(),
	status: StatusSchema.optional(),
	broadcasts: z.array(BroadcastElementSchema).optional(),
	format: FormatSchema.optional(),
	startDate: z.string().optional(),
	broadcast: BroadcastEnumSchema.optional(),
	geoBroadcasts: z.array(GeoBroadcastSchema).optional(),
	highlights: z.array(z.any()).optional(),
	tickets: z.array(TicketSchema).optional(),
	odds: z.array(OddSchema).optional(),
});
export type Competition = z.infer<typeof CompetitionSchema>;

export const EventSchema = z.object({
	id: z.string().optional(),
	uid: z.string().optional(),
	date: z.string().optional(),
	name: z.string().optional(),
	shortName: z.string().optional(),
	season: EventSeasonSchema.optional(),
	competitions: z.array(CompetitionSchema).min(1),
	links: z.array(EventLinkSchema).optional(),
	status: StatusSchema.optional(),
});
export type Event = z.infer<typeof EventSchema>;

export const NbaScoreboardResponseSchema = z.object({
	leagues: z.array(LeagueSchema).optional(),
	season: NbaScoreboardResponseSeasonSchema.optional(),
	day: DaySchema.optional(),
	events: z.array(EventSchema).optional(),
});
export type NbaScoreboardResponse = z.infer<typeof NbaScoreboardResponseSchema>;
