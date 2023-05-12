module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    UserId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    AvatarImage: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("user", "admin"),
      defaultValue: "user",
      allowNull: false,
      validate: {
        isIn: {
          args: [["user", "admin"]],
          msg: "Wrong status",
        },
      },
    },
    refreshToken: {
      type: DataTypes.STRING,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.Posts);
    Users.hasMany(models.Comments);
    Users.hasMany(models.Friends);
  };

  return Users;
};
