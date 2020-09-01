import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CreateCharacterModal } from "src/components";
import { useModalDispatch } from "src/context";

import "./list.css";

export function List({ characters, select, remove, copy, create, edit }) {
  const isPlayer = characters.some((character) => character.isPlayer);
  const dispatch = useModalDispatch();

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
              onClick={() => {
                dispatch({
                  type: "toggle-open",
                  modal: { open: true, isPlayer: character.isPlayer },
                });
                dispatch({ type: "set-current-character", character });
              }}
              title="Edit character"
              type="button"
            >
              <FontAwesomeIcon icon="edit" />
            </button>
            <button
              className="list-side-button"
              onClick={copy()}
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
      <button
        className="open-modal-button"
        onClick={() =>
          dispatch({ type: "toggle-open", modal: { open: true, isPlayer } })
        }
      >
        +
      </button>
      <CreateCharacterModal isPlayer={isPlayer} create={create} edit={edit} />
    </div>
  );
}

List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object),
  copy: PropTypes.func,
  create: PropTypes.func,
  edit: PropTypes.func,
  onClick: PropTypes.func,
  remove: PropTypes.func,
  select: PropTypes.func,
};
