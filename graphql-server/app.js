const express = require("express");
const app = express();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema/index");
const root = require("./graphql/resolvers/index");
const verifyUser = require("./middleware/verifyUser");
const { ApolloServer } = require("apollo-server-express");
require("./config/mongoose");

app.use(express.json());
app.use(verifyUser);

// express-graphql library
// app.use(
//   "/api",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: root,
  playground: {
    endpoint: "/graphql",
  },
  context: ({ req }) => {
    if (req.isAuth) {
      return { user: req.user, isAuth: req.isAuth };
    }
    return null;
  },
});

server.applyMiddleware({ app });

app.listen(3000, () => {
  console.log("listen on 3000");
});
