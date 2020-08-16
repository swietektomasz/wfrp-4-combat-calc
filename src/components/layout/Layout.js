import React from "react";

import { StatsBlock } from "src/components";

import "./layout.css";

export function Layout() {
  return (
    <div className="layout-wrapper">
      <div className="layout-main-view">
        <div className="layout-player-list">Player list</div>
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
  );
}
