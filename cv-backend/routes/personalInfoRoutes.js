import express from 'express';
import { getPersonalInfo, updatePersonalInfo } from '../controllers/personalInfoController.js';

const router = express.Router();

router.get('/', getPersonalInfo);
router.put('/', updatePersonalInfo);

export default router;
