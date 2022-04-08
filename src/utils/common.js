const dbRepo = require('../../models');
const dbConnector = require('./dbconnector');
const mtsDataProvider = require('../mts/mts_dataprovider');
const encryptHelper = require('../../src/utils/encrypthelper');

let Common = {

  getDBKeyFromRequest: async (request) => {
    let tenant_id = Object.keys(request).length !== 0 && request.server ? request.server.split(".")[0] : ''; //for handling request of graphql add condition
    //let tenant_id = 'defaultdata';
    let dbKey = 'master';
    if(tenant_id) {
      dbKey = `${tenant_id}`;
    }
    if(!dbRepo[dbKey]) {
      let account = await mtsDataProvider.getMtsAccount(dbKey);
      if(account) {
        dbKey = encryptHelper.decrypt(account.domain_db);
        dbConnector.addSequelizeConnectionToRepo(dbRepo, dbKey);
      } else {
        dbKey = 'master';
      }
    }
    return dbKey;
  }
};

module.exports = Common;
