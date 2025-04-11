CREATE TABLE "receipts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "receipts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"amount" numeric NOT NULL,
	"cpf" integer NOT NULL,
	"createdAt" date NOT NULL,
	CONSTRAINT "receipts_createdAt_unique" UNIQUE("createdAt")
);
