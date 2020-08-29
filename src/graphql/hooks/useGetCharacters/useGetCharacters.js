import { useQuery } from "@apollo/client";

import getAllCharactersQuery from "./useGetCharacters.query.gql";

export function useGetCharacters() {
  const { loading, error, data } = useQuery(getAllCharactersQuery);

  const characters = data?.allCharacters ?? [];

  return { characters, error, loading };
}
