const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const modelsDir = path.resolve(__dirname + '/../../models');

let DBConnector = {

  addSequelizeConnectionToRepo: (dbRepo, dbKey) => {
    const db = {};

    let sequelize;
    if(dbKey === 'master') {
      sequelize = new Sequelize(config.database, config.username, config.password, config);
    } else {
      sequelize = new Sequelize(dbKey, config.username, config.password, config);
    }

    fs
      .readdirSync(modelsDir)
      .filter(file => {
        return (file.indexOf('.') !== -1) && (file !== 'index.js') && (file.slice(-3) === '.js');
      })
      .forEach(file => {
        //here we will create model connection with database using sequelize
        const model = require(path.join(modelsDir, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
      });

    //this line is used when need to accossiate a model with other model
    Object.keys(db).forEach(modelName => {
      if (db[modelName].associate) {
        db[modelName].associate(db);
      }
    });

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;

    dbRepo[dbKey] = db;

    return dbRepo;
  }
};

module.exports = DBConnector;