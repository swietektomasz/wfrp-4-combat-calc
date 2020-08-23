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
        className="create-character-button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        +
      </button>

      <div
        id="myModal"
        className={modalOpen ? "modal-visible" : "modal-hidden"}
      >
        <div className="modal-content">
          <span onClick={() => setModalOpen(false)} className="close">
            &times;
          </span>
          <Formik
            initialValues={{ name: "" }}
            onSubmit={({ name }) => createCharacterMutation({ name, isPlayer })}
          >
            <Form className="stats-block-pane">
              <Field
                type="text"
                name="name"
                label="Character name"
                component={TextInput}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

CreateCharacterModal.propTypes = {
  isPlayer: PropTypes.bool,
};
