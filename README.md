# Getting Started

In order to run this project, you must have NodeJS installed on your machine

## To run the app

To start the application, first install all dependencies by running: `npm install`

and then start the app by running `npm start`

start the app in development mode, at [http://localhost:3000](http://localhost:3000) in your browser.

## Assumptions, Clarifications and Details

Imported Material UI for table and dropdown components

Since the last object (totals) of the voter details array was causing an issue in % calculations by each object (each ward), I excluded it from the UI.

Since the totals (grand totals and totals by ward) are incorrect, the % calculation that I added might not be accurate, but my calculation logic was based on the assumption that the ward votes and segment votes added up to the totals included in the JSON object. I only realized that the totals were incorrect during my testing, which was after I built the page based on the assumption.
