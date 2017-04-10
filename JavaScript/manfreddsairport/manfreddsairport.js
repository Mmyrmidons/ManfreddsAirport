var express = require('express')
var app = express()
var handlebars = require('express-handlebars').create({
	defaultLayout: 'main',
	helpers: {
		section: function(name, options) {
			if (!this._sections)
				this._sections = {}
				
			this._sections[name] = options.fn(this)
			return null
		}
	}	
})
var hiMissTikkie = require('./modz/hiMissTikkie.js')
var sumer = require('./sumer/sumer.js')

app.engine('handlebars', handlebars.engine)

app.set('port', process.env.PORT || 3099)
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
	res.render('index', {
		hiMissTikkie: hiMissTikkie.sayHiToMissTikkie
	})
})

app.get('/headers', function(req, res) {
	res.set('Content-Type', 'text/plain')
	
	var s = ''
	
	for (var name in req.headers)
		s += name + ' = ' + req.headers[name] + '\n'
		
	res.send(s)
})

app.get('/poopie', function(req, res) {
	res.render('empty')
})

app.get('/spudandal', function(req, res) {
	res.render('empty')
})

app.get('/myth', function(req, res) {
	res.render('empty')
})

app.get('/api/cats', function(req, res) {
	var cats = [
		{manny: "Mistr Manny"},
		{pooh: "Miss Pooh"},
		{piglet: "Miss Piglet"},
		{tashi: "Miss Tashi"}
	]
	
	res.json(cats)
})

app.get('/sumer(/:trans)?', sumer.parseTrans)

app.use(function(req, res, next) {
	res.status(404)
	res.render('404')
})

app.use(function(err, req, res, next) {
	console.error("Manfredd's Airport 500 Error = " + err.stack)
	
	res.status(500)
	res.render('500')
})

app.listen(app.get('port'), function() {
	console.log("Welcome to Manfredd's Airport. All flights departing from port " + app.get('port'))
})