import React from "react";
import PropTypes from "prop-types";

export function Checkbox({ field, type, checked, label }) {
  return (
    <label>
      <input {...field} type={type} checked={checked} />
      {label}
    </label>
  );
}

Checkbox.propTypes = {
  field: PropTypes.object,
  type: PropTypes.string,
  checked: PropTypes.bool,
  label: PropTypes.string,
};
