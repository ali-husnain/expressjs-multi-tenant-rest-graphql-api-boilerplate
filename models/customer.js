'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    cid: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }, 
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  }, { tableName: "app_customer", timestamps: false});
  // Organization.associate = function(models) {
  //   Organization.hasMany(models.User);
  // };
  return Customer;
};
