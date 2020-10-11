const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), 'test.env')});

console.log(process.env.DATABASE);