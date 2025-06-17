import Post from "../models/post.model.js";
import dayjs from "dayjs";

export const updateScheduledPosts = async () => {
  const now = dayjs();

  const posts = await Post.find({ status: "scheduled" });

  for (const post of posts) {
    const scheduleDateTime = dayjs(`${post.publishDate}T${post.publishTime}`);

    if (scheduleDateTime.isBefore(now)) {
      post.status = "published";
      await post.save();
      console.log(
        `Scheduled post with ID ${post._id} has been updated to published.`
      );
    }
  }
};
