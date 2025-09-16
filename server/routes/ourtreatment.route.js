import express from 'express';
import { createTreatment} from '../controllers/ourtreatment.controller.js';

const router = express.Router();

router.post('/createTreatment', createTreatment);
// router.get('/getAllTreatments', getAllTreatments);
// router.get('/getTreatmentById/:id', getTreatmentById);
// router.put('/updateTreatment/:id', updateTreatment);
// router.delete('/deleteTreatment/:id', deleteTreatment);

export default router;
