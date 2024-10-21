const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MySql@._2006',
    database: 'budget_app',
    port: 3307,
    connectTimeout: 10000,
});

const connectDatabase = () => {
    db.connect (err => {
        if (err) {
            console.error('Error connecting to the database', err);
            throw err;
        }
        console.log('MySQL database connected successfully: ', db.config.host);
    });
}

module.exports = connectDatabase;