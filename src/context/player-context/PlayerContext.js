import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const PlayerStateContext = createContext();
const PlayerDispatchContext = createContext();

const INITIAL_CHARACTER = {
  lastRoll: 100,
  combat: {
    attack: { skillName: "melee basic", value: 33 },
    defense: { skillName: "dodge", value: 40 },
  },
  stats: { health: 10, toughnessBonus: 1, strengthBonus: 1 },
  weapon: { damage: 1, qualities: "long, sharp, pointy" },
  armour: {
    head: 1,
    body: 1,
    leftArm: 1,
    rightArm: 1,
    leftLeg: 1,
    rightLeg: 1,
  },
};

function playerReducer(state, action) {
  switch (action.type) {
    case "get-combat-stats": {
      return state.combat;
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlayerProvider({ children }) {
  const [state, dispatch] = useReducer(playerReducer, INITIAL_CHARACTER);

  return (
    <PlayerStateContext.Provider value={state}>
      <PlayerDispatchContext.Provider value={dispatch}>
        {children}
      </PlayerDispatchContext.Provider>
    </PlayerStateContext.Provider>
  );
}

PlayerProvider.propTypes = {
  children: PropTypes.object,
};

function usePlayerState() {
  const context = useContext(PlayerStateContext);

  if (context === undefined) {
    throw new Error("usePlayerState must be used within a PlayerProvider");
  }

  return context;
}

function usePlayerDispatch() {
  const context = useContext(PlayerDispatchContext);

  if (context === undefined) {
    throw new Error("usePlayerDispatch must be used within a PlayerProvider");
  }

  return context;
}

export { PlayerProvider, usePlayerState, usePlayerDispatch };
