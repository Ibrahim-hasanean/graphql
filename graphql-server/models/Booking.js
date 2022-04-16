const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    event: {
      type: mongoose.Types.ObjectId,
      ref: "events",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("booking", bookingSchema);
