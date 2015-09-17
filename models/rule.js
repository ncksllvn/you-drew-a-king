'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rule = sequelize.define('Rule', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Rule;
};