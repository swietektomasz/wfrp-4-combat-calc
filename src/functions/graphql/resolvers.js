module.exports = (db) => ({
  Query: {
    allCharacters: async () =>
      await db.collection("characters").find().toArray(),
  },
  Mutation: {
    createCharacter: async (_, { input }) => {
      await db
        .collection("characters")
        .insertOne({ ...input })
        .then(({ insertedId }) => ({ _id: insertedId }));
    },
  },
});
