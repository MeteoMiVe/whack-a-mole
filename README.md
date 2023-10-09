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

From the root directory run:

### `yarn test`
