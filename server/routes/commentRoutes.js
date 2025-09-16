import express from 'express';
import commentController from '../controllers/commentController.js';

const router = express.Router();

router.get('/allcomments', commentController.getAllComments);
router.post('/addcomment', commentController.addComment);

export default router;
