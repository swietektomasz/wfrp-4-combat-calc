import React from "react";
import PropTypes from "prop-types";
import { Field, useField } from "formik";

import { Input } from "../input/Input";

export function RollInput({ name, label }) {
  const [, , helpers] = useField(name);
  const { setValue } = helpers;

  const Roll = () => setValue(Math.floor(Math.random() * 100) + 1);

  return (
    <div>
      <Field type="number" name={name} component={Input} label={label} />
      <button type="button" onClick={Roll}>
        Roll
      </button>
    </div>
  );
}

RollInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
};
