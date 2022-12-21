let express = require('express');
let session = require('express-session');
let router = require('./routes.js');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(session({
	secret: 'secret',
	resave: false,
	saveUninitialized: true
}))
app.use('/', router);

app.listen(80, ()=> {
	console.log('Listening on port 80');
});