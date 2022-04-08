const customerService = require('../../src/customer/customer_service.js');

let queries = {

  getCustomers: async (argu, request, response) => {
    try {
      let customers = await customerService.getCustomers(request);
      return customers;
    } catch (error) {
      return error;
    }
  },

  getCustomer: async (argu,request) => {
    try {
      let customerId = argu.id;
      let customer = await customerService.getCustomer(customerId);
      return customer;
    } catch (error) {
      return error;
    }
  }

};

module.exports = queries;
