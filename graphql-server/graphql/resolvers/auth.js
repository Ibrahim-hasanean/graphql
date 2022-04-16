const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports = {
  Query: {
    users: async () => {
      let users = await User.find().populate("events");
      return users;
    },
  },
  Mutation: {
    addUser: async (_, { user }) => {
      let { name, password } = user;
      password = await bcrypt.hash(password, 12);
      let newUser = await User.create({
        name,
        password,
        events: ["60e5dd715e670c36384ae4a6"],
      });

      return newUser;
    },
    login: async (_, { email, password }) => {
      let user = await User.findOne({ email });
      if (!user) {
        throw new Error("user not found");
      }
      let comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        throw new Error("wrong password");
      }
      let token = jwt.sign(
        {
          userId: user._id,
        },
        "tokensecret"
      );
      return {
        token,
        user,
      };
    },
  },
};
