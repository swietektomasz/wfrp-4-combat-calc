import React from "react";
import { Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { Input } from "shared";

import "./character-profile.css";

export function CharacterProfile({ player }) {
  return (
    <div
      className={
        player
          ? "character-profile-wrapper-left"
          : "character-profile-wrapper-right"
      }
    >
      <div className="character-profile-column">
        <FontAwesomeIcon
          icon="shield-alt"
          className="character-profile-shield-icon"
          title="Armour values"
        />
        <Field component={Input} type="number" name="armour.head" label="H" />
        <Field component={Input} type="number" name="armour.body" label="B" />
        <Field
          component={Input}
          type="number"
          name="armour.leftArm"
          label="LA"
        />
        <Field
          component={Input}
          type="number"
          name="armour.rightArm"
          label="RA"
        />
        <Field
          component={Input}
          type="number"
          name="armour.leftLeg"
          label="LL"
        />
        <Field
          component={Input}
          type="number"
          name="armour.rightLeg"
          label="RL"
        />
      </div>

      <div className="character-profile-bottom">
        <Field
          type="number"
          name="stats.health"
          label="Wounds"
          component={Input}
        />
      </div>
      <div className="character-profile-column">
        <Field
          component={Input}
          label="TB"
          name="stats.toughnessBonus"
          type="number"
        />
        <Field
          component={Input}
          label="SB"
          name="stats.strengthBonus"
          type="number"
        />
      </div>
    </div>
  );
}

CharacterProfile.propTypes = {
  player: PropTypes.bool,
};
