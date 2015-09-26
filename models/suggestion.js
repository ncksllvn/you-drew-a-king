'use strict';
module.exports = function(sequelize, DataTypes) {
  var suggestions = sequelize.define('Suggestion', {
    title: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return suggestions;
};