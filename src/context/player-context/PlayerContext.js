import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const PlayerStateContext = createContext();
const PlayerDispatchContext = createContext();

const INITIAL_STATE = {
  playerList: [
    {
      id: "1",
      name: "Jim",
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
    },
    {
      id: "3",
      name: "Jimothy",
      lastRoll: 100,
      combat: {
        attack: { skillName: "melee basic", value: 33 },
        defense: { skillName: "dodge", value: 40 },
      },
      stats: { health: 13, toughnessBonus: 3, strengthBonus: 3 },
      weapon: { damage: 1, qualities: "long, sharp, pointy" },
      armour: {
        head: 1,
        body: 2,
        leftArm: 1,
        rightArm: 1,
        leftLeg: 1,
        rightLeg: 1,
      },
    },
  ],
  playerById: {
    id: "1",
    name: "Jim",
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
  },
  enemyList: [
    {
      id: "2",
      name: "Evil Jim",
      lastRoll: 1,
      combat: {
        attack: { skillName: "melee basic", value: 33 },
        defense: { skillName: "dodge", value: 40 },
      },
      stats: { health: 11, toughnessBonus: 2, strengthBonus: 2 },
      weapon: { damage: 1, qualities: "long, sharp, pointy" },
      armour: {
        head: 1,
        body: 1,
        leftArm: 1,
        rightArm: 1,
        leftLeg: 1,
        rightLeg: 1,
      },
    },
  ],
  enemyById: {
    id: "2",
    name: "Evil Jim",
    lastRoll: 1,
    combat: {
      attack: { skillName: "melee fencing", value: 36 },
      defense: { skillName: "melee fencing", value: 41 },
    },
    stats: { health: 11, toughnessBonus: 2, strengthBonus: 2 },
    weapon: { damage: 1, qualities: "long, sharp, pointy" },
    armour: {
      head: 1,
      body: 1,
      leftArm: 1,
      rightArm: 1,
      leftLeg: 1,
      rightLeg: 1,
    },
  },
};

function playerReducer(state, action) {
  switch (action.type) {
    case "get-player-by-id": {
      return {
        ...state,
        playerById: state.playerList.find((player) => player.id === action.id),
      };
    }

    case "get-enemy-by-id": {
      return {
        ...state,
        enemyById: state.playerList.find((enemy) => enemy.id === action.id),
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function PlayerProvider({ children }) {
  const [state, dispatch] = useReducer(playerReducer, INITIAL_STATE);

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
