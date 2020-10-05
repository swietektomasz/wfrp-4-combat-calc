const ObjectID = require("mongodb").ObjectID;

const resolvers = (db) => ({
  Query: {
    allCharacters: async () =>
      await db.collection("characters").find().toArray(),
    allMessages: async () => await db.collection("messages").find().toArray(),
  },
  Mutation: {
    createCharacter: async (_, { input: { character } }) => {
      const result = await db
        .collection("characters")
        .insertOne({ ...character })
        .then(({ insertedId }) => ({ _id: insertedId }));

      return result;
    },
    deleteCharacter: async (_, { input: { _id } }) => {
      await db.collection("characters").deleteOne({ _id: ObjectID(_id) }, true);
    },
    updateCharacter: async (_, { input: { character } }) => {
      const { _id, ...stats } = character;
      const result = await db
        .collection("characters")
        .updateOne({ _id: ObjectID(_id) }, { $set: { ...stats } })
        .then(({ acknowledged, matchedCount, modifiedCount }) => {
          return { acknowledged, matchedCount, modifiedCount };
        });

      return result;
    },
    createMessage: async (_, { input: { message } }) => {
      const result = await db
        .collection("messages")
        .insertOne({ ...message })
        .then(({ insertedId }) => ({ _id: insertedId }));

      return result;
    },
    deleteMessage: async (_, { input: { _id } }) => {
      await db.collection("messages").deleteOne({ _id: ObjectID(_id) }, true);
    },
  },
});

module.exports = { resolvers };
