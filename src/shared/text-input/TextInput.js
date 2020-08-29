import React from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import { getIn } from "formik";

import "./text-input.css";

export function TextInput({ label, field, form: { touched, errors } }) {
  const inputClassNames = ClassNames({
    "text-input": true,
    error: getIn(errors, field.name) && getIn(touched, field.name),
  });

  return (
    <label className={"text-input-label"}>
      {label}
      <input className={inputClassNames} {...field} type="text" />
      {touched[field.name] && errors[field.name] && (
        <p className="text-input-helper-text">This field is required</p>
      )}
    </label>
  );
}

TextInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.shape({
    touched: PropTypes.object,
    errors: PropTypes.object,
  }),
  label: PropTypes.string,
};
