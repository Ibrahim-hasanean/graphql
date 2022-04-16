const authResolvers = require("./auth");
const eventsResolvers = require("./events");
const bookingResolvers = require("./Booking");
// module.exports = { ...authResolvers, ...eventsResolvers, ...bookingResolvers };
module.exports = {
  Query: {
    ...authResolvers.Query,
    ...eventsResolvers.Query,
    ...bookingResolvers.Query,
  },
  Mutation: {
    ...authResolvers.Mutation,
    ...eventsResolvers.Mutation,
    ...bookingResolvers.Mutation,
  },
};
