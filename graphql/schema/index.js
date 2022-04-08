const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        customerById(id: Int!): Customer
        customers: [Customer]
    },
    type Customer {
        cid: Int
        first_name: String
    }
`);

module.exports = schema;