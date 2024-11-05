const mysql = require('mysql2')

//create connection
const db = mysql.createConnection({
	host: 'kamandoradesigns.com',
    user: 'wwgwinlc_Admin',
    password: 'Muya@.2006',
    database: 'wwgwinlc_budget_app',
    connectTimeout: 10000
});

const connectDatabase = () => {
   db.connect(err => {
        if (err) {
            console.error('Error connecting to the database:', err);
            throw err;
        }
        console.log('MySQL database connected with Host:', db.config.host);
    });
}

module.exports = connectDatabase;