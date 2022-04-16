const jwt = require("jsonwebtoken");
const User = require("../models/User");
module.exports = async (req, res, next) => {
  let header = req.headers.authorization;
  if (header) {
    let token = header.split(" ")[1];
    if (!token) {
      req.isAuth = false;
      next();
    }
    let decode = jwt.verify(token, "tokensecret");
    let user = await User.findById(decode.userId);
    req.user = user;
    req.isAuth = true;
    return next();
  }
  req.isAuth = false;
  next();
};
