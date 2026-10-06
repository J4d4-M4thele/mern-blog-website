import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import { CloudinaryStorage } from "multer-storage-cloudinary";

// const storage = multer.diskStorage({
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })

// function fileFilter(req, file, cb) {

//     const allowedFiles = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']
//     if (!allowedFiles.includes(file.mimetype)) {
//         cb(new Error('Only images are allowed.'), false)
//     } else {
//         cb(null, true)
//     }

// }

// const upload = multer({ storage: storage, fileFilter: fileFilter })

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog-uploads",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
    resource_type: "auto",
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
});

export default upload;
