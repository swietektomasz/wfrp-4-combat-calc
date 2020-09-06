import { useMutation } from "@apollo/client";

import useDeleteCharacterMutation from "./useDeleteCharacter.mutation.gql";
import useGetCharactersQuery from "../useGetCharacters/useGetCharacters.query.gql";

export function useDeleteCharacter() {
  const [deleteCharacter, { loading, error }] = useMutation(
    useDeleteCharacterMutation
  );

  const deleteCharacterMutation = (_id) => () => {
    deleteCharacter({
      variables: { input: { _id } },
      refetchQueries: [{ query: useGetCharactersQuery }],
    });
  };

  return {
    deleteCharacterMutation,
    loading,
    error,
  };
}
