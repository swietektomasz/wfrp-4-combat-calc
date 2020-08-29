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
  },
});
