import React from "react";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

import { Input } from "shared";
import { CharacterProfile, RollsPanel } from "src/components";
import { usePlayerState } from "src/context";

import "./stats-block.css";
import { useGetCharacters } from "src/graphql";

export function StatsBlock({ enemy }) {
  const { playerById, enemyById } = usePlayerState();
  const { characters } = useGetCharacters();
  console.log(characters);

  return (
    <Formik initialValues={enemy ? enemyById : playerById} enableReinitialize>
      <Form className="stats-block-pane">
        <h1>{enemy ? enemyById.name : playerById.name}</h1>
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
