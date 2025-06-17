import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// File validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = [".jpg", ".jpeg", ".png"];
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = file.mimetype;

  const isExtAllowed = allowedTypes.includes(ext);
  const isMimeAllowed = mime.startsWith("image/");

  if (isExtAllowed && isMimeAllowed) {
    return cb(null, true);
  } else {
    return cb(
      new Error(
        "Only image files are allowed! Allowed types: .jpg, .jpeg, .png"
      )
    );
  }
};

// Fungsi pembuat multer upload sesuai folder tujuan
const createUpload = (subFolder) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath = path.join(__dirname, `../uploads/img/${subFolder}`);
      cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    },
  });

  return multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
    fileFilter,
  });
};

export const uploadThumbnail = createUpload("thumbnails");
export const uploadProfile = createUpload("profile");
