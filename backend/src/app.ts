import dotenv from 'dotenv';
import express from 'express';

import connectDB from './config/db';
import errorHandler from './middleware/errorMiddleware';
import scoreRoutes from './routes/scoreRoutes';

// Load environment variables
dotenv.config();

// Create Express instance
const app = express();
const port = process.env.PORT;

// Connect to MongoDB
connectDB();

// Support JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add routes
app.use('/api/scores', scoreRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
