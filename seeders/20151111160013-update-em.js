'use strict';

var Rule = require('../models').Rule;

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Rule.update(
      { description: "<i>Y'all gon' sit down, have a good time this reunion, and drink some wine like Communion.</i> While a player is speaking, they must rhyme with themselves at least once. Any player who fails to rhyme, takes a drink every time." },
      { where: { title: 'The MC' }}
    )
  },

  down: function (queryInterface, Sequelize) {
    return Rule.update(
      { description: `<i>I'm a menace; a dentist; an oral hygienist</i>. While a player is speaking, they must rhyme with themselves at least once. Any player who fails to rhyme, takes a drink every time.` },
      { where: { title: 'The MC' }}
    )
  }
};
