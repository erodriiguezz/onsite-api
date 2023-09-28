const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

// @desc Register user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, degree, specialty, address, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const userFound = await User.findOne({ email });
  if (userFound) {
    res.status(400);
    throw new Error("User is already registered!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("hashed password: ", hashedPassword);

  const user = await User.create({
    name,
    email,
    degree,
    specialty,
    address,
    password: hashedPassword,
  });

  console.log(`User created ${user}`);

  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid.");
  }
});

// @desc Login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ email });
  // compare password with hashedpassword
  if (user && (await bcrypt.compare(password, user.password))) {
    const accesstoken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    res.status(200).json({ accesstoken });
  } else {
    res.status(401);
    throw new Error("Email or password is not valid.");
  }
});

// @desc Current user info
// @route POST /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
