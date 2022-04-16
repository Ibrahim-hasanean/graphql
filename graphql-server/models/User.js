const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  email: {
    type: String,
    required: [true, "email required"],
  },
  password: {
    type: String,
    required: [true, "password required"],
  },
  events: [{ type: mongoose.Types.ObjectId, ref: "events" }],
});

module.exports = mongoose.model("users", userSchema);
