import { handleError } from "../helpers/handleError.js";
import BlogLike from "../models/bloglike.model.js";

export const doLike = async (req, res, next) => {
  try {
    const { user, blogId } = req.body;
    let like;
    like = await BlogLike.findOne({ user, blogId });
    if (!like) {
      const saveLike = new BlogLike({
        user,
        blogId,
      });
      like = await saveLike.save();
    } else {
      await BlogLike.findByIdAndDelete(like._id);
    }

    const likeCount = await BlogLike.countDocuments({ blogId });

    res.status(200).json({
      likeCount,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const likeCount = async (req, res, next) => {
  try {
    const { blogId, userId } = req.params;
    const likeCount = await BlogLike.countDocuments({ blogId });

    let isUserLiked = false;
    if (userId) {
      const getUserLike = await BlogLike.countDocuments({
        blogId,
        user: userId,
      });
      if (getUserLike > 0) {
        isUserLiked = true;
      }
    }

    res.status(200).json({
      likeCount,
      isUserLiked,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
