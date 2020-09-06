import React from "react";
import PropTypes from "prop-types";

import { List } from "shared";
import { useCharacterDispatch } from "src/context";
import {
  useDeleteCharacter,
  useCreateCharacter,
  useUpdateCharacter,
} from "src/graphql";

import "./character-list.css";

export function CharacterList({ characters }) {
  const dispatch = useCharacterDispatch();

  const { createCharacterMutation } = useCreateCharacter();
  const { deleteCharacterMutation } = useDeleteCharacter();
  const { updateCharacterMutation } = useUpdateCharacter();

  const copyCharacter = () => {};

  const editCharacter = (character) => {
    updateCharacterMutation(character);
  };

  const createCharacter = async (values) => {
    await createCharacterMutation({ ...values });
  };

  const selectCharacter = (id, isPlayer) => () => {
    if (isPlayer) {
      return dispatch({ type: "get-player-by-id", id });
    }
    return dispatch({ type: "get-enemy-by-id", id });
  };

  return (
    <div className="character-list-wrapper">
      <List
        characters={characters}
        copy={copyCharacter}
        create={createCharacter}
        edit={editCharacter}
        remove={deleteCharacterMutation}
        select={selectCharacter}
      />
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};
