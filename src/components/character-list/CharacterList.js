import React from "react";
import PropTypes from "prop-types";

import { List } from "shared";
import { usePlayerState, usePlayerDispatch } from "src/context";

import "./character-list.css";

export function CharacterList({ enemy }) {
  const { playerList, enemyList } = usePlayerState();
  const dispatch = usePlayerDispatch();

  const getCharacter = (id) => () => {
    console.log(id);
    if (enemy) {
      return dispatch({ type: "get-enemy-by-id", id });
    }
    return dispatch({ type: "get-player-by-id", id });
  };

  return (
    <div className="character-list-wrapper">
      <List
        onClick={getCharacter}
        characters={enemy ? enemyList : playerList}
      />
    </div>
  );
}

CharacterList.propTypes = {
  enemy: PropTypes.bool,
};
