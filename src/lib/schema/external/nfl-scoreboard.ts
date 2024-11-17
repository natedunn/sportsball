import * as z from "zod";

export const BroadcastEnumSchema = z.enum(["CBS", "FOX", "NBC/Peacock"]);
export type BroadcastEnum = z.infer<typeof BroadcastEnumSchema>;

export const MarketEnumSchema = z.enum(["away", "national"]);
export type MarketEnum = z.infer<typeof MarketEnumSchema>;

export const HomeAwaySchema = z.enum(["away", "home"]);
export type HomeAway = z.infer<typeof HomeAwaySchema>;

export const RecordAbbreviationSchema = z.enum(["Game"]);
export type RecordAbbreviation = z.infer<typeof RecordAbbreviationSchema>;

export const RecordNameSchema = z.enum(["Home", "overall", "Road"]);
export type RecordName = z.infer<typeof RecordNameSchema>;

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

export const TextSchema = z.enum([
	"Clubhouse",
	"Roster",
	"Schedule",
	"Statistics",
]);
export type Text = z.infer<typeof TextSchema>;

export const LangSchema = z.enum(["en"]);
export type Lang = z.infer<typeof LangSchema>;

export const MarketTypeSchema = z.enum(["Away", "National"]);
export type MarketType = z.infer<typeof MarketTypeSchema>;

export const RegionSchema = z.enum(["us"]);
export type Region = z.infer<typeof RegionSchema>;

export const ShortNameSchema = z.enum([
	"Streaming",
	"Subscription Package",
	"TV",
]);
export type ShortName = z.infer<typeof ShortNameSchema>;

export const ShortTextSchema = z.enum([
	"Box Score",
	"Gamecast",
	"Highlights",
	"Play-by-Play",
	"Recap",
]);
export type ShortText = z.infer<typeof ShortTextSchema>;

export const DeviceSchema = z.enum([
	"desktop",
	"handset",
	"ipad",
	"settop",
	"tablet",
]);
export type Device = z.infer<typeof DeviceSchema>;

export const DeviceRestrictionsTypeSchema = z.enum(["whitelist"]);
export type DeviceRestrictionsType = z.infer<
	typeof DeviceRestrictionsTypeSchema
>;

export const SourceEnumSchema = z.enum(["espn"]);
export type SourceEnum = z.infer<typeof SourceEnumSchema>;

export const CoverageTypeSchema = z.enum(["Final Game Highlight"]);
export type CoverageType = z.infer<typeof CoverageTypeSchema>;

export const LeagueNameSchema = z.enum(["No League"]);
export type LeagueName = z.infer<typeof LeagueNameSchema>;

export const SportEnumSchema = z.enum(["nfl"]);
export type SportEnum = z.infer<typeof SportEnumSchema>;

export const BundleSchema = z.enum(["nfl_one_plays"]);
export type Bundle = z.infer<typeof BundleSchema>;

export const LeaderAbbreviationSchema = z.enum(["PYDS", "RECYDS", "RYDS"]);
export type LeaderAbbreviation = z.infer<typeof LeaderAbbreviationSchema>;

export const DisplayNameSchema = z.enum([
	"Passing Leader",
	"Receiving Leader",
	"Rushing Leader",
]);
export type DisplayName = z.infer<typeof DisplayNameSchema>;

export const PurpleRelSchema = z.enum(["athlete", "desktop", "playercard"]);
export type PurpleRel = z.infer<typeof PurpleRelSchema>;

export const PositionAbbreviationSchema = z.enum(["QB", "RB", "TE", "WR"]);
export type PositionAbbreviation = z.infer<typeof PositionAbbreviationSchema>;

export const LeaderNameSchema = z.enum([
	"passingYards",
	"receivingYards",
	"rushingYards",
]);
export type LeaderName = z.infer<typeof LeaderNameSchema>;

export const ShortDisplayNameSchema = z.enum(["PASS", "REC", "RUSH"]);
export type ShortDisplayName = z.infer<typeof ShortDisplayNameSchema>;

export const DisplayClockSchema = z.enum(["0:00"]);
export type DisplayClock = z.infer<typeof DisplayClockSchema>;

export const DescriptionSchema = z.enum(["Final"]);
export type Description = z.infer<typeof DescriptionSchema>;

export const TypeNameSchema = z.enum(["STATUS_FINAL"]);
export type TypeName = z.infer<typeof TypeNameSchema>;

