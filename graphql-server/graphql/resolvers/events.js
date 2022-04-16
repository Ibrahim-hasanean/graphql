const Event = require("../../models/Events");
const User = require("../../models/User");
const bcrypt = require("bcrypt");
module.exports = {
  Query: {
    eventById: async (_, { id }, req) => {
      if (!req.isAuth) {
        throw new Error("unAuthorize");
      }
      let event = await Event.findById(id).populate("user");
      return event;
    },
    events: async (_, { title, price }, req) => {
      if (!req.isAuth) {
        throw new Error("unAuthorize");
      }
      let query = {};
      if (title) query.title = title;
      if (price) query.price = price;
      let events = await Event.find(query).populate("user");
      return events;
    },
  },
  Mutation: {
    createEvent: async (_, args, req) => {
      if (!req.isAuth) {
        throw new Error("unAuthorize");
      }
      let user = req.user;
      let { title, descrption, price } = args.event;
      let newEvent = Event.create({
        title,
        descrption,
        price,
        date: new Date().toISOString(),
        user: user._id,
      });
      return newEvent;
    },
  },
};
