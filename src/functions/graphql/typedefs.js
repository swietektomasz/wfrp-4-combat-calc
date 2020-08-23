const { gql } = require("apollo-server-lambda");

module.exports = gql`
  type CombatSkill {
    skillName: String
    value: Int
  }

  type CombatStats {
    attack: CombatSkill
    defense: CombatSkill
  }

  type CharacterStats {
    health: Int
    toughnessBonus: Int
    strengthBonus: Int
  }

  type Weapon {
    damage: Int
    qualities: String
  }

  type Armour {
    head: Int
    body: Int
    leftArm: Int
    rightArm: Int
    leftLeg: Int
    rightLeg: Int
  }

  type Character {
    _id: ID!
    isPlayer: Boolean
    name: String
    lastRoll: Int
    combat: CombatStats
    stats: CharacterStats
    weapon: Weapon
    armour: Armour
  }

  input CreateCharacterInput {
    name: String!
    isPlayer: Boolean!
  }

  type Query {
    allCharacters: [Character]
  }

  type Mutation {
    createCharacter(input: CreateCharacterInput!): Character
  }
`;
