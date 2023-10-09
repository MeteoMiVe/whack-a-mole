# Running the game

This project was bootstrapped using [Create React App](https://github.com/facebook/create-react-app).

I used the [MERN](https://www.mongodb.com/mern-stack) stack to extend it to a full stack application, meaning I added an Express backend service and a Mongo database.

The Mongo database runs on a cloud service using [MongoDB Atlas](https://www.mongodb.com/atlas/database).

The Express service is located in a local folder `backend` and should be run in a separate terminal.

## Run the backend

In the project root directory `whack-a-mole` there is a subdirectory `backend`. Cd into it using:

### `cd backend`

Afterwards you can start the server using following commands:

### `npm install`

### `npm run dev`

The backend should run on port 5000.

## Run frontend

Once the backend service is running, open a new terminal and go to the root directory: `whack-a-mole`

From there run following commands:

### `yarn`

### `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run frontend tests

The project contains unit tests written using [Jest](https://jestjs.io/) and an e2e test using [Cypress](https://www.cypress.io/) to check the game flow.

### Run Jest tests

From the root directory run:

### `yarn test`

### Run Cypress tests

Make sure both the backend and frontend are running.
Open a new terminal.
From the root directory run:

### `yarn cypress`

You will see 2 options to choose from, choose `E2E Testing`
Next you will have to select a browser, I developed using Chrome.
Press `Start E2E testing in Chrome`
Next you wil see an overview of the test files, click on `runGame.cy.ts`
The test should execute automatically with the steps shown on the left and the rendered content on the right.
