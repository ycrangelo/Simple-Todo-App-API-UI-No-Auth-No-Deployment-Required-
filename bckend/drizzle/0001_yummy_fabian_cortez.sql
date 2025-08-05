ALTER TABLE "todos" ALTER COLUMN "id" SET DATA TYPE serial;--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "is_done" SET DEFAULT false;--> statement-breakpoint
ALTER TABLE "todos" ALTER COLUMN "is_done" SET NOT NULL;