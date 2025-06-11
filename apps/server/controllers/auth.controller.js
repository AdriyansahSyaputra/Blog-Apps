import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const register = async (req, res) => {
  const { name, username, email, phone, password } = req.body;
  console.log("REGISTER BODY:", req.body);

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
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = "1d";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Special admin login
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const payload = {
        email,
        role: "admin",
      };

      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });

      return res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "lax",
          maxAge: 24 * 60 * 60 * 1000,
        })
        .setHeader("Authorization", `Bearer ${token}`)
        .json({
          message: "Admin login successful",
          user: payload,
          redirect: "/dashboard",
        });
    }

    // Normal Login
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: { email: "Email not found" } });
    }

    // Verifikasi Password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ errors: { password: "Invalid password" } });
    }

    // Buat Token
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role,
      name: user.name,
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });

    // Tentukan redirect berdasarkan role
    let redirect = "/";
    if (user.role === "admin") redirect = "/dashboard";

    // Kirim token di cookie dan header
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
      })
      .setHeader("Authorization", `Bearer ${token}`) // Set header manual
      .status(200)
      .json({
        message: "Login successful",
        user: payload,
        redirect,
      });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });
  return res.status(200).json({ message: "Logout successful" });
};
