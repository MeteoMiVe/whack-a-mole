import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import scoreModel from '../models/scoreModel';

type Score = {
  playerName: string;
  score: number;
};

// @desc  Get top 10 scores
// @route GET /api/scores
export const getScores = asyncHandler(async (req: Request, res: Response) => {
  const scores = await scoreModel
    .find()
    .sort({ score: -1 }) // Highest scores first
    .limit(10); // We only want the top 10

  res.status(200).json(scores);
});

// @desc  Add a new score to the database
// @route POST /api/scores
export const postScore = asyncHandler(async (req: Request, res: Response) => {
  const scoreRequestBody: Score = req.body;
  const { playerName, score } = scoreRequestBody;

  // Error handling
  if (!playerName && !score) {
    res.status(400);
    throw new Error("Please fill in your name, your score wasn't sent to us");
  }

  if (!playerName) {
    res.status(400);
    throw new Error('Please fill in your name');
  }

  if (!score) {
    res.status(400);
    throw new Error('Your score was not sent to us');
  }

  // When successful
  const scoreResult = await scoreModel.create({
    playerName,
    score
  });

  res.status(200).json(scoreResult);
});
