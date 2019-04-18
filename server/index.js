const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});
const app = express();
server.applyMiddleware({ app });

const { PORT = 4000 } = process.env;
app.listen(
  { port: PORT },
  ({ url } = { url: `http://localhost:${PORT}${server.graphqlPath}` }) =>
    console.log(`🚀 Server ready at ${url}`)
);
