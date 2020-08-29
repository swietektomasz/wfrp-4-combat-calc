import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";

import { TextInput } from "shared";
import { useCreateCharacter } from "src/graphql";

import "./create-character-modal.css";

export function CreateCharacterModal({ isPlayer }) {
  const [modalOpen, setModalOpen] = useState(false);
  const { createCharacterMutation } = useCreateCharacter();
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
            initialValues={{ name: "" }}
            onSubmit={({ name }) => createCharacterMutation({ name, isPlayer })}
          >
            <Form className="create-character-form-wrapper">
              <div className="create-character-full-pane">
                <Field
                  type="text"
                  name="name"
                  label="Character name"
                  component={TextInput}
                />
              </div>
              <div className="create-character-half-pane">
                <h3 className="create-character-pane-title">
                  Combat statistics
                </h3>
                <Field
                  type="text"
                  name="combat.attack.value"
                  label="Attack stat value"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="combat.attack.skillName"
                  label="Attack skill name"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="combat.defense.value"
                  label="Defense stat value"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="combat.defense.skillName"
                  label="Defense skill name"
                  component={TextInput}
                />
              </div>
              <div className="create-character-half-pane">
                <h3 className="create-character-pane-title">
                  Character statistics
                </h3>
                <Field
                  type="text"
                  name="stats.health"
                  label="Wounds"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="stats.toughnessBonus"
                  label="Toughness Bonus"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="stats.strengthBonus"
                  label="Strength Bonus"
                  component={TextInput}
                />
              </div>
              <div className="create-character-half-pane">
                <h3 className="create-character-pane-title">Weapon</h3>
                <Field
                  type="text"
                  name="weapon.damage"
                  label="Weapon Damage"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="weapon.qualities"
                  label="Weapon Qualities"
                  component={TextInput}
                />
              </div>
              <div className="create-character-half-pane">
                <h3 className="create-character-pane-title">Armour values</h3>
                <Field
                  type="text"
                  name="armour.head"
                  label="Head Armour Points"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="armour.body"
                  label="Body Armour Points"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="armour.leftArm"
                  label="Left Arm Armour Points"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="armour.rightArm"
                  label="Right Arm Armour Points"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="armour.leftLeg"
                  label="Left Leg Armour Points"
                  component={TextInput}
                />
                <Field
                  type="text"
                  name="armour.rightLeg"
                  label="Right Leg Armour Points"
                  component={TextInput}
                />
              </div>
              <button className="create-character-button" type="submit">
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
