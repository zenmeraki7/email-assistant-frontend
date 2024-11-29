import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure Multer with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "emailTemplate", // Optional: Specify a folder in your Cloudinary account
    allowed_formats: ["jpg", "png", "webp", "jpeg"], // Specify allowed formats
  },
});

const upload = multer({ storage });

export { cloudinary, upload };
