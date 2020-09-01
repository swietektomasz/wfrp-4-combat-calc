import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const ModalStateContext = createContext();
const ModalDispatchContext = createContext();

const INITIAL_STATE = {
  currentCharacter: {
    name: "",
    combat: {
      attack: { value: "", skillName: "" },
      defense: { value: "", skillName: "" },
    },
    stats: {
      health: "",
      toughnessBonus: "",
      strengthBonus: "",
    },
    weapon: {
      damage: "",
      qualities: "",
    },
    armour: {
      head: "",
      body: "",
      leftArm: "",
      rightArm: "",
      leftLeg: "",
      rightLeg: "",
    },
  },
  modal: { open: false, isPlayer: false },
};

function modalReducer(state, action) {
  switch (action.type) {
    case "set-current-character": {
      return { ...state, currentCharacter: action.character };
    }

    case "reset-to-initial": {
      return { state: INITIAL_STATE };
    }

    case "toggle-open": {
      return { ...state, modal: action.modal };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ModalProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, INITIAL_STATE);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.object,
};

function useModalState() {
  const context = useContext(ModalStateContext);

  if (context === undefined) {
    throw new Error("useModalState must be used within a ModalProvider");
  }

  return context;
}

function useModalDispatch() {
  const context = useContext(ModalDispatchContext);

  if (context === undefined) {
    throw new Error("useModalDispatch must be used within a ModalProvider");
  }

  return context;
}

export { ModalProvider, useModalState, useModalDispatch };
