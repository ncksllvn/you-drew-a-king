module.exports = (sequelize, Datatypes) => {
	
	var Rule = sequelize.define('rule', {
		
		title: {
			type: Datatypes.STRING
		},
		
		description: {
			type: Datatypes.TEXT
		}
		
	}, {
		classMethods: {
			
			associate: function(models){
				Rule.hasMany(models.like)
			},
			
			random: function(){
				return {
					where: {
						
					}
				}
			}
			
		}
	})
	
	return Rule
}