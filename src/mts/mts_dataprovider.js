const dbRepo = require('../../models');
const MTS = dbRepo['master'].MTS;


let MtsDataProvider = {

  getMtsAccount: async(domain_name) => {
    return new Promise(function(resolve, reject) {
      MTS.findOne({ where: { domain_name:  domain_name} })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  }
};

module.exports = MtsDataProvider;
