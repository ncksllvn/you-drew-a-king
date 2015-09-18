'use strict';

var Rule = require('../models').Rule

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Rule.bulkCreate([
      {
        title: 'Little Man',
        description: 'Blah blah blah',
        image: 'http://placeholde.it/200x200'
      }
    ])
    
  },

  down: function (queryInterface, Sequelize) {
    return Rule.destroy({ truncate: true })
  }
};
