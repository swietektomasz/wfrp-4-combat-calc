const { ApolloServer } = require("apollo-server-lambda");

const { connectToMongoDB } = require("./graphql/db");
const { typeDefs } = require("./graphql/typedefs");
const { resolvers } = require("./graphql/resolvers");

exports.handler = async function (event, context) {
  const db = await connectToMongoDB();
  const server = new ApolloServer({
    typeDefs,
    resolvers: resolvers(db),
    introspection: true,
    playground: true,
  });
  return new Promise((yay, nay) => {
    const cb = (err, args) => (err ? nay(err) : yay(args));
    server.createHandler()(event, context, cb);
  });
};
