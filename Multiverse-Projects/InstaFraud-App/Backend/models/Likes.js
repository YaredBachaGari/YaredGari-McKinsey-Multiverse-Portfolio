module.exports = (sequelize,DataTypes)=>{
    const Likes = sequelize.define("Likes",{
        LikesId:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Like:{
            type:DataTypes.INTEGER,
        }
    })

    Likes.associate = (models)=>{
        Likes.belongsTo(models.Friends);
        Likes.belongsTo(models.Posts);
        Likes.belongsTo(models.Users);
    }

  return Likes
};