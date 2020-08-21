import React from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

import { Input } from "shared";
import { RollsPanel } from "src/components";

import "./stats-block.css";
import { CharacterProfile } from "../character-profile/CharacterProfile";
import { usePlayerState } from "src/context/";

export function StatsBlock({ enemy }) {
  const state = usePlayerState();

  console.log(state);
  return (
    <Formik initialValues={state} enableReinitialize>
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
