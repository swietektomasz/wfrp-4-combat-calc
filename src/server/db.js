const MongoClient = require("mongodb").MongoClient;

const uri = process.env.DATABASE_URI;
const client = new MongoClient(uri, { useNewUrlParser: true });

export const characterData = client.connect((err) => {
  if (err) return err;
  const collection = client.db("calcdata").collection("characters");
  client.close();
  return collection;
});
