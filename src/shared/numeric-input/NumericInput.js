import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { getIn } from "formik";

import "./numeric-input.css";

export function NumericInput({ label, field, form: { touched, errors } }) {
  const inputClassNames = ClassNames({
    "numeric-input": true,
    error: getIn(errors, field.name) && getIn(touched, field.name),
  });

  return (
    <label className="numeric-input-label">
      {label}
      <input className={inputClassNames} {...field} type="number" />
      {touched[field.name] && errors[field.name] && (
        <p className="numeric-input-helper-text">This field is required</p>
      )}
    </label>
  );
}

NumericInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }),
  label: PropTypes.string,
};
