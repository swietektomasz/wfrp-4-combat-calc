module.exports = (db) => ({
  Query: {
    allCharacters: async () =>
      await db.collection("characters").find().toArray(),
  },
});
