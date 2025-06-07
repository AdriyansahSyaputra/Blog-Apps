import User from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { name, username, email, phone, password } = req.body;

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
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
