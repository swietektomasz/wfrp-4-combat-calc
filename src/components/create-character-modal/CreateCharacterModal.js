import React from "react";
import PropTypes from "prop-types";

import { CharacterModalForm } from "shared";
import { useModalDispatch, useModalState } from "src/context";

import "./create-character-modal.css";

export function CreateCharacterModal({ create, edit, isPlayer }) {
  const { modal, currentCharacter } = useModalState();
  const dispatch = useModalDispatch();

  const onSubmit = async (character) => {
    if (currentCharacter.name) {
      await edit({ ...character, isPlayer });
      dispatch({ type: "toggle-open", modal: { open: false, isPlayer } });
    } else {
      await create({ ...character, isPlayer });
      dispatch({ type: "toggle-open", modal: { open: false, isPlayer } });
    }
  };

  if (!modal?.open || modal?.isPlayer !== isPlayer) return null;

  return (
    <div>
      <div id="myModal" className={"modal-visible"}>
        <div className="modal-content">
          <CharacterModalForm
            initialValues={currentCharacter}
            onSubmit={onSubmit}
          />
          <span
            onClick={() =>
              dispatch({
                type: "toggle-open",
                modal: { open: false, isPlayer },
              })
            }
            className="close"
          >
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

CreateCharacterModal.propTypes = {
  create: PropTypes.func,
  edit: PropTypes.func,
  isPlayer: PropTypes.bool,
};
