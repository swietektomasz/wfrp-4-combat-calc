const MongoClient = require("mongodb").MongoClient;
const URI = process.env.DATABASE_URI;

let cachedDb = null;
const connectToMongoDB = () => {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }
  return MongoClient.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((client) => {
    cachedDb = client.db("calcdata");
    return cachedDb;
  });
};

module.exports = { connectToMongoDB };
