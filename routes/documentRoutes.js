const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const upload = require("../middleware/multer");

// const multer = require("multer");
// const upload = multer({ dest: "uploads/" });

const { uploadDocument, downloadDocument } = require("../controllers/documentController");

const router = express.Router();

router.use(validateToken);
router.post("/upload", upload.single("file"), uploadDocument);
router.get("/download/:id", downloadDocument);

module.exports = router;
