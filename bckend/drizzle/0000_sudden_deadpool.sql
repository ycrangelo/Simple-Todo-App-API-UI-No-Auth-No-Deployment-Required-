CREATE TABLE "todos" (
	"id" integer PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"is_done" boolean
);
