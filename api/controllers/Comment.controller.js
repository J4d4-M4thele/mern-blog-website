import { handleError } from "../helpers/handleError.js";
import Comment from "../models/comment.model.js";

export const addComment = async (req, res, next) => {
  try {
    const { author, blogId, comment } = req.body;
    const newComment = new Comment({
      author: author,
      blogId: blogId,
      comment: comment,
    });
    await newComment.save();

    res.status(200).json({
      success: true,
      message: "Comment posted.",
      comment: newComment,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const getComments = async (req, res, next) => {
  try {
    const { blogId } = req.params;
    const comments = await Comment.find({ blogId })
      .populate('author', 'name avatar')
      .sort({ createdAt: -1 })
      .lean()
      .exec();

    res.status(200).json({
      comments,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
