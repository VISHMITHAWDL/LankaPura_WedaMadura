import express from 'express';
import { createContact } from '../controllers/contactus.controller.js';

const router = express.Router();

router.post('/createContact', createContact);

export default router;