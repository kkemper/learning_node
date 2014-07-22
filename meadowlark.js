var express = require('express');

var app = express();

//set-up handlebars view engine
var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

//Home Page
app.get('/', function(req, res){
	res.render('home');
});

//About Page
app.get('/about', function(req, res){
	var randomFortune = fortuneCookies[Math.floor(Math.random() * fortuneCookies.length)]
	res.render('about', {fortune: randomFortune});
});

// 404 catch-all handler
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 error handler
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');

});
	
app.listen(app.get('port'), function() {
	console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});
	
var fortuneCookies = [
	"Conquer your fears or they will conquer you.",
	"Rivers need springs.",
	"Do not fear what you do not know.",
	"You will have a pleasant surprise.",
	"Whenever possible, keep it simple.",
	];