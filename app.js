var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();

var logger = function(req, res, next) {
	console.log('Logging...');
	next();
}

app.use(logger);

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false})); 

// Set Static Path
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
	res.render('index', {
		title: 'Do you like dogs?'

	});
});

app.post('/result', function(req,res) {

	if ((req.body.Result) === 'Yes') {
		console.log('Hey nice');
			res.render('good', {
		title: 'Hey nice!'
	});
	} else {
		console.log('oNo');
			res.render('bad', {
		title: 'Ohno!'
	});
	}
	

});

app.get('/result', function(req,res){ 


});






app.listen(3000, function(){
	console.log('Server started on port 3000...');
})


