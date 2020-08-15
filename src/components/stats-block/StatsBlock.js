import React from "react";
import { Formik, Form, Field } from "formik";

import { RollInput, Input } from "shared";

import "./stats-block.css";

const INITIAL_VALUES = {
  attackRoll: 10,
  defenseRoll: 10,
  playerDefense: 10,
  playerHealth: 10,
  weaponDamage: 1,
  toughnessBonus: 1,
  armourHead: 1,
  armourBody: 1,
  armourLeftArm: 1,
  armourRightArm: 1,
  armourLeftLeg: 1,
  armourRightLeg: 1,
};

export function StatsBlock() {
  return (
    <Formik initialValues={INITIAL_VALUES} enableReinitialize>
      <Form>
        <div className="pane">
          <h1>Player name</h1>
          <div>
            <RollInput label="Attack roll" name="attackRoll" />
            <Field
              type="number"
              name="player-attack"
              label="Player attack stat"
              component={Input}
            />
            <RollInput label="Defense roll" name="defenseRoll" />
            <Field
              type="number"
              name="playerDefense"
              label="Player defense stat"
              component={Input}
            />
          </div>
          <div>
            <Field
              type="number"
              name="weaponDamage"
              label="Player weapon stat"
              component={Input}
            />
          </div>
          <Field
            type="number"
            name="playerHealth"
            label="Player health"
            component={Input}
          />
          <Field
            component={Input}
            label="Player toughness bonus"
            name="toughnessBonus"
            type="number"
          />
          <Field
            component={Input}
            type="number"
            name="armourHead"
            label="Player head armour points"
          />
          <Field
            component={Input}
            type="number"
            name="armourBody"
            label="Player body armour points"
          />
          <Field
            component={Input}
            type="number"
            name="armourLeftArm"
            label="Player left arm armour points"
          />
          <Field
            component={Input}
            type="number"
            name="armourRightArm"
            label="Player right arm armour points"
          />
          <Field
            component={Input}
            type="number"
            name="armourLeftLeg"
            label="Player left leg armour points"
          />
          <Field
            component={Input}
            type="number"
            name="armourRightLeg"
            label="Player right leg armour points"
          />
        </div>
      </Form>
    </Formik>
  );
}
