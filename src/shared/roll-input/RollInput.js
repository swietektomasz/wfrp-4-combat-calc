import React from "react";
import PropTypes from "prop-types";
import { useField } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./roll-input.css";

export function RollInput({ field, label }) {
  const [, , helpers] = useField(field);
  const { setValue } = helpers;

  const Roll = () => setValue(Math.floor(Math.random() * 100) + 1);

  return (
    <label className="roll-input-label">
      {label}
      <div className="roll-input-wrapper">
        <input className="roll-input-input" {...field} />
        <button className="roll-button" type="button" onClick={Roll}>
          <FontAwesomeIcon icon="dice" />
        </button>
      </div>
    </label>
  );
}

RollInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  field: PropTypes.object,
};
