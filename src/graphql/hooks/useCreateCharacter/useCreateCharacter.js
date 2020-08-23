import useCreateCharacterMutation from "./useCreateCharacter.mutation.gql";
import { useMutation } from "@apollo/client";

export function useCreateCharacter() {
  const [createCharacter] = useMutation(useCreateCharacterMutation);

  const createCharacterMutation = ({ name, isPlayer }) => {
    createCharacter({ variables: { input: { name, isPlayer } } });
  };

  return { createCharacterMutation };
}
