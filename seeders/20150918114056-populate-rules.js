'use strict';

var fs = require('fs')
var Rule = require('../models').Rule;
var CSVConverter = require('csvtojson').Converter;

module.exports = {
  up: function up(queryInterface, Sequelize) {
    
    var contents = fs.readFileSync('./seeders/data/rules.csv').toString()
    var csvConverter=new CSVConverter();
    
    return new Sequelize.Promise(function(res){
      
      csvConverter.fromString(contents, function(err,rules){
        
        rules.forEach(function(r){
          if (r.image == 'NULL')
            r.image = null
        })
        
        Rule.bulkCreate(rules).then(res)
        
      });
      
    })
    
    
    
  },

  down: function down(queryInterface, Sequelize) {
    return Rule.destroy({ truncate: true });
  }
};