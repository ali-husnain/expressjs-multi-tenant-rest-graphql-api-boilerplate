const customerDataProvider = require('./customer_dataprovider');

let CustomerService = {

  getCustomers: async(request) => {
    let customers = await customerDataProvider.getCustomers(request);
    return customers;
  },

  getCustomer: async(customerId) => {
    let customer = await customerDataProvider.getCustomer(customerId);
    return customer;
  },

  createCustomer: async(body) => {
    let customer = await customerDataProvider.createCustomer(body);
    return customer;
  },

  updateCustomer: async(body) => {
    let customer = await customerDataProvider.updateCustomer(body);
    return customer;
  },

  deleteCustomer: async(customerId) => {
    let customer = await customerDataProvider.deleteCustomer(customerId);
    return customer;
  }

};

module.exports = CustomerService;