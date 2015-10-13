var slug = require('slug')
var { host, facebookAppId } = require('../constants/locals')()

module.exports = function(sequelize, DataTypes) {
  
  var Rule = sequelize.define('Rule', {
    
    title: DataTypes.STRING,
    
    description: DataTypes.TEXT,
    
    image: {
      type: DataTypes.STRING,
      get: function(){
        var image = this.getDataValue('image')
        
        return image ?  '/images/rules/' + image : '/images/rules/default.png'
      }
    }
    
  }, {
    
    getterMethods: {
      
      uri: function() {
        return '/' + slug(this.title) + '/' + this.id
      },
      
      permalink: function(){
        return host + this.uri
      },
      
      encodedPermalink: function(){
        return encodeURIComponent(this.permalink)
      },
      
      facebookShareUrl: function(){
        return `https://www.facebook.com/dialog/sharer.php?display=popup&href=${this.encodedPermalink}&app_id=${facebookAppId}`
      },
      
      twitterShareUrl: function(){
        return `http://twitter.com/share?url=${this.encodedPermalink}`
      },
      
      tumblrShareUrl: function(){
        return `http://www.tumblr.com/share/link?url=${this.encodedPermalink}`
      },
      
      pinterestShareUrl: function(){
        var image = host + this.image
        var pinterestDescription = encodeURIComponent(this.title + ' - ' + this.description)
        
        return `http://pinterest.com/pin/create/button/?url=${this.encodedPermalink}&media=${image}&description=${pinterestDescription}`
      },
      
      redditShareUrl: function(){
        return `http://reddit.com/submit?url=${this.encodedPermalink}&title=${this.title}`
      },
      
      emailShareUrl: function(){
        return `mailto:?subject=${this.title}&body=${this.permalink}`
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