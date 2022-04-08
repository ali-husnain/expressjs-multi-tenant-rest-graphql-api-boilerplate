let CustomerDataProvider = {

  getCustomers: async(request) => {
    const Customer = db.Customer; //use `db` variable for current connection and if want to get master db connection then use `masterDb`
    return new Promise(function(resolve, reject) {
      Customer.findAll({ where: { sub_id: request.user.subdomain.sub_id } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
      resolve
    });
  },

  getCustomer: async(customerId) => {
    const Customer = db.Customer;
    return new Promise(function(resolve, reject) {
      Customer.findOne({ where: { cid: customerId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  createCustomer: async(body) => {
    const Customer = db.Customer;
    return new Promise(function(resolve, reject) {
      Customer.create(body)
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  },

  updateCustomer: async(body) => {
    return null;
  },

  deleteCustomer: async(customerId) => {
    const Customer = db.Customer;
    return new Promise(function(resolve, reject) {
      Customer.destroy({ where: { id: customerId } })
        .then(data => {
          resolve(data);
        }).catch(err => {
          reject(err);
        });
    });
  }

};

module.exports = CustomerDataProvider;
