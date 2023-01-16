module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM("admin", "coordinator", "helper"),
      defaultValue: "helper",
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM("crew", "ticket", "guest"),
      defaultValue: "guest",
      allowNull: false
    },
    minimalHours: {
      type: DataTypes.TINYINT,
      allowNull: false,
      default: 8
    },

  });

  return User;
};
