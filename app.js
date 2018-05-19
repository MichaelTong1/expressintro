var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();
var randomPuppy = require('random-puppy');
var doggo = randomPuppy();





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
var publicDir = require('path').join(__dirname,'public');
app.use(express.static(publicDir));

app.get('/', function(req, res) {
	res.render('index', {
		title: 'Do you like dogs?'

	});
});

app.post('/result', function(req,res) {

	if ((req.body.Result) === 'Yes') {

		console.log('Hey nice');
			res.render('good', {
		title: 'Hey nice! Here\'s Scruffy :) Click her for more dogs.',

	});
	 }else {
		console.log('oNo');
			res.render('bad', {
		title: 'Ohno!'
	});
	}
	

});

app.get('/nextdoggo', function(req,res) {
		randomPuppy("fluffydogs")
	.then(url => {
			console.log('onto next doggo');
			res.render('doggopage', {
		title: 'Glad you like dogs! Keep clicking for more!',
		url: url
	}) 
	});

});






app.listen(3000, function(){
	console.log('Server started on port 3000...');
})



