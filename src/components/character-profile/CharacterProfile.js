import React from "react";
import { Field } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import { Input } from "shared";

import "./character-profile.css";

export function CharacterProfile({ enemy }) {
  return (
    <div
      className={
        enemy
          ? "character-profile-wrapper-right"
          : "character-profile-wrapper-left"
      }
    >
      <div className="character-profile-column">
        <FontAwesomeIcon
          icon="shield-alt"
          className="character-profile-shield-icon"
          title="Armour values"
        />
        <Field component={Input} type="number" name="armourHead" label="H" />
        <Field component={Input} type="number" name="armourBody" label="B" />
        <Field
          component={Input}
          type="number"
          name="armourLeftArm"
          label="LA"
        />
        <Field
          component={Input}
          type="number"
          name="armourRightArm"
          label="RA"
        />
        <Field
          component={Input}
          type="number"
          name="armourLeftLeg"
          label="LL"
        />
        <Field
          component={Input}
          type="number"
          name="armourRightLeg"
          label="RL"
        />
      </div>

      <div className="character-profile-bottom">
        <Field
          type="number"
          name="playerHealth"
          label="Wounds"
          component={Input}
        />
      </div>
      <div className="character-profile-column">
        <Field
          component={Input}
          label="TB"
          name="toughnessBonus"
          type="number"
        />
        <Field
          component={Input}
          label="SB"
          name="strengthBonus"
          type="number"
        />
      </div>
    </div>
  );
}

CharacterProfile.propTypes = {
  enemy: PropTypes.bool,
};
