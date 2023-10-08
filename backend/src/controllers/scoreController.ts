import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import { Score } from '../app';
import scoreModel from '../models/scoreModel';

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

  // Error handling
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

  // When successful
  const score = await scoreModel.create({
    playerName: scoreRequestBody.playerName,
    score: scoreRequestBody.score
  });

  res.status(200).json(score);
});
