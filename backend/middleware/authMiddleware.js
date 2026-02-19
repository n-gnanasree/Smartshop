const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token) {
    token = token.split(" ")[1];

    try {
      const decoded = jwt.verify(
        token,
        "SECRET123"
      );

      req.user = await User.findById(
        decoded.id
      ).select("-password");

      next();
    } catch (error) {
      res.status(401).json({
        message: "Not authorized",
      });
    }
  } else {
    res.status(401).json({
      message: "No token",
    });
  }
};

module.exports = { protect };