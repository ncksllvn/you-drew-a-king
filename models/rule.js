var slug = require('slug')

module.exports = function(sequelize, DataTypes) {
  
  var Rule = sequelize.define('Rule', {
    
    title: DataTypes.STRING,
    
    description: DataTypes.TEXT,
    
    image: DataTypes.STRING
    
  }, {
    
    getterMethods: {
      
      uri: function() {
        return '/rule/' + slug(this.title) + '/' + this.id
      }
      
    },
    
    instanceMethods: {
      
      getWithShareLinks: function(req) {
        
        var rule = this.get({ plain: true })
        var permalink = req.protocol + '://' + req.get('host') + rule.uri
        
        return Object.assign({
          facebookShareUrl: 'https://www.facebook.com/sharer/sharer.php?u=' + permalink,
          twitterShareUrl: 'http://twitter.com/share?url=' + permalink,
          tumblrShareUrl: 'http://www.tumblr.com/share/link?url=' + permalink,
          permalink: permalink
        }, rule) 
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