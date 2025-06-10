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
