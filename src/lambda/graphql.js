const { ApolloServer, gql } = require("apollo-server-lambda");
const { characterData } = require("../server/db");

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return characterData;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

exports.handler = server.createHandler({
  cors: {
    origin: true,
    credentials: true,
  },
});
