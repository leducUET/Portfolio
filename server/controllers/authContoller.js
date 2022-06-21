const { handleLoginUser } = require("../services/authService");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// hepler funtion.
// Generate JWT.
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

// @access  Private
const getMe = async (req, res) => {};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(500).json({
      success: false,
      message: "Missing username and/or password.",
    });
  } else {
    const data = await handleLoginUser(email, password);
    if (data.success) {
      res.status(200).json({
        success: true,
        message: "Login successfully.",
        user: data.user,
        token: generateToken(data.user._id),
      });
    } else {
      res.status(400).json({
        success: false,
        message: `Incorrect username or password.`,
        user: {},
      });
    }
  }
};

module.exports = {
  getMe,
  loginUser,
};
