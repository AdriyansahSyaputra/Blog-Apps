import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fungsi untuk submit request author
export const submitAuthorRequest = async (req, res) => {
  const userId = req.user.id;

  const { bio, job, topics, portfolio, socialLinks, reason } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found." });

    if (user.role === "author")
      return res.status(400).json({ message: "You are already an author." });

    // Cek apakah user sudah punya permintaan yang pending atau sudah di-approve
    if (
      user.isAuthorRequestPending ||
      user.authorRequest?.status === "pending" ||
      user.authorRequest?.status === "approved"
    ) {
      return res
        .status(400)
        .json({ message: "You have already submitted a request." });
    }

    user.authorRequest = {
      bio,
      job,
      topics,
      portfolio,
      socialLinks,
      reason,
      requestedAt: new Date(),
      status: "pending",
    };
    user.isAuthorRequestPending = true;
    await user.save();

    return res
      .status(200)
      .json({ message: "Author request submitted successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Fungsi apabila author request diterima
export const approveAuthorRequest = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user || !user.isAuthorRequestPending)
    return res.status(404).json({ message: "User not found." });

  user.role = "author";
  user.authorRequest.status = "approved";
  user.isAuthorRequestPending = false;
  await user.save();

  res.status(200).json({ message: "Author request approved successfully." });
};

// Fungsi apabila author request ditolak
export const rejectAuthorRequest = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user || !user.isAuthorRequestPending)
    return res.status(404).json({ message: "User not found." });

  user.authorRequest.status = "rejected";
  user.isAuthorRequestPending = false;
  await user.save();

  res.status(200).json({ message: "Author request rejected successfully." });
};

// Ambil data user
export const getCurrentUser = (req, res) => {
  const user = req.user;
  if (!user) return res.status(404).json({ message: "User not found." });

  return res.status(200).json(user);
};

// Ambil data pending request author
export const getPendingRequests = async (req, res) => {
  const users = await User.find({ isAuthorRequestPending: true });

  return res.status(200).json(users);
};

// Fungsi untuk menambahkan user baru
export const addUser = async (req, res) => {
  const { name, username, email, phone, birthday, password, role, status } =
    req.body;
  const avatar = req.file ? req.file.filename : "default.jpg";

  try {
    // Cek email atau username sudah digunakan
    const existingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existingUser) {
      return res.status(400).json({
        errors: {
          email:
            existingUser.email === email ? "Email already exists" : undefined,
          username:
            existingUser.username === username
              ? "Username already exists"
              : undefined,
        },
      });
    }

    // Enkripsi Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Membuat User baru
    const user = new User({
      name,
      username,
      email,
      phone,
      birthday,
      password: hashedPassword,
      role,
      status,
      avatar,
    });
    await user.save();

    return res.status(201).json({ message: "User created successfully." });
  } catch (err) {
    console.log(err);

    // Hapus file jika terjadi error saat save
    if (req.file) {
      const filePath = path.join(__dirname, "../uploads/img/", req.file.filename);
      fs.unlink(filePath, (err) => {
        if (err) console.error("Gagal menghapus file:", err.message);
      });
    }

    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Update user
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, username, email, phone, birthday, role, status, removeAvatar } =
    req.body;
  const avatar = req.file ? req.file.filename : undefined;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Hapus avatar lama jika ada file baru ATAU user minta hapus foto
    if (avatar || removeAvatar === "true") {
      if (user.avatar) {
        const filePath = path.join(__dirname, "../uploads/img/", user.avatar);
        fs.unlink(filePath, (err) => {
          if (err) console.error("Gagal menghapus file:", err.message);
        });
        user.avatar = null;
      }
    }

    // Set avatar baru jika ada upload
    if (avatar) {
      user.avatar = avatar;
    }

    user.name = name;
    user.username = username;
    user.email = email;
    user.phone = phone;
    user.birthday = birthday;
    user.role = role;
    user.status = status;
    await user.save();

    return res.status(200).json({ message: "User updated successfully." });
  } catch (err) {
    console.log(err);
    // Hapus file jika terjadi error saat update
    if (req.file) {
      const filePath = path.join(
        __dirname,
        "../uploads/img/",
        req.file.filename
      );
      fs.unlink(filePath, (err) => {
        if (err) console.error("Gagal menghapus file:", err.message);
      });
    }
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Ambil semua data users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().lean();
    if (!users) {
      return res.status(404).json({ message: "Users not found." });
    }

    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Hapus file avatar jika ada
    if (user.avatar) {
      const filePath = path.join(__dirname, "../uploads/img/", user.avatar);
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Gagal menghapus file:", err.message);
        }
      });
    }

    // Hapus user dari database
    await User.findByIdAndDelete(req.params.id);

    return res.status(200).json({ message: "User deleted successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
