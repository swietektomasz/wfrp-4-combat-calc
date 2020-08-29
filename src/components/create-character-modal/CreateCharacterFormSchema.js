import { object, string, number } from "yup";

export const SCHEMA = object().shape({
  name: string().required(),
  combat: object({
    attack: object({ value: number(), skillName: string() }),
    defense: object({ value: number(), skillName: string() }),
  }),
  stats: object().shape({
    health: number(),
    toughnessBonus: number(),
    strengthBonus: number(),
  }),
  weapon: object().shape({
    damage: number(),
    qualities: string(),
  }),
  armour: object().shape({
    head: number(),
    body: number(),
    leftArm: number(),
    rightArm: number(),
    leftLeg: number(),
    rightLeg: number(),
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
