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
        return this.title && '/' + slug(this.title) + '/' + this.id
      },
      
      permalink: function(){
        return host + this.uri
      },
      
      descriptionAsPlainText: function(){
        var description = this.getDataValue('description') || ''
        
        return description ? description.replace(/<\/?[^>]+(>|$)/g, '') : ''
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
        var pinterestDescription = encodeURIComponent(this.title + ' - ' + this.descriptionAsPlainText)
        
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

      searchByKeyword: (keyword) => {
        
        if (!keyword || keyword.length < 3)
        {
          return
        }
          
        //keyword = sequelize.escape(keyword)
          
        return Rule.findAll({
          attributes: ['id', 'title', 'image'],
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
      
      findByIdAndRandomNext: (options) => {
        
        var ruleId = ~~options.id
        var exclusions = options.exclusions || []    
        
        return sequelize.Promise.join(
          Rule.findById(ruleId),
          Rule.findRandom({ limit: 1, exclusions: exclusions.concat([ruleId]) }),
          function result(rule1, rule2){
            
            rule1.next = rule2[0]
            
            return rule1
            
          } 
        )
        
      },
      
      findRandomAndNext: (options) => {
        return Rule.findRandom({ limit: 2, exclusions: options.exclusions }).then((rules) => {
          
          return Object.assign(rules[0], {
            next: rules[1]
          })
          
        })
        
      },
      
      findRandom: (options) => {
        
        var exclusions = options.exclusions || [-1]
        var limit = options.limit || 1
        
        return Rule.findAll({
          where: {
            id: {
              $notIn: exclusions
            } 
          },
          limit: limit,
          order: [
            [sequelize.fn('RANDOM')]
          ]
        })
      }
      
    }
    
  });
  
  return Rule;
};