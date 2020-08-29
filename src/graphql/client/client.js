import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        allCharacters: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const link = createHttpLink({
  uri: "/.netlify/functions/graphql",
});

export const client = new ApolloClient({
  cache: cache,
  link: link,
});
