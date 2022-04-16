const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, "title required"],
  },
  descrption: {
    type: String,
    required: [true, "descrption required"],
  },
  date: {
    type: Date,
    required: [true, "date required"],
  },
  price: {
    type: Number,
    required: [true, "price required"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
});

module.exports = mongoose.model("events", eventSchema);
