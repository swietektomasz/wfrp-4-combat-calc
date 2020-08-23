import React from "react";
import PropTypes from "prop-types";

import "./text-input.css";

export function TextInput({ label, field }) {
  return (
    <label className="text-input-label">
      {label}
      <input className="text-input" {...field} />
    </label>
  );
}

TextInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.object,
};
