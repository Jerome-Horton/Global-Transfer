
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user_profile";
-- Otherwise you will have errors!

CREATE TABLE users (
    "id" SERIAL PRIMARY KEY,
	"name" varchar(500) NOT NULL,
	"address" varchar(1000) NOT NULL,
	"phone" Varchar NOT NULL,
	"email" Varchar(500) NOT NULL,
	"password" varchar(1000) NOT NULL,
	"card_type" varchar(200) NOT NULL,
	"card_number" Varchar NOT NULL,
	"card_title" Varchar (500) NOT NULL,
	"cvv" Varchar NOT NULL,
	"billing_address" Varchar (1000) Not Null,
	"expiration" Varchar (300) Not Null
)

CREATE TABLE transactions (
	"id" SERIAL PRIMARY KEY,
	"sender_id" SERIAL,
    "legal_first_name" varchar(500) NOT NULL,
    "legal_middle_name" varchar(500) NOT NULL,
    "legal_last_name" varchar(500) NOT NULL,
    "second_last_name" varchar(500) NOT NULL,
    "address_1" varchar(500) NOT NULL,
    "address_2" varchar(500) NOT NULL,
    "phone" Varchar,
    "amount" Varchar,
    "country" Varchar,
    "payment_option" Varchar,
    "receiving_method" Varchar,
    "reference_number" Varchar,
    date date