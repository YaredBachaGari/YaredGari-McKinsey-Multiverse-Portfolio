module.exports = (sequelize,DataTypes)=>{
    const Comments = sequelize.define("Comments",{
        CommentId:{
            type:DataTypes.STRING,
            allowNull:false
        },
        CommentText:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Emojis:{
            type:DataTypes.STRING,
        }
    })

    Comments.associate = (models)=>{
        Comments.belongsTo(models.Posts);
        Comments.belongsTo(models.Friends);
        Comments.belongsTo(models.Users);
    }

  return Comments
};