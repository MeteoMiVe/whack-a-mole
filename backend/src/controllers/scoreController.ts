import asyncHandler from 'express-async-handler';

import { Request, Response } from 'express';

import { Score } from '../app';

// @desc  Get top 10 scores
// @route GET /api/scores
export const getScores = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Get scores' });
});

// @desc  Add a new score to the database
// @route POST /api/scores
export const postScore = asyncHandler(async (req: Request, res: Response) => {
  const scoreRequestBody: Score = req.body;

  if (!scoreRequestBody.playerName && !scoreRequestBody.score) {
    res.status(400);
    throw new Error("Please fill in your name, your score wasn't sent to us");
  }

  if (!scoreRequestBody.playerName) {
    res.status(400);
    throw new Error('Please fill in your name');
  }

  if (!scoreRequestBody.score) {
    res.status(400);
    throw new Error('Your score was not sent to us');
  }

  res.status(200).json({ message: 'Post score' });
});
