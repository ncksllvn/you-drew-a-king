'use strict';
module.exports = function(sequelize, DataTypes) {
  var suggestions = sequelize.define('Suggestion', {
    title: {
      type: DataTypes.STRING,
      validate: {
        len: { 
          args: [3,50],
          msg: 'Your title should be between 3 and 50 characters.'
        }
      }
   },
    name: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      validate: { 
        len: {
          args: [10,500],
          msg: 'Your description should be between 10 and 500 characters.'
        }
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