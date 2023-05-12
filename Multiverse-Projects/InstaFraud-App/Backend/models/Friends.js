module.exports = (sequelize,DataTypes)=>{
    const Friends = sequelize.define("Friends",{
        id:{
            type:DataTypes.STRING,
            primaryKey: true,
            // allowNull:false
        },
        FriendsId:{
            type:DataTypes.STRING,
            // allowNull:false
        },
        FriendsAvatar:{
            type:DataTypes.STRING,
        }
    })

    Friends.associate = (models)=>{
        // Friends.hasMany(models.Users);
        // Friends.hasMany(models.Friends)
        // Friends.hasMany(models.Comments)
        // Friends.hasMany(models.Posts)
        // Friends.hasMany(models.Likes)
    }

  return Friends
};