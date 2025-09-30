/**
 * Importing the MySQL2 Node.JS module.
 * The require method loads the module from the node_modules.
 */
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'BrahimDiaz',
    database: 'bigmacpricedb'
})
db.connect(err => {
    if(err) throw err;
    console.log("MySQL Connected!");
})
module.exports = db;