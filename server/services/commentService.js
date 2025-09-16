import Comment from '../models/comment.js';

class CommentService {
  async getAllComments() {
    return await Comment.find();
  }

  async addComment(commentData) {
    const newComment = new Comment(commentData);
    return await newComment.save();
  }
}

const commentService = new CommentService();
export default commentService;
