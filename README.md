# Getting Started

In order to run this project, you must have NodeJS installed on your machine

## To run the app

To start the application, first install all dependencies by running: `npm install`

and then start the app by running `npm start`

start the app in development mode, at [http://localhost:3000](http://localhost:3000) in your browser.

## Unit Tests

Execute unit test cases by running `npm test`

## Assumptions, Clarifications and Details

Imported Material UI for table and dropdown components

Since the last object (totals) of the voter details array was causing an issue in % calculations by each object (each ward), I excluded it from the UI.
