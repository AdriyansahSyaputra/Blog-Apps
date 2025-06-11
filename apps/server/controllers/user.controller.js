import User from "../models/user.model.js";

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

export const rejectAuthorRequest = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user || !user.isAuthorRequestPending)
    return res.status(404).json({ message: "User not found." });

  user.authorRequest.status = "rejected";
  user.isAuthorRequestPending = false;
  await user.save();

  res.status(200).json({ message: "Author request rejected successfully." });
};

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
