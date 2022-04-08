//middlewares
const cookieAuth = require('./../middlewares/cookie_auth');
const tokenAuth = require('./../middlewares/token_auth');
const graphql = require('./../middlewares/graphql');

//routes
const cusotmerRouter = require('./customer');

module.exports = [
    {
        "url": "/graphql",
        "actions": graphql.handler,
        "middleware": tokenAuth.authenticate,
        "skip": false
    },
    {
        "url": "/api/v1/customers",
        "actions": cusotmerRouter,
        "middleware": tokenAuth.authenticate,
        "skip": false
    }
]