export const StateSchema = z.enum(["in", "pre", "post"]);
export type State = z.infer<typeof StateSchema>;

export const TypeAbbreviationSchema = z.enum(["STD"]);
export type TypeAbbreviation = z.infer<typeof TypeAbbreviationSchema>;

export const LanguageSchema = z.enum(["en-US"]);
export type Language = z.infer<typeof LanguageSchema>;

export const FluffyRelSchema = z.enum([
	"boxscore",
	"desktop",
	"event",
	"highlights",
	"pbp",
	"recap",
	"summary",
]);
export type FluffyRel = z.infer<typeof FluffyRelSchema>;

export const SeasonSlugSchema = z.enum(["regular-season"]);
export type SeasonSlug = z.infer<typeof SeasonSlugSchema>;

export const BroadcastElementSchema = z.object({
	market: MarketEnumSchema.optional(),
	names: z.array(z.string()).optional(),
});
export type BroadcastElement = z.infer<typeof BroadcastElementSchema>;

export const LinescoreSchema = z.object({
	value: z.number().optional(),
});
export type Linescore = z.infer<typeof LinescoreSchema>;

export const RecordSchema = z.object({
	name: RecordNameSchema.optional(),
	abbreviation: RecordAbbreviationSchema.optional(),
	type: RecordTypeSchema.optional(),
	summary: z.string().optional(),
});
export type Record = z.infer<typeof RecordSchema>;

export const TeamLinkSchema = z.object({
	rel: z.array(TypeElementSchema).optional(),
	href: z.string().optional(),
	text: TextSchema.optional(),
	isExternal: z.boolean().optional(),
	isPremium: z.boolean().optional(),
});
export type TeamLink = z.infer<typeof TeamLinkSchema>;

export const TeamClassSchema = z.object({
	id: z.string().optional(),
});
export type TeamClass = z.infer<typeof TeamClassSchema>;

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
});
export type Media = z.infer<typeof MediaSchema>;

export const GeoBroadcastTypeSchema = z.object({
	id: z.string().optional(),
	shortName: ShortNameSchema.optional(),
});
export type GeoBroadcastType = z.infer<typeof GeoBroadcastTypeSchema>;

export const DeviceRestrictionsSchema = z.object({
	type: DeviceRestrictionsTypeSchema.optional(),
	devices: z.array(DeviceSchema).optional(),
});
export type DeviceRestrictions = z.infer<typeof DeviceRestrictionsSchema>;

export const SportscenterSchema = z.object({
	href: z.string().optional(),
});
export type Sportscenter = z.infer<typeof SportscenterSchema>;

export const MobileSchema = z.object({
	href: z.string().optional(),
	source: SportscenterSchema.optional(),
	alert: SportscenterSchema.optional(),
	streaming: SportscenterSchema.optional(),
	progressiveDownload: SportscenterSchema.optional(),
});
export type Mobile = z.infer<typeof MobileSchema>;

export const HlsSchema = z.object({
	href: z.string().optional(),
	HD: SportscenterSchema.optional(),
});
export type Hls = z.infer<typeof HlsSchema>;

export const SelfSchema = z.object({
	href: z.string().optional(),
	dsi: SportscenterSchema.optional(),
});
export type Self = z.infer<typeof SelfSchema>;

export const TrackingSchema = z.object({
	sportName: SportEnumSchema.optional(),
	leagueName: LeagueNameSchema.optional(),
	coverageType: CoverageTypeSchema.optional(),
	trackingName: z.string().optional(),
	trackingId: z.string().optional(),
});
export type Tracking = z.infer<typeof TrackingSchema>;

export const AdSchema = z.object({
	sport: SportEnumSchema.optional(),
	bundle: BundleSchema.optional(),
});
export type Ad = z.infer<typeof AdSchema>;

export const TimeRestrictionsSchema = z.object({
	embargoDate: z.coerce.date().optional(),
	expirationDate: z.coerce.date().optional(),
});
export type TimeRestrictions = z.infer<typeof TimeRestrictionsSchema>;

export const AthleteLinkSchema = z.object({
	rel: z.array(PurpleRelSchema).optional(),
	href: z.string().optional(),
});
export type AthleteLink = z.infer<typeof AthleteLinkSchema>;

export const PositionSchema = z.object({
	abbreviation: PositionAbbreviationSchema.optional(),
});
export type Position = z.infer<typeof PositionSchema>;

