var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressValidator = require('express-validator');
var app = express();
var randomPuppy = require('random-puppy');
var doggo = randomPuppy();
var count = 0;
var niceCount = 0; 




var logger = function(req, res, next) {
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
	count++;
	console.log(count + ' People visited.'); 
	res.render('index', {
		title: 'Do you like dogs?'

	});
});

app.post('/result', function(req,res) {

	if ((req.body.Result) === 'Yes') {
		niceCount++;
		console.log(niceCount + 'Hey nice');
			res.render('good', {
		title: 'Hey nice! Me too! What kind of dogs are you looking for?',

	});
	 }else {
		console.log('oNo');
			res.render('bad', {
		title: 'Ohno!'
	});
	}
});
	
app.post('/choose', function(req,res) {
	if ((req.body.Choose) === 'Fluffy') {
		randomPuppy("fluffydogs")
	.then(url => {
		console.log('onto next doggo');
		console.log('fluffy');
		res.render('fluffy',{
			title: 'Here are tons of fluffy dogs! Keep clicking for more!',
			url: url,
		})
		});
	}else if ((req.body.Choose) === 'Tiny') {
		randomPuppy("tinydogs")
	.then(url => {
		console.log('onto next doggo');
		console.log('tiny');
		res.render('tiny', {
			title: 'Here are tons of tiny dogs! Keep clicking for more!',
			url: url
		})
		});
	}else if ((req.body.Choose) === 'Smile') {
		randomPuppy("puppysmiles")
	.then(url => {
		console.log('onto next doggo');
		res.render('smile', {
			title: 'Here are tons of dogs smiling! Keep clicking for more!',
			url: url
		})
		});
	}else if ((req.body.Choose) === 'Driving') {
		randomPuppy("dogsdrivingcars")
	.then(url => {
		console.log('onto next doggo');
		res.render('driving', {
			title: 'Here are tons of dogs driving cars! Keep clicking for more!',
			url: url
		})
		});
	}else {
		console.log('uhhbad'); 
	
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

app.get('/nextfluffydoggo', function(req,res) {
		randomPuppy("fluffydogs")
	.then(url => {
			console.log('onto next doggo');
			res.render('fluffy', {
		title: 'Here are tons of fluffy dogs! Keep clicking for more!',
		url: url
	}) 
	});

});

app.get('/nexttinydoggo', function(req,res) {
		randomPuppy("tinydogs")
	.then(url => {
			console.log('onto next doggo');
			res.render('tiny', {
		title: 'Here are tons of tiny dogs! Keep clicking for more!',
		url: url
	}) 
	});

});

app.get('/nextsmiledoggo', function(req,res) {
		randomPuppy("puppysmiles")
	.then(url => {
			console.log('onto next doggo');
			res.render('smile', {
		title: 'Here are tons of dogs smiling! Keep clicking for more!',
		url: url
	}) 
	});

});


app.get('/nextdrivingdoggo', function(req,res) {
		randomPuppy("dogsdrivingcars")
	.then(url => {
			console.log('onto next doggo');
			res.render('driving', {
		title: 'Here are tons of dogs driving cars! Keep clicking for more!',
		url: url
	}) 
	});

});



app.listen(3000, function(){
	console.log('Server started on port 80...');
})



