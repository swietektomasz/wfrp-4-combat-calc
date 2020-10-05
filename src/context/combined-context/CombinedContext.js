import React from "react";
import PropTypes from "prop-types";
import { CharacterProvider, FeedProvider, ModalProvider } from "../";

function CombinedProvider({ children }) {
  return (
    <FeedProvider>
      <ModalProvider>
        <CharacterProvider>{children}</CharacterProvider>
      </ModalProvider>
    </FeedProvider>
  );
}

CombinedProvider.propTypes = {
  children: PropTypes.object,
};

export { CombinedProvider };
