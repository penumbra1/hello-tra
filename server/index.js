const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./graphql");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});
const app = express();
server.applyMiddleware({ app });

const { PORT = 4000 } = process.env;
app.listen({ port: PORT }, ({ url }) =>
  console.log(`🚀 Server ready at ${url}`)
);
