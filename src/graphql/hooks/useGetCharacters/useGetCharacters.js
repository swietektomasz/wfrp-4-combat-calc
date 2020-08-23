import getAllCharactersQuery from "./useGetCharacters.query.gql";
import { useQuery } from "@apollo/client";

export function useGetCharacters() {
  const { loading, error, data } = useQuery(getAllCharactersQuery);

  const characters = data?.allCharacters ?? [];

  return { characters, error, loading };
}
