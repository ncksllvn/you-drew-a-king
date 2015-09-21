var slug = require('slug')
var { facebookAppId } = require('../constants/locals')

module.exports = function(sequelize, DataTypes) {
  
  var Rule = sequelize.define('Rule', {
    
    title: DataTypes.STRING,
    
    description: DataTypes.TEXT,
    
    image: DataTypes.STRING
    
  }, {
    
    getterMethods: {
      
      uri: function() {
        return '/' + slug(this.title) + '/' + this.id
      }
      
    },
    
    instanceMethods: {
      
      getWithShareLinks: function(req) {
        
        var rule = this.get({ plain: true })
        var permalink = req.protocol + '://' + req.get('host') + rule.uri
        var encodedPermalink = encodeURIComponent(permalink)
        
        return Object.assign({
          facebookShareUrl: 'https://www.facebook.com/dialog/sharer.php?display=popup&href=' + encodedPermalink + '&app_id=' + facebookAppId,
          twitterShareUrl: 'http://twitter.com/share?url=' + encodedPermalink,
          tumblrShareUrl: 'http://www.tumblr.com/share/link?url=' + encodedPermalink,
          pinterestShareUrl: 'http://pinterest.com/pin/create/button/?url=' + encodedPermalink + '&media=' + rule.image + '&description=' + rule.title + ' - ' + rule.description,
          emailShareUrl: 'mailto:?subject=' + rule.title + '&body=' + permalink,
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