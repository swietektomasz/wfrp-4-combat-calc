import React, { useState } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import { Input } from "../input/Input";

export function RollInput({ name, label }) {
  const [value, setValue] = useState("");
  const Roll = () => setValue(Math.floor(Math.random() * 100) + 1);

  return (
    <div>
      <Field type="number" name={name} value={value} onChange={() => {}}>
        {({ field }) => <Input field={field} label={label} />}
      </Field>
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
