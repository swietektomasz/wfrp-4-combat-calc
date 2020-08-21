import React from "react";

import { StatsBlock, PlayerList } from "src/components";

import "./layout.css";
import { PlayerProvider } from "src/context";

export function Layout() {
  return (
    <PlayerProvider>
      <div className="layout-wrapper">
        <div className="layout-main-view">
          <div className="layout-player-list">
            <PlayerList />
          </div>
          <div className="layout-player-stats">
            <StatsBlock enemy={false} />
          </div>
          <div className="layout-action-pane">Attack/defend buttons</div>
          <div className="layout-enemy-stats">
            <StatsBlock enemy={true} />
          </div>
          <div className="layout-enemy-list">Enemy list</div>
        </div>
        <div className="layout-turn-timer">Turn timer</div>
      </div>
    </PlayerProvider>
  );
}
