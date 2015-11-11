'use strict';

var Rule = require('../models').Rule;

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return Rule.update(
      { title: 'Forbidden Fangs' },
      { where: { title: 'The Smirks' }}
    )
    
  },

  down: function (queryInterface, Sequelize) {
    return Rule.update(
      { title: 'The Smirks' },
      { where: { title: 'Forbidden Fangs' }}
    )
  }
};
