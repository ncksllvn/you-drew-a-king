'use strict';
module.exports = function(sequelize, DataTypes) {
  var suggestions = sequelize.define('Suggestion', {
    title: {
      type: DataTypes.STRING,
      validate: {
         notEmpty: true
      }
   },
    name: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      validate: {
         notEmpty: true
      }
    },
    ip: {
      type: DataTypes.STRING,
      validate: {
        isIP: true
      } 
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return suggestions;
};