const { Joi } = require('express-validation');

const getCustomers = {};

const getCustomer= {
    params: Joi.object({
        customerId: Joi.number()
        .required()
    })
};

const createCustomer = {};
const updateCustomer = {};
const deleteCustomer = {};

module.exports = {getCustomers,getCustomer,createCustomer,updateCustomer,deleteCustomer};
