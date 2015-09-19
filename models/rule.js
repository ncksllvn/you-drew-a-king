var slug = require('slug')

module.exports = function(sequelize, DataTypes) {
  
  var Rule = sequelize.define('Rule', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    
    instanceMethods: {
      getWithPermalink: function(req){
        var permalink = req.protocol + '://' + req.get('host') + '/rule/' + slug(this.title) + '/' + this.id
        var attributes = this.get({ plain: true })
        
        attributes.permalink = permalink
        
        return attributes
      }  
    },
    
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