import React from "react";
import PropTypes from "prop-types";

import "./numeric-input.css";

export function NumericInput({ label, field }) {
  return (
    <label className="numeric-input-label">
      {label}
      <input className="numeric-input" {...field} />
    </label>
  );
}

NumericInput.propTypes = {
  label: PropTypes.string,
  field: PropTypes.object,
};
