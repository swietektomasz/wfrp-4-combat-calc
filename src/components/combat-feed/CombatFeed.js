import React from "react";

import "./combat-feed.css";

const FEED_MESSAGES = [
  {
    id: "qwerty",
    text:
      "Jim attacks and rolls 100, hitting the enemy in the head, critical success!",
    roll: 100,
    locationRoll: 1,
    date: "13:30 08.08.2020",
  },
  {
    id: "asdfg",
    text: "Evil Jim defends and rolls 5, the defense is unsuccessful.",
    roll: 5,
    date: "15:33 08.08.2020",
  },
  {
    id: "zxcvb",
    text: "Evil Jim attacks and rolls another 5, the fool.",
    roll: 5,
    date: "14:16 08.08.2020",
  },
];

export function CombatFeed() {
  return (
    <div className="combat-feed-wrapper">
      {FEED_MESSAGES.map((message) => (
        <div className="combat-feed-message" key={message.id}>
          <div className="combat-feed-message-header">
            Type: attack, defense, etc...
            <span className="combat-feed-message-date">{message.date}</span>
          </div>
          <div className="combat-feed-message-content">{message.text}</div>
          <div className="combat-feed-message-footer">{message.roll}</div>
        </div>
      ))}
    </div>
  );
}
