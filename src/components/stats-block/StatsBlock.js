import React from "react";
import { Formik, Form, Field } from "formik";

import { RollInput, Input } from "shared";

export function StatsBlock() {
  return (
    <div className="wrapper">
      <Formik>
        <Form className="wrapper">
          <div className="pane">
            <h1>Player</h1>
            <RollInput label="Player roll" name="player-roll" />
            <Field type="number" name="player-attack">
              {({ field }) => (
                <Input field={field} label="Player attack stat" />
              )}
            </Field>
            <Field type="number" name="player-health">
              {({ field }) => <Input field={field} label="Player health" />}
            </Field>
          </div>
          <div className="pane">
            <h1>Enemy</h1>
            <RollInput label="Enemy roll" name="enemy-roll" />
            <Field type="number" name="enemy-attack">
              {({ field }) => <Input field={field} label="Enemy attack stat" />}
            </Field>
            <Field type="number" name="enemy-health">
              {({ field }) => <Input field={field} label="Enemy health" />}
            </Field>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
