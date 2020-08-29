import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";

import { TextInput, NumericInput } from "shared";
import { useCreateCharacter } from "src/graphql";

import { SCHEMA, INITIAL_VALUES } from "./CreateCharacterFormSchema";

import "./create-character-modal.css";

export function CreateCharacterModal({ isPlayer }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { createCharacterMutation, loading } = useCreateCharacter();

  return (
    <div>
      <button
        className="open-modal-button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        +
      </button>

      <div
        id="myModal"
        className={modalOpen ? "modal-visible" : "modal-hidden"}
      >
        <div className="modal-content">
          <Formik
            initialValues={INITIAL_VALUES}
            onSubmit={async (values) => {
              await createCharacterMutation({ ...values, isPlayer });
              setModalOpen(false);
            }}
            validationSchema={SCHEMA}
          >
            <Form className="create-character-form-wrapper">
              <div className="create-character-full-pane">
                <Field
                  component={TextInput}
                  label="Character name"
                  name="name"
                />
              </div>
              <div className="create-character-half-pane">
                <h3 className="create-character-pane-title">
                  Combat statistics
                </h3>
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
                <h3 className="create-character-pane-title">
                  Character statistics
                </h3>
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
              <button
                className="create-character-button"
                disabled={loading}
                type="submit"
              >
                Create
              </button>
            </Form>
          </Formik>
          <span onClick={() => setModalOpen(false)} className="close">
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}

CreateCharacterModal.propTypes = {
  isPlayer: PropTypes.bool,
};
