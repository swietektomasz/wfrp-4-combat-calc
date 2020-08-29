import React from "react";
import { Field } from "formik";

import { RollInput } from "shared";

import "./rolls-panel.css";

export function RollsPanel() {
  return (
    <div className="rolls-panel-wrapper">
      <div className="rolls-panel-input-wrapper">
        <Field
          type="number"
          name="lastRoll"
          label="Attack roll"
          component={RollInput}
        />
      </div>
      <div className="rolls-panel-input-wrapper">
        <Field
          type="number"
          name="locationRoll"
          label="Hit location roll"
          component={RollInput}
        />
      </div>
      <div className="rolls-panel-input-wrapper">
        <Field
          type="number"
          name="critRoll"
          label="Critical hit roll"
          component={RollInput}
        />
      </div>
      <div className="rolls-panel-input-wrapper">
        <Field
          type="number"
          name="critLocationRoll"
          label="Critical hit location roll"
          component={RollInput}
        />
      </div>
    </div>
  );
}
