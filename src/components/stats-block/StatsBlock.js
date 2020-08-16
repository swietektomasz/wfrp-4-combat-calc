import React from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

import { Input } from "shared";
import { RollsPanel } from "src/components";

import "./stats-block.css";
import { CharacterProfile } from "../character-profile/CharacterProfile";

const INITIAL_VALUES = {
  attackRoll: 10,
  defenseRoll: 10,
  playerDefense: 10,
  playerHealth: 10,
  playerAttack: 10,
  weaponDamage: 1,
  toughnessBonus: 1,
  armourHead: 1,
  armourBody: 1,
  armourLeftArm: 1,
  armourRightArm: 1,
  armourLeftLeg: 1,
  armourRightLeg: 1,
  strengthBonus: 1,
};

export function StatsBlock({ enemy }) {
  return (
    <Formik initialValues={INITIAL_VALUES} enableReinitialize>
      <Form className="stats-block-pane">
        <h1>Player name</h1>
        <RollsPanel />
        <div>
          <Field
            type="number"
            name="weaponDamage"
            label="Player weapon stat"
            component={Input}
          />
        </div>
        <CharacterProfile enemy={enemy} />
      </Form>
    </Formik>
  );
}

StatsBlock.propTypes = {
  enemy: PropTypes.bool,
};
