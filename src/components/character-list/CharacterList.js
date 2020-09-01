import React from "react";
import PropTypes from "prop-types";

import { List } from "shared";
import { useCharacterDispatch } from "src/context";
import { useRemoveCharacter, useCreateCharacter } from "src/graphql";

import "./character-list.css";

export function CharacterList({ characters }) {
  const dispatch = useCharacterDispatch();

  const { createCharacterMutation } = useCreateCharacter();
  const { removeCharacterMutation } = useRemoveCharacter();

  const copyCharacter = () => {};

  const editCharacter = () => {};

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
        remove={removeCharacterMutation}
        select={selectCharacter}
      />
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};
