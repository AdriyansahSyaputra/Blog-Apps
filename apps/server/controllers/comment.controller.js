import Comment from "../models/comment.model.js";
import Post from "../models/post.model.js";

export const createComment = async (req, res) => {
  try {
    const { postId, content, parentCommentId } = req.body;
    const userId = req.user.id;

    const comment = new Comment({
      post: postId,
      user: userId,
      content,
      parent: parentCommentId || null,
    });

    await comment.save();
    await Post.findByIdAndUpdate(postId, { $inc: { commentsCount: 1 } });

    return res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const getCommentsByPost = async (req, res) => {
  try {
    const { postId, parent = null, limit = 5, page = 1 } = req.query;
    const parsedParent = parent === "null" ? null : parent;

    const comments = await Comment.find({
      post: postId,
      parent: parsedParent,
    })
      .populate("user", "username avatar")
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .skip((Number(page) - 1) * Number(limit));

      const total = await Comment.countDocuments({ post: postId, parent: parsedParent });

      res.status(200).json({
        comments,
        total,
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
