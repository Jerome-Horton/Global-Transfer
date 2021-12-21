
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user_profile";
-- Otherwise you will have errors!
CREATE TABLE "user_profile" (
    "id" SERIAL PRIMARY KEY,
	"name" varchar(300) NOT NULL,
	"address" varchar(300) NOT NULL,
	"phone_number" integer NOT NULL,
	"email_address" varchar(300) NOT NULL,
	"password" varchar(1000) NOT NULL
)

CREATE TABLE "transaction" (
	"id" SERIAL PRIMARY KEY,
	"sender_information_id" integer NOT NULL,
	"receiver_information_id" integer NOT NULL,
	"payment_information_id" integer NOT NULL
)

CREATE TABLE "sender_information" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar (300) NOT NULL,
	"address" varchar (300) NOT NULL,
	"phone_number" integer NOT NULL
)

CREATE TABLE "receiver_information" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar (300) NOT NULL,
	"address" varchar (300) NOT NULL,
	"phone_number" integer NOT NULL
)

CREATE TABLE "payment_information" (
	"id" SERIAL PRIMARY KEY,
	"card_information_id" integer NOT NULL,
	"account_information_id" integer NOT NULL,
	"billing_information" varchar(300) NOT NULL,
	"phone_number" integer NOT NULL
)

CREATE TABLE "card_information" (
	"id" SERIAL PRIMARY KEY,
	"card_type" varchar(300) NOT NULL,
	"card_number" integer NOT NULL,
	"name_on_card" varchar (300) NOT NULL,
	"expiration_date" date,
	"cvv" integer NOT NULL,
	"billing_address" varchar (500) NOT NULL
) 

CREATE TABLE "account_information" (
	"id" SERIAL PRIMARY KEY,
	"account_type" varchar(300) NOT NULL,
	"account_number" integer NOT NULL,
	"routing_number" integer NOT NULL
)


CREATE TABLE "receiver Information" (
	"id" SERIAL PRIMARY KEY,
	"name" varchar(300) NOT NULL,
	"address" varchar(300) NOT NULL,
	"phone number" varchar(300) NOT NULL,
)

CREATE TABLE "payment_nformation" (
	"id" SERIAL PRIMARY KEY,
	"card_information_id" integer NOT NULL,
	"account_information_id" integer NOT NULL,
	"billing_information" varchar(300) NOT NULL,
	"phone_number" varchar(300) NOT NULL
)

CREATE TABLE "card_information" (
	"id" SERIAL PRIMARY KEY,
	"card_type" varchar(300) NOT NULL,
	"card_number" serial(300) NOT NULL,
	"name_on_card" serial(300) NOT NULL,
	"expiration_date" serial(300) NOT NULL,
	"cvv" serial(300) NOT NULL,
	"billing_address" serial(500) NOT NULL
) 

CREATE TABLE "account_information" (
	"id" SERIAL PRIMARY KEY,
	"account_type" varchar(300) NOT NULL,
	"account_number" integer(300) NOT NULL,
	"routing_number" integer(300) NOT NULL
)
