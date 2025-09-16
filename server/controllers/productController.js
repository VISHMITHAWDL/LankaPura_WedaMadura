import PRODUCTSERVICE from '../services/productservice.js';

class ProductController {

    async getAllProducts(req, res) {
        try {
            const products = await PRODUCTSERVICE.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error getting products', error });
        }
    }

    async getProductById(req, res) {
        try {
            const product = await PRODUCTSERVICE.getProductById(req.params.id);
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json({ message: 'Error getting product', error });
        }
    }
    
}

const productController = new ProductController();

export default productController;