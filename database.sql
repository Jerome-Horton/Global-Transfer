
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user_profile";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "firstName" VARCHAR (80) UNIQUE NOT NULL,
    "middleName" VARCHAR (80) UNIQUE NOT NULL,
    "lastName" VARCHAR (80) UNIQUE NOT NULL,
	"phone" varchar(255) UNIQUE NOT NULL,
	"address" varchar(255) UNIQUE NOT NULL,
    "card_type" varchar(255) NOT NULL,
    "card_number" varchar(255) NOT NULL,
    "card_title" varchar(255) NOT NULL,
    "cvv" varchar(255) NOT NULL,
    "billing_address" varchar(255) NOT NULL,
    "expiration" varchar(255) NOT NULL
    )

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
  values ( 'Australia', 'aus' , '1.39' , 'aud'),
            ('Algeria', 'DZA', '139.88', 'DZD'),
            ('Angola', 'AGO' , '536.53', 'AOA'),
            ('Benin', 'BEN', '575', 'XOF'),
            ('Botswana', 'BWA', '11.55', 'BWP'),
            ('Burkina Faso', 'BFA', '575','XOF'),
            ('Cameroon', 'CMR', '574.64', 'XAF'),
            ('Cote d’Ivoire', 'CIV', '575','XOF'),
            ('Djibouti', 'DJI', '177.72', 'DJF'),
            ('Egypt', 'EGY', '15.72', 'EGP'),
            ('Ethiopia', 'ETH', '49.70', 'ETB'),
            ('Gabon', 'GAB', '574.64',	'XAF'),
            ('Gambia', 'GMB', '53.05', 'GMD'),
            ('Ghana', 'GHA', '6.27', 'GHS'),
            ('Guinea', 'GIN', '9,067.73', 'GNF'),
            ('Kenya', 'KEN', '113.44', 'KES'),
            ('Liberia', 'LBR', '149.75', 'LRD'),
            ('Malawi', 'MWI', '818.38', 'MWK'),
            ('Mali',	'MLI', '575', 'XOF'),
            ('Mauritania', 'MRT', '43.85', 'MRU'),
            ('Morocco', 'MAR', '9.23', 'MAD'),
            ('Mozambique','MOZ', '63.83', 'MZN'),
            ('Namibia', 'NAM', '15.35', 'NAD'),
            ('Niger', 'NER', '575',	'XOF'),
            ('Nigeria', 'NGA', '414.29', 'NGN'),
            ('Rwanda', 'RWA', '1,038.08', 'RWF'),
            ('Senegal', 'SEN', '575', 'XOF'),
            ('Sierra Leone', 'SLE', '11,370.50', 'SLL'),
            ('Somalia', 'SOM', '585.00', 'SOS'),
            ('South Africa', 'ZAF', '15.38', 'ZAR'),
            ('Sudan', 'SDN', '437.50', 'SDG'),
            ('Tanzania', 'TZA', '2,307.81', 'TZS'),
            ('Togo', 'TGO', '575', 'XOF'),
            ('Tunisia', 'TUN', '2.88', 'TND'),
            ('Uganda', 'UGA', '3,524', 'UGX'),
            ('Zambia', 'ZMB', '17.22', 'ZMW'),
            ('Zimbabwe', 'ZWE', '361.9', 'ZWD');	


-- Afghanistan	Afghan afghani	AFN
-- Armenia	Armenian dram	AMD
-- Azerbaijan	Azerbaijan manat	AZN

-- Bahrain	Bahraini dinar	BHD
-- Bangladesh	Bangladeshi taka	BDT
-- Cambodia	Cambodian riel	KHR
-- China	Chinese Yuan Renminbi	CNY
-- Hong Kong (China)	Hong Kong dollar	HKD
-- India	Indian rupee	INR
-- Indonesia	Indonesian rupiah	IDR
-- Iran	Iranian rial	IRR
-- Israel	Israeli new shekel	ILS
-- Japan	Japanese yen	JPY
-- Jordan	Jordanian dinar	JOD
-- Lebanon	Lebanese pound	LBP
-- Malaysia	Malaysian ringgit	MYR
-- Mongolia	Mongolian tugrik	MNT
-- Nepal	Nepalese rupee	NPR
-- North Korea	North Korean won	KPW
-- Oman	Omani rial	OMR
-- Pakistan	Pakistani rupee	PKR
-- Palestine	Israeli new shekel	ILS
-- Philippines	Philippine peso	PHP
-- Qatar	Qatari riyal	QAR
-- Russia	Russian ruble	RUB
-- Saudi Arabia	Saudi Arabian riyal	SAR
-- Singapore	Singapore dollar	SGD
-- South Korea	South Korean won	KRW
-- Sri Lanka	Sri Lankan rupee	LKR
-- Thailand	Thai baht	THB
-- Turkey	Turkish lira	TRY
-- United Arab Emirates	UAE dirham	AED
-- Vietnam	Vietnamese dong	VND
-- 'Yemen', 'YEM',	'250.25', 'YER'