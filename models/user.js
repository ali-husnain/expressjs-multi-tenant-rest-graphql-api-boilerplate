'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    uid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sub_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    supper: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, { tableName: "app_user", timestamps: false});

  return User;
};
