import { useMutation } from "@apollo/client";

import useCreateCharacterMutation from "./useCreateCharacter.mutation.gql";
import useGetCharactersQuery from "../useGetCharacters/useGetCharacters.query.gql";

export function useCreateCharacter() {
  const [createCharacter, { loading, error }] = useMutation(
    useCreateCharacterMutation
  );

  const createCharacterMutation = (character) => {
    createCharacter({
      variables: { input: { character: { ...character, lastRoll: 1 } } },
      refetchQueries: [{ query: useGetCharactersQuery }],
    });
  };

  return {
    createCharacterMutation,
    loading,
    error,
  };
}
