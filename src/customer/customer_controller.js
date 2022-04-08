const customerService = require('./customer_service');
const responder = require('../utils/responder');
const common = require('../utils/common');

let CustomerController = {

  getCustomers: async (request, response, next) => {
    try {
      let customers = await customerService.getCustomers(request);
      responder.sendResponse(response, 200, "success", customers, "Customers retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  getCustomer: async (request, response, next) => {
    try {
      let customerId = request.params.customerId;
      let customer = await customerService.getCustomer(customerId);
      responder.sendResponse(response, 200, "success", customer, "Customer retrieved successfully.");
    } catch (error) {
      return next(error);
    }
  },

  createCustomer: async (request, response, next) => {
    try {
      let body = request.body;
      let cusotmer = await customerService.createOrganization(body);
      responder.sendResponse(response, 200, "success", cusotmer, "Customers created successfully.");
    } catch (error) {
      return next(error);
    }
  },

  updateCustomer: async (request, response, next) => {
    try {
      let body = request.body;
      let customer = await customerService.updateCustomer(body);
      responder.sendResponse(response, 200, "success", customer, "Customer updated successfully.");
    } catch (error) {
      return next(error);
    }
  },

  deleteCustomer: async (request, response, next) => {
    try {
      let customerId = request.params.customerId;
      let customer = await customerService.deleteCustomer(customerId);
      responder.sendResponse(response, 200, "success", customer, "Customer deleted successfully.");
    } catch (error) {
      return next(error);
    }
  }

};

module.exports = CustomerController;
