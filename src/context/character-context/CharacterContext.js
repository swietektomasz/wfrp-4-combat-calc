import React, { createContext, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";

import { useGetCharacters } from "src/graphql";

const CharacterStateContext = createContext();
const CharacterDispatchContext = createContext();

const dummyCharacter = {
  _id: "",
  name: "",
  isPlayer: null,
  lastRoll: "",
  combat: {
    attack: {
      skillName: "",
      value: "",
    },
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
};

const buildState = (characters) => {
  return {
    allCharacters: characters,
    playerList: characters.filter((character) => character.isPlayer),
    playerById:
      characters.filter((character) => character.isPlayer)[0] ?? dummyCharacter,
    enemyList: characters.filter((character) => !character.isPlayer),
    enemyById:
      characters.filter((character) => !character.isPlayer)[0] ??
      dummyCharacter,
  };
};

function characterReducer(state, action) {
  switch (action.type) {
    case "update-state": {
      return buildState(action.characters);
    }

    case "get-player-by-id": {
      return {
        ...state,
        playerById: state.playerList.find((player) => player._id === action.id),
      };
    }

    case "get-enemy-by-id": {
      return {
        ...state,
        enemyById: state.enemyList.find((enemy) => enemy._id === action.id),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CharacterProvider({ children }) {
  const { characters } = useGetCharacters();
  const [state, dispatch] = useReducer(
    characterReducer,
    buildState(characters)
  );

  useEffect(() => {
    if (characters.length) {
      dispatch({ type: "update-state", characters });
    }
  }, [characters]);

  return (
    <CharacterStateContext.Provider value={state}>
      <CharacterDispatchContext.Provider value={dispatch}>
        {children}
      </CharacterDispatchContext.Provider>
    </CharacterStateContext.Provider>
  );
}

CharacterProvider.propTypes = {
  children: PropTypes.object,
};

function useCharacterState() {
  const context = useContext(CharacterStateContext);

  if (context === undefined) {
    throw new Error(
      "useCharacterState must be used within a CharacterProvider"
    );
  }

  return context;
}

function useCharacterDispatch() {
  const context = useContext(CharacterDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useCharacterDispatch must be used within a CharacterProvider"
    );
  }

  return context;
}

export { CharacterProvider, useCharacterState, useCharacterDispatch };
