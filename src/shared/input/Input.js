import React from "react";
import PropTypes from "prop-types";

import "./input.css";

export function Input({ label, field }) {
  return (
    <label className="label">
      {label}
      <input className="input" {...field} />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  field: PropTypes.object,
};
