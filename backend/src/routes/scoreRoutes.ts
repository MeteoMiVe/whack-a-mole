import express from 'express';

import { getScores, postScore } from '../controllers/scoreController';

const router = express.Router();

router.route('/').get(getScores).post(postScore);

export default router;
