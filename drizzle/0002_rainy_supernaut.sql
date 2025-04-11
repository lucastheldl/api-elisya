ALTER TABLE "receipts" RENAME COLUMN "createdAt" TO "created_at";--> statement-breakpoint
ALTER TABLE "receipts" DROP CONSTRAINT "receipts_createdAt_unique";--> statement-breakpoint
ALTER TABLE "receipts" ALTER COLUMN "amount" SET DATA TYPE varchar(255);