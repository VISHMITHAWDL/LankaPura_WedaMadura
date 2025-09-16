import Product from '../models/product.js';

class ProductService {
  async getAllProducts() {
    return await Product.find();
  }

  async getProductById(product_id) {
    return await Product.findById(product_id);
  }  

}



const productService = new ProductService();
export default productService; 
