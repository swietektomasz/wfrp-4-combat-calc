import React from "react";
import { Field } from "formik";

import { RollInput } from "shared";

import "./rolls-panel.css";

export function RollsPanel() {
  return (
    <div className="rolls-panel-wrapper">
      <Field
        type="number"
        name="lastRoll"
        label="Attack roll"
        component={RollInput}
      />
    </div>
  );
}
