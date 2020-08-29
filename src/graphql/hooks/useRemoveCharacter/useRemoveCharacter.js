import { useMutation } from "@apollo/client";

import useRemoveCharacterMutation from "./useRemoveCharacter.mutation.gql";
import useGetCharactersQuery from "../useGetCharacters/useGetCharacters.query.gql";

export function useRemoveCharacter() {
  const [removeCharacter, { loading, error }] = useMutation(
    useRemoveCharacterMutation
  );

  const removeCharacterMutation = (_id) => () => {
    removeCharacter({
      variables: { input: { _id } },
      refetchQueries: [{ query: useGetCharactersQuery }],
    });
  };

  return {
    removeCharacterMutation,
    loading,
    error,
  };
}
