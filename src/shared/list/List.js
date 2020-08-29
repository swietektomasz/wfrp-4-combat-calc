import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CreateCharacterModal } from "src/components";

import "./list.css";

export function List({ characters, select, remove }) {
  const isPlayer = characters.some((character) => character.isPlayer);

  return (
    <div className="list-wrapper">
      {characters.map((character) => (
        <div
          className={
            isPlayer ? "list-button-wrapper-left" : "list-button-wrapper-right"
          }
          key={character._id}
        >
          <button
            className="list-character-button"
            onClick={select(character._id, character.isPlayer)}
            type="button"
          >
            {character.name}
          </button>
          <div className="list-side-buttons">
            <button
              className="list-side-button"
              title="Edit character"
              type="button"
            >
              <FontAwesomeIcon icon="edit" />
            </button>
            <button
              className="list-side-button"
              title="Copy character"
              type="button"
            >
              <FontAwesomeIcon icon="copy" />
            </button>
            <button
              className="list-side-button"
              onClick={remove(character._id)}
              title="Remove character"
              type="button"
            >
              <FontAwesomeIcon icon="trash" />
            </button>
          </div>
        </div>
      ))}
      <CreateCharacterModal isPlayer={isPlayer} />
    </div>
  );
}

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func,
  select: PropTypes.func,
  remove: PropTypes.func,
};
