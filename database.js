let mysql = require('mysql');

let connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'ecamair'
});

exports.connection = connection;