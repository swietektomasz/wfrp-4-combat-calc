import React from "react";

import { StatsBlock } from "src/components";

import "./layout.css";

export function Layout() {
  return (
    <div className="wrapper">
      <div className="main-view">
        <div className="player-list">Player list</div>
        <div className="player-stats">
          <StatsBlock />
        </div>
        <div className="action-pane">Attack/defend buttons</div>
        <div className="enemy-stats">Enemy stats</div>
        <div className="enemy-list">Enemy list</div>
      </div>
      <div className="turn-timer">Turn timer</div>
    </div>
  );
}
