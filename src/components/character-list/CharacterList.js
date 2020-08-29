import React from "react";
import PropTypes from "prop-types";

import { List } from "shared";
import { useCharacterDispatch } from "src/context";
import { useRemoveCharacter } from "src/graphql";

import "./character-list.css";

export function CharacterList({ characters }) {
  const dispatch = useCharacterDispatch();

  const { removeCharacterMutation } = useRemoveCharacter();

  const selectCharacter = (id, isPlayer) => () => {
    if (isPlayer) {
      return dispatch({ type: "get-player-by-id", id });
    }
    return dispatch({ type: "get-enemy-by-id", id });
  };

  return (
    <div className="character-list-wrapper">
      <List
        remove={removeCharacterMutation}
        select={selectCharacter}
        characters={characters}
      />
    </div>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.array,
};
