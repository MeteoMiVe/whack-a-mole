import dotenv from 'dotenv';
import express from 'express';

import scoreRoutes from './routes/scoreRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use('/api/scores', scoreRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
