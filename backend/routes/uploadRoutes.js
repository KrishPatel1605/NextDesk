const express = require("express");
const router = express.Router();
const multer = require("multer");
const { handleUpload } = require("../controllers/uploadController");

// Configure multer here (no separate middleware)
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`),
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), handleUpload);

module.exports = router;
