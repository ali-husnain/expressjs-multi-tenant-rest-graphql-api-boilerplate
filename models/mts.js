'use strict';
module.exports = (sequelize, DataTypes) => {
  const MTS = sequelize.define('MTS', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    sub_id: {
      type: DataTypes.INTEGER,
    },
    domain_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    domain_db: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  }, { tableName: "app_subdomain_mts_connections", timestamps: false});

  return MTS;
};
