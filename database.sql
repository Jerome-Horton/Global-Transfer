
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user_profile";
-- Otherwise you will have errors!

CREATE TABLE "transactions"
(
    "id" SERIAL PRIMARY KEY,
    "legal_first_name" VARCHAR (80) NOT NULL,
    "legal_middle_name" VARCHAR (80) NOT NULL,
    "legal_last_name" VARCHAR (80) NOT NULL,
    "second_last_name" VARCHAR (80) NOT NULL,
    "address_1" VARCHAR (255) NOT NULL,
    "address_2" VARCHAR (255) NOT NULL,
    "phone" VARCHAR (80) NOT NULL,
    "amount" VARCHAR (80) NOT NULL,
    "country" VARCHAR (80) NOT NULL,
    "payment_option" VARCHAR (80) NOT NULL,
    "receiving_method" VARCHAR (80) NOT NULL,
    "reference_number" VARCHAR (80) NOT NULL,
    "date" DATE NOT NULL DEFAULT NOW(),
    "sender_id"  bigint NOT NULL,
    FOREIGN KEY ("sender_id") REFERENCES "user"(id)
)

CREATE TABLE "currency"
(
    "id" SERIAL PRIMARY KEY,
    "full_name" VARCHAR (80) NOT NULL,
    "short_name" VARCHAR (80) NOT NULL,
    "exchange_rate" VARCHAR (80) NOT NULL,
    "currency_name" VARCHAR (80) NOT NULL
)


INSERT INTO "currency" (full_name, short_name, exchange_rate, currency_name)
  values ( 'Australia', 'aus' , '1.39' , 'aud' )   