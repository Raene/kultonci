//pass the environment variable you wish to load into the .config path option below

const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), '.env')});
module.exports = {
  environment: process.env.NODE_ENV,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port: process.env.PORT
};