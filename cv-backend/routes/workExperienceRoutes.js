import express from 'express';
import { getWorkExperience, addWorkExperience, updateWorkExperience, deleteWorkExperience } from '../controllers/workExperienceController.js';

const router = express.Router();

router.get('/', getWorkExperience);
router.post('/', addWorkExperience);
router.put('/:id', updateWorkExperience);
router.delete('/:id', deleteWorkExperience);

export default router;
