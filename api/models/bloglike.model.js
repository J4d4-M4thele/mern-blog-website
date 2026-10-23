import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
  },
  { timestamps: true },
);

const BlogLike = mongoose.model("BlogLike", likeSchema, "likes");

export default BlogLike;
