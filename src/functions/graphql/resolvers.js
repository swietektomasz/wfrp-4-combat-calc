const ObjectID = require("mongodb").ObjectID;

module.exports = (db) => ({
  Query: {
    allCharacters: async () =>
      await db.collection("characters").find().toArray(),
  },
  Mutation: {
    createCharacter: async (_, { input: { character } }) => {
      const result = await db
        .collection("characters")
        .insertOne({ ...character })
        .then(({ insertedId }) => ({ _id: insertedId }));

      return result;
    },
    removeCharacter: async (_, { input: { _id } }) => {
      await db.collection("characters").deleteOne({ _id: ObjectID(_id) }, true);
    },
  },
});
