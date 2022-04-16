const { buildSchema } = require("graphql");
const { gql } = require("apollo-server-express");
// let schema = buildSchema
// type RootQuery {
//     events(title:String,price:Float): [Event!]!
//     eventById(id:String!):Event
//     users:[User!]
//     bookings: [Booking!]!
// }

// type RootMutation {
//     createEvent(event:EventInput):Event
//     addUser(user:userInput!):User
//     addBooking(bookingsDetails:bookingInput!):Booking
//     cancelBooking(id:String!):Booking
//     login(email:String!,password:String!):loginResponse!
// }
let schema = gql(`
    type Query {
        events(title:String,price:Float): [Event!]!
        eventById(id:String!):Event      
        users:[User!]
        bookings: [Booking!]!
    }

    type Mutation {
        createEvent(event:EventInput):Event
        addUser(user:userInput!):User
        addBooking(bookingsDetails:bookingInput!):Booking 
        cancelBooking(id:String!):Booking
        login(email:String!,password:String!):loginResponse!
    }

    type loginResponse{
        token:String!
        user:User
    }

    type Booking{
        _id:String,
        user:User,
        event:Event
    }

    input bookingInput{
        userId:String!
        eventId: String!
    }

    input EventInput{
        title: String!
        descrption: String!
        price: Float!
    }
    input userInput{
        name: String!
        password: String!
    }

    type Event{
        _id: ID!
        title: String!
        descrption: String!
        date: String!
        price: Float!
        user:User
    }

    type User{
        _id: String!
        name: String!
        email: String!
        password: String!
        events: [Event!]
    }

   
`);
// schema {
//     query: RootQuery
//     mutation:RootMutation
// }

module.exports = schema;
