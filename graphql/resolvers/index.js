const queries = require('./queries');

const resolvers = {
    customerById: queries.getCustomer,
    customers: queries.getCustomers
}

module.exports = resolvers