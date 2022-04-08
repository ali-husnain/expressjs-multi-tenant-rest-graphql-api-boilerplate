const morgan = require('morgan');
const winston = require('./../src/utils/logger');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('./../middlewares/cors');
const mtsresolver = require('./../middlewares/mtsresolver');


module.exports = (app, express) => {
    require('dotenv').config();
    
    //packaging..
    app.use(morgan('combined', { "stream": winston.stream.write}));
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //middlewares
    app.use(cors);
    app.use(mtsresolver);
}