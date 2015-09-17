module.exports = (sequelize, Datatypes) => {
	
	var Like = sequelize.define('like', {
		
	}, {
		classMethods: {
			associate: function(models){
				Like.belongsTo(models.rule, {
					onDelete: 'CASCADE',
					foreignKey: {
						allowNull: false
					}	
				})
			}
		}
	})
	
	return Like
}