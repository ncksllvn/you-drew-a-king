'use strict';

var Rule = require('../models').Rule;

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return Rule.create({
      
      title: 'Funeral',
      
      description: 'After any player finishes a drink, they must hold a small service in its memory. Any player who fails to pay their respects must drink half of their new beverage.',
      
      submitter: 'Phil',
      
      image: 'funeral.png'
      
    })
    
  },

  down: function (queryInterface, Sequelize) {
    
    return Rule.destroy({
      where: {
        title: 'Funeral'
      }
    })
    
  }
};
