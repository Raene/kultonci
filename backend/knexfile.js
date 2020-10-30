const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), '.env')});
module.exports = {
    development: {
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            user: process.env.DB_USER,
            password:process.env.DB_PASS
        },
        seeds: {
            directory: __dirname + '/seeds'
        },
        migrations: {
            directory: __dirname + '/migrate'
        }

    }
}