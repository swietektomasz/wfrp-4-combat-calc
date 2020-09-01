import React, { createContext } from "react";
import PropTypes from "prop-types";
import { ModalProvider } from "../modal-context/ModalContext";
import { CharacterProvider } from "../character-context/CharacterContext";

function CombinedProvider({ children }) {
  return (
    <ModalProvider>
      <CharacterProvider>{children}</CharacterProvider>
    </ModalProvider>
  );
}

CombinedProvider.propTypes = {
  children: PropTypes.object,
};

export { CombinedProvider };
