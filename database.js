let mysql = require('mysql');

let connection = mysql.createConnection({

	host: 'localhost',
	user: 'root',
	password: '',
	database: 'ecamair'
})
connection.connect((e)=>{
	if(e) {console.log(e)}
	else{console.log("connected to database")}
})

module.exports = connection;
