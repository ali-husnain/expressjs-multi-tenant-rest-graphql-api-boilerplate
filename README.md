# Multi Tenant Node Api

## What is this?

This is a proof-of-concept (POC), multi-tenant [RESTful Web Services](https://restfulapi.net/) application built on top of [NodeJS](https://nodejs.org/en/).

## Get Started

* Install dependencies.
```
npm install
```
* Verify the .env file having `PORT, TZ` and other variables.

* Verify the Database configuration in `config/config.json`.
* Like that 
* {
* "development": {
*   "username": "root",
*   "password": null,
*   "database": "repairdesk",
*   "host": "127.0.0.1",
*   "dialect": "mysql",
*   "logging": false,
*   "pool": {
*     "max": 2,
*     "min": 1,
*     "acquire": 30000,
*     "idle": 10000
*   }
* }

* Start the application.
```
npm start
```
* Perform API requests.

## APIs

### HTTP Headers

* For APIs `Authentication`, pass the `JWT Token` in the `cookie` header of the request.
* For APIs `Authorization`, pass the `JWT Token` in the `Bearer` header of the request.

* Set the `server` in the `JWT Token`.

```
server: <Will get Tenant ID>
```

### All Customers

* POST `/api/v1/customers`

```
{
    "status": "success",
    "data": [
        {
            "cid": 1,
            "first_name": "Ali husnain",
            "last_name": "Warraich"
        }
    ]
}
```


## Libraries

* Core - [Express](https://www.npmjs.com/package/express) + [Body Parser](https://www.npmjs.com/package/body-parser)
* ORM - [Sequelize](https://www.npmjs.com/package/sequelize) + [Sequelize CLI](https://www.npmjs.com/package/sequelize-cli)
* Databases - [MySQL2](https://www.npmjs.com/package/mysql2) + [SQLite3](https://www.npmjs.com/package/sqlite3)
* Logger - [Winston](https://www.npmjs.com/package/winston) + [Morgan](https://www.npmjs.com/package/morgan)
* Monitoring - [Nodemon](https://www.npmjs.com/package/nodemon)