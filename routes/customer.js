const express = require('express');
const router = express.Router();
const { validate } = require('express-validation');

const validator = require('../validations/customer');
const validatorOptions = { context: false, statusCode: 400, keyByField: true };
const customerController = require('../src/customer/customer_controller');

router.get('/', function (request, response, next) {
  customerController.getCustomers(request, response, next);
});

router.get('/:customerId', validate(validator.getCustomer, validatorOptions), function (request, response, next) {
  customerController.getCustomer(request, response, next);
});

router.post('/', function (request, response, next) {
  customerController.createCustomer(request, response, next);
});

router.put('/:customerId', function (request, response, next) {
  customerController.updateCustomer(request, response, next);
});

router.delete('/:customerId', function (request, response, next) {
  customerController.deleteCustomer(request, response, next);
});

module.exports = router;
