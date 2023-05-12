module.exports = (sequelize,DataTypes)=>{
    const Posts = sequelize.define("Posts",{
        PostId:{
            type:DataTypes.STRING,
            allowNull:false
        },
        PostImage:{
            type:DataTypes.STRING,
            //allowNull:false
        },
        PostText:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Emojis:{
            type:DataTypes.STRING,
            //allowNull:false
        }
    })

    Posts.associate = (models)=>{
        Posts.belongsTo(models.Users);
        Posts.hasMany(models.Comments);
    }

  return Posts
};