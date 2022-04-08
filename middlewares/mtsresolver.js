const dbRepo = require('../models');
const dbConnector = require('../src/utils/dbconnector');
const encryptHelper = require('../src/utils/encrypthelper');
const responder = require('../src/utils/responder');
const mtsDataProvider = require('../src/mts/mts_dataprovider');

let mtsResolver = async (request, response, next) => {
    try {

        //request.server is setting in authentication middleware...
        let tenant_id = Object.keys(request).length !== 0 && request.server ? request.server.split(".")[0] : ''; //for handling request of graphql add condition
        // let tenant_id = 'defaultdata';

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

        // request.dbName = dbKey;
        global.db = dbRepo[dbKey];
        global.masterDb = dbRepo['master'];

        next();

      } catch (ex) {
        responder.sendResponse(response, 400, "error", null, "Connection could not resolved.");
      }
}

module.exports = mtsResolver;