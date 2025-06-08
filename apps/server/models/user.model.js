import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["viewer", "author", "admin"],
      default: "viewer",
    },
    isAuthorRequestPending: {
      type: Boolean,
      default: false,
    },
    authorRequest: {
      bio: String,
      job: String,
      topics: [String],
      portfolio: String,
      socialLinks: {
        twitter: String,
        instagram: String,
        facebook: String,
        medium: String,
      },
      reason: String,
      requestedAt: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
