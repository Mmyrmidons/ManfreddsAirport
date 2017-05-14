var express = require('express')
var app = express()
var https = require('https')
var bodyParser = require('body-parser')
var fs = require('fs')
var handlebars = require('express-handlebars').create({
	defaultLayout: 'myrkridian',
	helpers: {
		section: function(name, options) {
			if (!this._sections)
				this._sections = {}
				
			this._sections[name] = options.fn(this)
			return null
		}
	}	
})
var myrkridian = require('./modz/myrkridian.js')
var cats = require('./modz/cats.js')
var sumer = require('./sumer/sumer.js')

app.engine('handlebars', handlebars.engine)

app.set('port', process.env.PORT || 3099)
app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.get('/', myrkridian.unleashTheMyrkridia)
app.get(/things(\/.+)*/, myrkridian.myrkThings)

app.get('/headers', function(req, res) {
	res.set('Content-Type', 'text/plain')
	
	var s = ''
	
	for (var name in req.headers)
		s += name + ' = ' + req.headers[name] + '\n'
		
	res.send(s)
})

app.get('/yevvie', function(req, res) {
	res.render('yevvie', {
        layout: 'boring'
    })
})

app.get('/spudandal', function(req, res) {
	res.render('spudandal', {
        layout: 'boring'
    })
})

app.get('/myth', function(req, res) {
	res.render('myth', {
        layout: 'boring'
    })
})

app.get('/api/cats', cats.getCats)    
app.post('/api/cats', cats.postCats)
app.put('/api/cats', cats.putCats)
app.delete('/api/cats', cats.deleteCats)

//app.get('/sumer/pdf', sumer.growPdf)
app.get('/sumer(/:trans)?', sumer.parseTrans)
app.post('/sumer/pdf', sumer.growPdf)

app.get('/colorschemes', function(req, res) {
	res.render('empty', {
        layout: 'boring'
    })
})

app.get('/patterns', function(req, res) {
	res.render('empty', {
        layout: 'boring'
    })
})

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

var options = {
    key: fs.readFileSync(__dirname + '/ssl/manfreddsairport.pem'),
    cert: fs.readFileSync(__dirname + '/ssl/manfreddsairport.crt')
}

https.createServer(options, app).listen(3098, function() {
	console.log("All secure flights departing from port " + 3098)
})