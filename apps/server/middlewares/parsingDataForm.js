export const parseFormDataFields = (req, res, next) => {
  try {
    if (req.body.categories && typeof req.body.categories === "string") {
      req.body.categories = JSON.parse(req.body.categories);
    }

    if (req.body.tags && typeof req.body.tags === "string") {
      req.body.tags = JSON.parse(req.body.tags);
    }

    next();
  } catch (err) {
    return res
      .status(400)
      .json({ message: "Invalid categories or tags format" });
  }
};
