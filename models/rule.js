var slug = require('slug')
var { facebookAppId } = require('../constants/locals')

module.exports = function(sequelize, DataTypes) {
  
  var Rule = sequelize.define('Rule', {
    
    title: DataTypes.STRING,
    
    description: DataTypes.TEXT,
    
    image: {
      type: DataTypes.STRING,
      get: function(){
        var image = this.getDataValue('image')
        
        return image || '/images/rules/default.png'
      }
    }
    
  }, {
    
    getterMethods: {
      
      uri: function() {
        return '/' + slug(this.title) + '/' + this.id
      }
      
    },
    
    instanceMethods: {
      
      getWithShareLinks: function(req) {
        
        var rule = this.get({ plain: true })
        var host = req.protocol + '://' + req.get('host')
        var permalink = host + rule.uri
        var image = host + this.image
        var encodedPermalink = encodeURIComponent(permalink)
        var pinterestDescription = encodeURIComponent(rule.title + ' - ' + rule.description)
        
        return Object.assign({
          facebookShareUrl: `https://www.facebook.com/dialog/sharer.php?display=popup&href=${encodedPermalink}&app_id=${facebookAppId}`,
          twitterShareUrl: `http://twitter.com/share?url=${encodedPermalink}`,
          tumblrShareUrl: `http://www.tumblr.com/share/link?url=${encodedPermalink}`,
          pinterestShareUrl: `http://pinterest.com/pin/create/button/?url=${encodedPermalink}&media=${image}&description=${pinterestDescription}`,
          redditShareUrl: `http://reddit.com/submit?url=${encodedPermalink}&title=${rule.title}`,
          emailShareUrl: `mailto:?subject=${rule.title}&body=${permalink}`,
          permalink: permalink
        }, rule) 
      }
      
    },
    
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
      
      searchByKeyword: (keyword) => {
        
        if (!keyword || keyword.length < 3)
        {
          return
        }
          
        //keyword = sequelize.escape(keyword)
          
        return Rule.findAll({
          attributes: ['id', 'title'],
          where: {
            $or: [
              {
                title: {
                  $iLike: `%${keyword}%`
                }
              },
              {
                description: {
                  $iLike: `%${keyword}%`
                }
              }
            ]
          },
          limit: 10
        })
        
      },
      
      findRandom: (where) => {
        
        where = where || {}
        
        return Rule.findOne({
          where: where,
          limit: 1,
          order: [
            [sequelize.fn('RANDOM')]
          ]
        })
      }
      
    }
    
  });
  
  return Rule;
};