export const StatusTypeSchema = z.object({
	id: z.string().optional(),
	name: TypeNameSchema.optional(),
	state: StateSchema,
	completed: z.boolean().optional(),
	description: DescriptionSchema.optional(),
	detail: DescriptionSchema,
	shortDetail: DescriptionSchema.optional(),
});
export type StatusType = z.infer<typeof StatusTypeSchema>;

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
	rel: z.array(FluffyRelSchema).optional(),
	href: z.string().optional(),
	text: ShortTextSchema.optional(),
	shortText: ShortTextSchema.optional(),
	isExternal: z.boolean().optional(),
	isPremium: z.boolean().optional(),
});
export type EventLink = z.infer<typeof EventLinkSchema>;

export const EventSeasonSchema = z.object({
	year: z.number().optional(),
	type: z.number().optional(),
	slug: SeasonSlugSchema.optional(),
});
export type EventSeason = z.infer<typeof EventSeasonSchema>;

export const WeekSchema = z.object({
	number: z.number().optional(),
});
export type Week = z.infer<typeof WeekSchema>;

export const EntrySchema = z.object({
	label: z.string().optional(),
	alternateLabel: z.string().optional(),
	detail: z.string().optional(),
	value: z.string().optional(),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
});
export type Entry = z.infer<typeof EntrySchema>;

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

export const TeamSchema = z.object({
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
	venue: TeamClassSchema.optional(),
	links: z.array(TeamLinkSchema).optional(),
	logo: z.string().optional(),
});
export type Team = z.infer<typeof TeamSchema>;

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

export const ApiSchema = z.object({
	self: SportscenterSchema.optional(),
	artwork: SportscenterSchema.optional(),
});
export type Api = z.infer<typeof ApiSchema>;

export const SourceClassSchema = z.object({
	href: z.string().optional(),
	mezzanine: SportscenterSchema.optional(),
	flash: SportscenterSchema.optional(),
	hds: SportscenterSchema.optional(),
	HLS: HlsSchema.optional(),
	HD: SportscenterSchema.optional(),
	full: SportscenterSchema.optional(),
});
export type SourceClass = z.infer<typeof SourceClassSchema>;

export const WebSchema = z.object({
	href: z.string().optional(),
	self: SelfSchema.optional(),
	seo: SportscenterSchema.optional(),
});
export type Web = z.infer<typeof WebSchema>;

export const AthleteSchema = z.object({
	id: z.string().optional(),
	fullName: z.string().optional(),
	displayName: z.string().optional(),
	shortName: z.string().optional(),
	links: z.array(AthleteLinkSchema).optional(),
	headshot: z.string().optional(),
	jersey: z.string().optional(),
	position: PositionSchema.optional(),
	team: TeamClassSchema.optional(),
	active: z.boolean().optional(),
});
export type Athlete = z.infer<typeof AthleteSchema>;

export const StatusSchema = z.object({
	clock: z.number().optional(),
	displayClock: DisplayClockSchema.optional(),
	period: z.number().optional(),
	type: StatusTypeSchema,
	isTBDFlex: z.boolean().optional(),
});
export type Status = z.infer<typeof StatusSchema>;

export const CompetitionVenueSchema = z.object({
	id: z.string().optional(),
	fullName: z.string().optional(),
	address: AddressSchema.optional(),
	indoor: z.boolean().optional(),
});
export type CompetitionVenue = z.infer<typeof CompetitionVenueSchema>;

export const CalendarSchema = z.object({
	label: z.string().optional(),
	value: z.string().optional(),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
	entries: z.array(EntrySchema).optional(),
});
export type Calendar = z.infer<typeof CalendarSchema>;

export const LeagueSeasonSchema = z.object({
	year: z.number().optional(),
	startDate: z.string().optional(),
	endDate: z.string().optional(),
	displayName: z.string().optional(),
	type: SeasonTypeSchema.optional(),
});
export type LeagueSeason = z.infer<typeof LeagueSeasonSchema>;

export const CompetitorSchema = z.object({
	id: z.string().optional(),
	uid: z.string(),
	type: TypeElementSchema.optional(),
	order: z.number().optional(),
	homeAway: HomeAwaySchema.optional(),
	winner: z.boolean().optional(),
	team: TeamSchema,
	score: z.string(),
	linescores: z.array(LinescoreSchema).optional(),
	statistics: z.array(z.any()).optional(),
	records: z.array(RecordSchema).optional(),
});
export type Competitor = z.infer<typeof CompetitorSchema>;

