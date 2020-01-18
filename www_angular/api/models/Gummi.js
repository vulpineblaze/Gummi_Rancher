
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Gummi
let Gummi = new Schema({
  GummiName: {
    type: String
  },
  GummiOwner: {
    type: String
  },
  GummiStatus: {
    type: String
  },
  GummiPrimary: {
    type: String
  },
  GummiSecondary: {
    type: String
  },
  GummiLastFed: {
    type: String
  },
  GummiStrength: {
    type: String
  },
  GummiDexterity: {
    type: String
  },
  GummiStamina: {
    type: String
  },
  GummiIntelligence: {
    type: String
  },
  GummiCharisma: {
    type: String
  },
  GummiWisdom: {
    type: String
  },
  GummiBrawl: {
    type: String
  },
  GummiMelee: {
    type: String
  },
  GummiRanged: {
    type: String
  },
  GummiThaumatism: {
    type: String
  },
  GummiAthletics: {
    type: String
  },
  GummiExpression: {
    type: String
  },
  GummiIntimidation: {
    type: String
  },
  GummiLuck: {
    type: String
  },
  GummiObservation: {
    type: String
  },
  GummiHunger : {
    type: String
  },
  GummiLifespan : {
    type: String
  },
  GummiMakeAWish: {
    type: String
  }

},{
    collection: 'Gummi'
});

module.exports = mongoose.model('Gummi', Gummi);