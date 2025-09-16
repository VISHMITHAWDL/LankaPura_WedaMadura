import express from 'express';
import productController from '../controllers/productController.js';
const router = express.Router();

router.get('/allproducts', productController.getAllProducts);
router.get('/productdetails/:id', productController.getProductById);

export default router;