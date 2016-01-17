'use strict';

var Rule = require('../models').Rule;

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    return Rule.create({
      
      title: 'The Wave',
      
      description: 'At any point during the game, start <a href="https://en.wikipedia.org/wiki/Wave_(audience)">The Wave</a>. Any player that joins late or fails to join altogether must drink.',
      
      submitter: 'Zoey',
      
      image: 'The-Wave.png',
      
      createdAt: new Date(), 
      
      updatedAt: new Date()
      
    })
    
  },

  down: function (queryInterface, Sequelize) {
    
    return Rule.destroy({
      where: {
        title: 'The Wave'
      }
    })
    
  }
};
