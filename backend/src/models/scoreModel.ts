import { Schema, model } from 'mongoose';

const scoreSchema = new Schema(
  {
    playerName: {
      type: String,
      required: [true, 'Player name is required']
    },
    score: {
      type: Number,
      required: [true, 'ScorePlayer name is required']
    }
  },
  {
    timestamps: true
  }
);

const scoreModel = model('Score', scoreSchema, 'scores');

export default scoreModel;
