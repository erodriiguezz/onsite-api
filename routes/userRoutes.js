const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");

const { registerUser, loginUser, currentUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/current", validateToken, currentUser);

module.exports = router;
