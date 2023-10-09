/**
 * All types related to our score collection in MongoDB
 */

export type Score = {
  _id: string;
  playerName: string;
  score: number;
  createdAt: string;
};
