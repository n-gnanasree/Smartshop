const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register
const registerUser = async (req, res) => {
  const { name, email, password } =
    req.body;

  const userExists = await User.findOne({
    email,
  });

  if (userExists) {
    return res.json({
      message: "User already exists",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword =
    await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  res.json(user);
};

// Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
  });

  if (
    user &&
    (await bcrypt.compare(
      password,
      user.password
    ))
  ) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: jwt.sign(
        { id: user.id },
        "SECRET123",
        { expiresIn: "30d" }
      ),
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
