/**
 * All types related to our score collection in MongoDB
 */

import { AxiosResponse } from 'axios';

export type Score = {
  _id: string;
  playerName: string;
  score: number;
  createdAt: string;
};

export type AddScoreRequest = {
  playerName: string;
  score: number;
};

// There is more inside the payload, but this is all we need
export type AddScoreRequestRejectedPayload = {
  response: AxiosResponse<{ message: string }>;
};
