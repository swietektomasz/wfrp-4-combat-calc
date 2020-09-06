import { useMutation } from "@apollo/client";

import useUpdateCharacterMutation from "./useUpdateCharacter.mutation.gql";
import useGetCharactersQuery from "../useGetCharacters/useGetCharacters.query.gql";

export function useUpdateCharacter() {
  const [updateCharacter, { loading, error }] = useMutation(
    useUpdateCharacterMutation
  );

  const updateCharacterMutation = (character) => {
    updateCharacter({
      variables: { input: { character: { ...character, lastRoll: 1 } } },
      refetchQueries: [{ query: useGetCharactersQuery }],
    });
  };

  return {
    updateCharacterMutation,
    loading,
    error,
  };
}
