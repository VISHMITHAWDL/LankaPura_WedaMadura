import express from 'express';
import blogController from '../controllers/BlogControllers.js';
const router = express.Router();

router.get('/allblogs', blogController.getAllArticles);
router.get('/blogdetails/:id', blogController.getArticleById);

export default router;