import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";

import { TextInput, NumericInput } from "shared";

import { SCHEMA, INITIAL_VALUES } from "./CreateCharacterFormSchema";

import "./character-modal-form.css";

export function CharacterModalForm({ initialValues, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues ?? INITIAL_VALUES}
      onSubmit={onSubmit}
      validationSchema={SCHEMA}
    >
      <Form className="create-character-form-wrapper">
        <div className="create-character-full-pane">
          <Field component={TextInput} label="Character name" name="name" />
        </div>
        <div className="create-character-half-pane">
          <h3 className="create-character-pane-title">Combat statistics</h3>
          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Attack stat value"
              name="combat.attack.value"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={TextInput}
              label="Attack skill name"
              name="combat.attack.skillName"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Defense stat value"
              name="combat.defense.value"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={TextInput}
              label="Defense skill name"
              name="combat.defense.skillName"
            />
          </div>
        </div>
        <div className="create-character-half-pane">
          <h3 className="create-character-pane-title">Character statistics</h3>
          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Wounds"
              name="stats.health"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Toughness Bonus"
              name="stats.toughnessBonus"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Strength Bonus"
              name="stats.strengthBonus"
            />
          </div>
        </div>
        <div className="create-character-half-pane">
          <h3 className="create-character-pane-title">Weapon</h3>
          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Weapon Damage"
              name="weapon.damage"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={TextInput}
              label="Weapon Qualities"
              name="weapon.qualities"
            />
          </div>
        </div>
        <div className="create-character-half-pane">
          <h3 className="create-character-pane-title">Armour values</h3>
          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Head Armour Points"
              name="armour.head"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Body Armour Points"
              name="armour.body"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Left Arm Armour Points"
              name="armour.leftArm"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Right Arm Armour Points"
              name="armour.rightArm"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Left Leg Armour Points"
              name="armour.leftLeg"
            />
          </div>

          <div className="create-character-input-wrapper">
            <Field
              component={NumericInput}
              label="Right Leg Armour Points"
              name="armour.rightLeg"
            />
          </div>
        </div>
        <button className="create-character-button" type="submit">
          Create
        </button>
      </Form>
    </Formik>
  );
}

CharacterModalForm.propTypes = {
  loading: PropTypes.bool,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func,
};
