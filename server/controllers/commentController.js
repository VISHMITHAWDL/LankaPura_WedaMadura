import commentService from '../services/commentService.js';

class CommentController {

  async getAllComments(req, res) {
    try {
      const comments = await commentService.getAllComments();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ message: 'Error getting comments', error });
    }
  }

  async addComment(req, res) {
    try {
      const { name, email, text } = req.body;

      if (!name || !text) {
        return res.status(400).json({ message: 'Name and comment text are required' });
      }

      const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      });

      const commentData = {
        name,
        email,
        text,
        date: currentDate
      };

      const savedComment = await commentService.addComment(commentData);
      res.status(201).json(savedComment);
    } catch (error) {
      res.status(500).json({ message: 'Error posting comment', error });
    }
  }
}

const commentController = new CommentController();
export default commentController;
