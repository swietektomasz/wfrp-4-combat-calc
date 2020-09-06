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

  input CombatSkillInput {
    skillName: String
    value: Int
  }

  input CombatStatsInput {
    attack: CombatSkillInput
    defense: CombatSkillInput
  }

  input CharacterStatsInput {
    health: Int
    toughnessBonus: Int
    strengthBonus: Int
  }

  input WeaponInput {
    damage: Int
    qualities: String
  }

  input ArmourInput {
    head: Int
    body: Int
    leftArm: Int
    rightArm: Int
    leftLeg: Int
    rightLeg: Int
  }

  input CreateCharacterInput {
    character: CharacterInput
  }

  input CharacterInput {
    _id: String
    isPlayer: Boolean
    name: String
    lastRoll: Int
    combat: CombatStatsInput
    stats: CharacterStatsInput
    weapon: WeaponInput
    armour: ArmourInput
  }

  input DeleteCharacterInput {
    _id: String!
  }

  input UpdateCharacterInput {
    character: CharacterInput
  }

  type Query {
    allCharacters: [Character]
  }

  type UpdateResolution {
    acknowledged: Boolean
    matchedCount: Int
    modifiedCount: Int
  }

  type Mutation {
    createCharacter(input: CreateCharacterInput!): Character
    deleteCharacter(input: DeleteCharacterInput!): Character
    updateCharacter(input: UpdateCharacterInput): UpdateResolution
  }
`;
