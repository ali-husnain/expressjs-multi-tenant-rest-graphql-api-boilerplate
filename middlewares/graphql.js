//graphql handling
const {graphqlHTTP} = require('express-graphql');
const graphqlSchema = require('../graphql/schema'); //schema for graphql api's
const graphqlResolvers = require('../graphql/resolvers'); //resolvers for graphql api's

//for graphql api's
const handler = (req, res)=>{
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: false, //for enabling graphql web interface environment...
    customFormatErrorFn: (err) => {
      return {
        message : err.message,
        status: 400
      };
    }
  })(req, res)
};

module.exports = {handler}