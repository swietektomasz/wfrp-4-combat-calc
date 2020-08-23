import React from "react";
import PropTypes from "prop-types";

import "./list.css";

export function List({ characters, onClick }) {
  return (
    <div className="list-wrapper">
      {characters.map((character) => (
        <button
          onClick={onClick(character._id, character.isPlayer)}
          className="list-character-button"
          key={character._id}
        >
          {character.name}
        </button>
      ))}
    </div>
  );
}

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
};
