'use strict';
module.exports = function(sequelize, DataTypes) {
  var Rule = sequelize.define('Rule', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
      findRandom: () => {
        return Rule.findOne({
          order: [
            [sequelize.fn('RANDOM')]
          ]
        })
      }
    }
  });
  return Rule;
};