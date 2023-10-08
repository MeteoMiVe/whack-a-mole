import { Request, Response } from 'express';

// @desc  Get top 10 scores
// @route GET /api/scores
export const getScores = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get scores' });
};

// @desc  Add a new score to the database
// @route POST /api/scores
export const postScore = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Post score' });
};
