import React from "react";
import { Field } from "formik";

import { RollInput, Input } from "shared";

import "./rolls-panel.css";

export function RollsPanel() {
  return (
    <div className="rolls-panel-wrapper">
      <Field
        type="number"
        name="attackRoll"
        label="Attack roll"
        component={RollInput}
      />
      <Field
        type="number"
        name="defenseRoll"
        label="Defense roll"
        component={RollInput}
      />
      <Field
        type="number"
        name="playerAttack"
        label="Player attack stat"
        component={Input}
      />
      <Field
        type="number"
        name="playerDefense"
        label="Player defense stat"
        component={Input}
      />
    </div>
  );
}
