import ARTICLESERVICE from '../services/BlogServices.js';

class BlogController {
  async getAllArticles(req, res) {
     try{
        const articles = await ARTICLESERVICE.getAllService();
        res.status(200).json(articles);
     }catch(err){
        res.status(500).json({message: "Error getting articles",err});
     }
  }

  async getArticleById(req, res) {
    try{
        const article = await ARTICLESERVICE.getArticleById(req.params.id);
        res.status(200).json(article);
    }catch(err){
        res.status(500).json({message: "Error getting article",err});
    }
  }
}

const articleController = new BlogController();

export default articleController;