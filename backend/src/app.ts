import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/api/scores', (req: Request, res: Response) => {
  res.send('hello scores 1234');
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
