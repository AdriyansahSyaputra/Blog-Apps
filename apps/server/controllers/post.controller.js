import Post from "../models/post.model.js";
import dayjs from "dayjs";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createPost = async (req, res) => {
  const {
    title,
    slug,
    excerpt,
    content,
    status,
    publishDate,
    publishTime,
    categories,
    tags,
  } = req.body;

  try {
    // Simpan path file thumbnail jika ada upload
    const featuredImage = req.file
      ? `/uploads/img/thumbnails/${req.file.filename}`
      : null;

    // Validasi publish date & time untuk scheduled post
    let finalStatus = status;
    if (status === "scheduled") {
      const scheduleDateTime = dayjs(`${publishDate}T${publishTime}`);
      const now = dayjs();

      // Jika waktu sudah lewat, langsung ubah ke published
      if (scheduleDateTime.isBefore(now)) {
        finalStatus = "published";
      }
    }

    const newPost = new Post({
      author: req.user.id,
      title,
      slug,
      excerpt,
      content,
      status: finalStatus,
      publishDate,
      publishTime,
      categories,
      tags,
      featuredImage,
      categories,
      tags,
    });

    await newPost.save();
    res.status(201).json({ message: "Post created successfully." });
  } catch (error) {
    console.error(error);

    // Hapus file jika terjadi error saat save
    if (req.file) {
      const filePath = path.join(
        __dirname,
        "../uploads/img/thumbnails/",
        req.file.filename
      );
      fs.unlink(filePath, (err) => {
        if (err) console.error("Gagal menghapus file:", err.message);
      });
    }

    res.status(500).json({ message: "Something went wrong." });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name")
      .populate("categories", "name")
      .sort({ createdAt: -1 })
      .lean();

    // Format tanggal sebelum sampai ke FE
    const formattedPosts = posts.map((post) => ({
      ...post,
      createdAt: dayjs(post.createdAt).format("DD MMM YYYY"),
      updatedAt: dayjs(post.updatedAt).format("DD MMM YYYY"),
    }));

    return res.status(200).json(formattedPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "Post not found." });
    }

    // Delete file image
    if (post.featuredImage) {
      const filePath = path.join(
        __dirname,
        "../uploads/img/thumbnails/",
        post.featuredImage
      );
      fs.unlink(filePath, (err) => {
        if (err) console.error("Gagal menghapus file:", err.message);
      });
    }

    await Post.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};
