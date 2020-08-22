import getAllCharactersQuery from "./useGetCharacters.query.gql";
import { useQuery } from "react-apollo";

export function useGetCharacters() {
  const { loading, error, data } = useQuery(getAllCharactersQuery);

  const characters = data ? data : [];

  return { characters, error, loading };
}
