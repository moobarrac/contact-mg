# Contacts App and COVID-19 Tracker

This is a simple React app for managing contacts, built using TypeScript, Redux Toolkit, and React Query.
Also, a COVID-19 tracker application that displays real-time data on the number of cases, deaths, and recoveries for countries around the world.

## Features
- View a list of contacts
- Add a new contact
- Edit an existing contact
- Delete a contact
- View details of a contact
- Real-time data on the number of cases, deaths, and recoveries for countries around the world
- Interactive world map showing the number of cases by country
- Line chart showing the global trend of cases over time
- Bar chart showing the top 10 countries with the most cases
- Table showing the number of cases, deaths, and recoveries for all countries


## Installation

1. Clone the repository: `git clone https://github.com/moobarrac/contact-mg.git`
2. Navigate to the root directory of the project `cd contact-mg`
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.

## API Endpoint

The app uses the following API endpoints:

- `https://disease.sh/v3/covid-19/all`: Returns global data of COVID-19 cases, including the number of confirmed cases, recovered cases, deaths, and other related statistics.
- `https://disease.sh/v3/covid-19/countrie`s: Returns data of COVID-19 cases for all countries, including the number of confirmed cases, recovered cases, deaths, and other related statistics.`
- `https://disease.sh/v3/covid-19/historical/all?lastdays=all`: Returns a historical data of COVID-19 cases globally, including the number of confirmed cases, recovered cases, and deaths, with the date for each data point.

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- React Query
- Tailwind CSS

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/) for providing the CSS framework.
- [React Router](https://reactrouter.com/) for providing the routing functionality.
- [Typescript](https://typescriptlang.org/) for providing the type checking functionality.
