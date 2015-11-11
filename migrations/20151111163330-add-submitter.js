'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    
    queryInterface.addColumn('Rules', 'submitter', {
      type: Sequelize.STRING,
      allowNull: true
    })
    
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('Rules', 'submitter')
  }
};
