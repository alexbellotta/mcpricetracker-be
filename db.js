/**
 * Importing the MySQL2 Node.JS module.
 * The require method loads the module from the node_modules.
 */
const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
})
db.connect(err => {
    if(err) throw err;
    console.log("MySQL Connected!");
})
module.exports = db;