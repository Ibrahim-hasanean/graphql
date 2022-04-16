const User = require("../../models/User");
const Event = require("../../models/Events");
const Booking = require("../../models/Booking");

module.exports = {
  Query: {
    bookings: async (_, args, req) => {
      if (!req.isAuth) {
        throw new Error("unAuthorize");
      }
      let bookings = await Booking.find().populate("user").populate("event");
      return bookings;
    },
  },
  Mutations: {
    addBooking: async (_, { bookingsDetails }, req) => {
      if (!req.isAuth) {
        throw new Error("unAuthorize");
      }
      let { userId, eventId } = bookingsDetails;
      let user = await User.findById(userId);
      if (!user) throw new Error("user not found");
      let event = await Event.findById(eventId);
      if (!event) throw new Error("event not found");
      let newBooking = await Booking.create({
        user: userId,
        event: eventId,
      });
      return { _id: newBooking._id, user, event };
    },
    cancelBooking: async (_, { id }, req) => {
      if (!req.isAuth) {
        throw new Error("unAuthorize");
      }
      let deleteBooking = await Booking.findById(id)
        .populate("user")
        .populate("event");
      if (!deleteBooking) throw new Error("booking not exist");
      await Booking.findByIdAndDelete(id);
      return deleteBooking;
    },
  },
};
