import Article from "../models/BlogModel.js";

class ArticleService {
    async getAllService() {
        return await Article.find();
    }

    async getArticleById(article_id) {
        return await Article.findById(article_id);
    }

}

const articleService = new ArticleService();
export default articleService;

