
# GLOBAL TRANSFER

### Built With

<a href="https://www.heroku.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a><a href="https://nodejs.org/en/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" height="40px" width="40px" /></a><a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a><a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a><a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>

### Table of Contents

- [Description](#description)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Acknowledgements](#acknowledgements)
- [Contacts](#contacts)

## Description
_Duration: 2 Week Sprint_

Global Transfer is an app designed to remit money internationally. International money transfer is an essential source of family and national income and is one of the most significant external financing sources. This application aims to improve the remission of money globally by allowing people worldwide to send money to their loved ones and business partners securely and instantly. 

Users will initiate a remittance by entering an amount to send and selecting the destination country. Next, a user will estimate the fee of the transfer cost by converting the origin country's currency value to the destination country's currency. If a user is not an existing user, they will have the ability to register. If they are a current user, they will have the ability to sign in and access their current contact information, payment information, and transfer transactions history. 

A user will have the option to update their payment and contact details in the My Account view. Once login/registered, the user can follow through and complete the transfer process. Upon completion of the transfer, a user will be provided a reference number as proof of transfer—the purpose of the reference number is to provide it to the receiver to ensure funds pick-up.

## Screenshots

#### Home View

<img width="1163" alt="Screen Shot 2022-02-22 at 1 35 19 AM" src="https://user-images.githubusercontent.com/86622680/155088563-4e01453e-d9bc-4a1f-b39a-681cd55f6cb2.png">

#### Transfer View

<img width="1163" alt="Screen Shot 2022-02-22 at 1 36 05 AM" src="https://user-images.githubusercontent.com/86622680/155088761-c333eaf1-95e7-4a7e-a939-436b9886d895.png">

#### User LogIn View 

<img width="1227" alt="Screen Shot 2022-02-22 at 1 36 46 AM" src="https://user-images.githubusercontent.com/86622680/155088845-104816ad-2e95-4516-a3d7-c7f0481eec59.png">

#### Member View

<img width="1234" alt="Screen Shot 2022-02-22 at 1 37 43 AM" src="https://user-images.githubusercontent.com/86622680/155088992-13bf8929-3f63-44b8-9edd-64b12e3ce52f.png">

#### My Account View

<img width="1234" alt="Screen Shot 2022-02-22 at 1 38 20 AM" src="https://user-images.githubusercontent.com/86622680/155089078-af85a028-9501-4b41-ad29-98cb0d4d25dc.png">

#### Transfer(s) History View

<img width="1234" alt="Screen Shot 2022-02-22 at 1 39 45 AM" src="https://user-images.githubusercontent.com/86622680/155089175-6c4b4ab1-87b6-4398-b136-cab808ff19ea.png">

#### Receiver's Information View

<img width="1233" alt="Screen Shot 2022-02-22 at 1 40 45 AM" src="https://user-images.githubusercontent.com/86622680/155089441-99b9d984-6ad9-42ce-bff0-f6272c5e3e91.png">

#### Fraud Protection View

<img width="1233" alt="Screen Shot 2022-02-22 at 1 41 11 AM" src="https://user-images.githubusercontent.com/86622680/155089628-9bb8f860-0cd5-433c-bb64-7978fe9e677f.png">

#### Transfer Review View

<img width="1209" alt="Screen Shot 2022-02-22 at 2 24 16 AM" src="https://user-images.githubusercontent.com/86622680/155091953-63c58c5b-7395-4d55-8fc7-7420bda000c1.png">

#### Tranfer Completion View

<img width="1240" alt="Screen Shot 2022-02-22 at 1 43 30 AM" src="https://user-images.githubusercontent.com/86622680/155090252-9942540d-07eb-4fde-9303-ca4ca6143213.png">

#### Receiver's View

<img width="1240" alt="Screen Shot 2022-02-22 at 1 45 09 AM" src="https://user-images.githubusercontent.com/86622680/155090359-dd759de4-a091-41b6-9a73-f7ab5e6c52e2.png">

#### Track Transfer View

<img width="1199" alt="Screen Shot 2022-02-22 at 1 46 05 AM" src="https://user-images.githubusercontent.com/86622680/155090499-600a6873-48cd-4036-b036-091322303cfd.png">

## Getting Started

This app uses PostgreSQL for database storage. There is a database.sql file in the repository containing the database structure needed to run this app.

### Prerequisites

Before you get started, this application require these technologies to run successfully:

- [Node.js](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

- Create a database called `global_transfer`.
- Run the queries that are stored in the database.sql file. I recommend using [Postico](https://eggerapps.at/postico/) to run the queries.
- In your terminal, navigate to the project directory and run `npm install` to install all of the necessary dependencies.
- Running the server code requires nodemon. If you don't already have nodemon, install it globally with `npm install nodemon --global`.
- Run `npm run server` to start the server.
- Run `npm run client` to open the project in a new browser window.
- Navigate to `localhost:3000`

## Usage

To watch my presentation of Global Transfer 

- [Click Here](https://www.linkedin.com/posts/jerome-d-horton_last-week-i-presented-my-full-stack-solo-ugcPost-6892186950954991616-PmBI)


## Acknowledgements
Thanks to [Prime Digital Academy](www.primeacademy.io), who equipped and helped me make this application a reality. Thank you to my family and friends for their undying support.

## Contacts

To get in-touch with me, please access the links below:

<a href="https://www.linkedin.com/in/jerome-d-horton/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>  <a href="mailto:jeromehorton1@gmail.com"><img src=https://raw.githubusercontent.com/johnturner4004/readme-generator/master/src/components/assets/images/email_me_button_icon_151852.svg /></a>
