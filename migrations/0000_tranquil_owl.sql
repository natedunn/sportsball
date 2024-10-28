CREATE TABLE IF NOT EXISTS "favorite_team" (
	"auto_id" serial PRIMARY KEY NOT NULL,
	"id" varchar(255) DEFAULT LPAD(LEFT(REPLACE(REPLACE(REPLACE(encode(convert_to(md5(random()::text), 'utf-8'), 'base64'), '/', ''), '+', ''), '=', ''), 15), 15, '0') NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"deleted_at" timestamp,
	"updates" integer DEFAULT 0 NOT NULL,
	"teamId" varchar NOT NULL,
	"userId" varchar NOT NULL,
	CONSTRAINT "favorite_team_id_unique" UNIQUE("id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "nba_team" (
	"auto_id" serial PRIMARY KEY NOT NULL,
	"id" varchar(255) DEFAULT LPAD(LEFT(REPLACE(REPLACE(REPLACE(encode(convert_to(md5(random()::text), 'utf-8'), 'base64'), '/', ''), '+', ''), '=', ''), 15), 15, '0') NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"deleted_at" timestamp,
	"updates" integer DEFAULT 0 NOT NULL,
	"name" varchar NOT NULL,
	"teamId" varchar NOT NULL,
	"primaryColor" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"darkColor" varchar NOT NULL,
	"lightColor" varchar NOT NULL,
	CONSTRAINT "nba_team_id_unique" UNIQUE("id"),
	CONSTRAINT "nba_team_teamId_unique" UNIQUE("teamId"),
	CONSTRAINT "nba_team_slug_unique" UNIQUE("slug")
);