export const LinksSchema = z.object({
	web: WebSchema.optional(),
	mobile: MobileSchema.optional(),
	api: ApiSchema.optional(),
	source: SourceClassSchema.optional(),
	sportscenter: SportscenterSchema.optional(),
});
export type Links = z.infer<typeof LinksSchema>;

export const HighlightSchema = z.object({
	id: z.number().optional(),
	cerebroId: z.string().optional(),
	source: SourceEnumSchema.optional(),
	headline: z.string().optional(),
	description: z.string().optional(),
	lastModified: z.coerce.date().optional(),
	originalPublishDate: z.coerce.date().optional(),
	duration: z.number().optional(),
	timeRestrictions: TimeRestrictionsSchema.optional(),
	deviceRestrictions: DeviceRestrictionsSchema.optional(),
	thumbnail: z.string().optional(),
	links: LinksSchema.optional(),
	ad: AdSchema.optional(),
	tracking: TrackingSchema.optional(),
});
export type Highlight = z.infer<typeof HighlightSchema>;

export const LeaderLeaderSchema = z.object({
	displayValue: z.string().optional(),
	value: z.number().optional(),
	athlete: AthleteSchema.optional(),
	team: TeamClassSchema.optional(),
});
export type LeaderLeader = z.infer<typeof LeaderLeaderSchema>;

export const LeagueSchema = z.object({
	id: z.string().optional(),
	uid: z.string().optional(),
	name: z.string().optional(),
	abbreviation: z.string().optional(),
	slug: SportEnumSchema.optional(),
	season: LeagueSeasonSchema.optional(),
	logos: z.array(LogoSchema).optional(),
	calendarType: z.string().optional(),
	calendarIsWhitelist: z.boolean().optional(),
	calendarStartDate: z.string().optional(),
	calendarEndDate: z.string().optional(),
	calendar: z.array(CalendarSchema).optional(),
});
export type League = z.infer<typeof LeagueSchema>;

export const VideoSchema = z.object({
	id: z.number().optional(),
	source: SourceEnumSchema.optional(),
	headline: z.string().optional(),
	thumbnail: z.string().optional(),
	duration: z.number().optional(),
	tracking: TrackingSchema.optional(),
	deviceRestrictions: DeviceRestrictionsSchema.optional(),
	links: LinksSchema.optional(),
});
export type Video = z.infer<typeof VideoSchema>;

export const CompetitionLeaderSchema = z.object({
	name: LeaderNameSchema.optional(),
	displayName: DisplayNameSchema.optional(),
	shortDisplayName: ShortDisplayNameSchema.optional(),
	abbreviation: LeaderAbbreviationSchema.optional(),
	leaders: z.array(LeaderLeaderSchema).optional(),
});
export type CompetitionLeader = z.infer<typeof CompetitionLeaderSchema>;

export const HeadlineSchema = z.object({
	type: ShortTextSchema.optional(),
	description: z.string().optional(),
	shortLinkText: z.string().optional(),
	video: z.array(VideoSchema).optional(),
});
export type Headline = z.infer<typeof HeadlineSchema>;

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
	venue: CompetitionVenueSchema.optional(),
	competitors: z.array(CompetitorSchema),
	notes: z.array(z.any()).optional(),
	status: StatusSchema,
	broadcasts: z.array(BroadcastElementSchema).optional(),
	leaders: z.array(CompetitionLeaderSchema).optional(),
	format: FormatSchema.optional(),
	startDate: z.string().optional(),
	broadcast: BroadcastEnumSchema.optional(),
	geoBroadcasts: z.array(GeoBroadcastSchema).optional(),
	highlights: z.array(HighlightSchema).optional(),
	headlines: z.array(HeadlineSchema).optional(),
});
export type Competition = z.infer<typeof CompetitionSchema>;

export const EventSchema = z.object({
	id: z.string(),
	uid: z.string(),
	date: z.string().optional(),
	name: z.string().optional(),
	shortName: z.string().optional(),
	season: EventSeasonSchema.optional(),
	week: WeekSchema.optional(),
	competitions: z.array(CompetitionSchema),
	links: z.array(EventLinkSchema).optional(),
	status: StatusSchema.optional(),
});
export type Event = z.infer<typeof EventSchema>;

export const NflScoreboardResponseSchema = z.object({
	leagues: z.array(LeagueSchema).optional(),
	events: z.array(EventSchema).optional(),
});
export type NflScoreboardResponse = z.infer<typeof NflScoreboardResponseSchema>;
