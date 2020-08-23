import React from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

import { NumericInput } from "shared";
import { CharacterProfile, RollsPanel } from "src/components";

import "./stats-block.css";

export function StatsBlock({ character }) {
  return (
    <Formik initialValues={character} enableReinitialize>
      <Form className="stats-block-pane">
        <h1>{character.name}</h1>
        <RollsPanel />
        <div>
          <Field
            type="number"
            name="weaponDamage"
            label="Player weapon stat"
            component={NumericInput}
          />
        </div>
        <CharacterProfile player={character.isPlayer} />
      </Form>
    </Formik>
  );
}

StatsBlock.propTypes = {
  character: PropTypes.object,
};
