import React from "react";

import { StatsBlock, CharacterList, CombatFeed } from "src/components";
import { useCharacterState } from "src/context";

import "./layout.css";

export function Layout() {
  const { playerList, enemyList, playerById, enemyById } = useCharacterState();

  return (
    <div className="layout-wrapper">
      <div className="layout-main-view">
        <div className="layout-player-list">
          <CharacterList characters={playerList} />
        </div>
        <div className="layout-player-stats">
          <StatsBlock character={playerById} />
        </div>
        <div className="layout-action-pane">
          <CombatFeed />
        </div>
        <div className="layout-enemy-stats">
          <StatsBlock character={enemyById} />
        </div>
        <div className="layout-enemy-list">
          <CharacterList characters={enemyList} />
        </div>
      </div>
      <div className="layout-turn-timer">Turn timer</div>
    </div>
  );
}
