const express = require("express");
const { getMe, loginUser } = require("../controllers/authContoller");
const { verifyToken } = require("../middleware/authMiddleware");
const router = express.Router();

// @route GET api/auth
// @desc Check if user is logged in
// @access Private
router.get("/", verifyToken, getMe);

// @route POST api/auth/login
// @desc Login user
// @access Public
router.post("/login", loginUser);

module.exports = router;
