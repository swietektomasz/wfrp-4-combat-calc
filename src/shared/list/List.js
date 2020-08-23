import React from "react";
import PropTypes from "prop-types";

import { CreateCharacterModal } from "src/components";

import "./list.css";

export function List({ characters, onClick }) {
  const isPlayer = characters.some((character) => character.isPlayer);

  return (
    <div className="list-wrapper">
      {characters.map((character) => (
        <button
          className="list-character-button"
          key={character._id}
          onClick={onClick(character._id, character.isPlayer)}
          type="button"
        >
          {character.name}
        </button>
      ))}
      <CreateCharacterModal isPlayer={isPlayer} />
    </div>
  );
}

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
