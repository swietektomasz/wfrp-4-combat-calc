import { object, string, number } from "yup";

export const SCHEMA = object().shape({
  name: string().required(),
  combat: object({
    attack: object({
      value: number().required(),
      skillName: string().required(),
    }),
    defense: object({
      value: number().required(),
      skillName: string().required(),
    }),
  }),
  stats: object().shape({
    health: number().required(),
    toughnessBonus: number().required(),
    strengthBonus: number().required(),
  }),
  weapon: object().shape({
    damage: number().required(),
    qualities: string().required(),
  }),
  armour: object().shape({
    head: number().required(),
    body: number().required(),
    leftArm: number().required(),
    rightArm: number().required(),
    leftLeg: number().required(),
    rightLeg: number().required(),
  }),
});

export const INITIAL_VALUES = {
  name: "",
  combat: {
    attack: { value: "", skillName: "" },
    defense: { value: "", skillName: "" },
  },
  stats: {
    health: "",
    toughnessBonus: "",
    strengthBonus: "",
  },
  weapon: {
    damage: "",
    qualities: "",
  },
  armour: {
    head: "",
    body: "",
    leftArm: "",
    rightArm: "",
    leftLeg: "",
    rightLeg: "",
  },
};
