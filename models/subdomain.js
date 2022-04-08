'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subdomain = sequelize.define('Subdomain', {
    sub_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sub_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { tableName: "app_subdomain", timestamps: false});

  return Subdomain;
};
