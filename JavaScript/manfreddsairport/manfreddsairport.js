var express = require('express')
var app = express()
var https = require('https')
const args = require('yargs').argv
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

const pjson = require('./package.json')
const port = args.port || 80
const securePort = args.securePort || 443

var myrkridian = require('./modz/myrkridian.js')
//var cats = require('./modz/cats.js')
var sumer = require('./sumer/sumer.js')

app.engine('handlebars', handlebars.engine)

app.set('view engine', 'handlebars')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(__dirname + '/public'))

app.get('/', myrkridian.unleashTheMyrkridia)
app.get(/things(\/.+)*/, myrkridian.myrkThings)

app.get('/myth', function(req, res) {
	res.render('myth', {
        layout: 'boring'
    })
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

app.get('/giggers', function(req, res) {
	res.render('myth', {
        layout: 'boring'
    })
})


//app.get('/api/cats', cats.getCats)    
//app.post('/api/cats', cats.postCats)
//app.put('/api/cats', cats.putCats)
//app.delete('/api/cats', cats.deleteCats)

app.get('/sumer(/:trans)?', sumer.parseTrans)
app.post('/sumer/pdf', sumer.growPdf)

//app.get('/colorschemes', function(req, res) {
//	res.render('empty', {
//        layout: 'boring'
//    })
//})
//
//app.get('/patterns', function(req, res) {
//	res.render('empty', {
//        layout: 'boring'
//    })
//})

app.use(function(req, res, next) {
	res.status(404)
	res.render('404')
})

app.use(function(err, req, res, next) {
	console.error("Manfredd's Airport 500 Error = " + err.stack)
	
	res.status(500)
	res.render('500')
})

// app.listen(app.get('port'), function() {
// 	console.log("Welcome to Manfredd's Airport. All flights departing from port " + app.get('port'))
// })

try {
	const privateKey = fs.readFileSync('/etc/letsencrypt/live/' + pjson.domain + '/privkey.pem', 'utf8');
	const certificate = fs.readFileSync('/etc/letsencrypt/live/' + pjson.domain + '/cert.pem', 'utf8');
	const ca = fs.readFileSync('/etc/letsencrypt/live/' + pjson.domain + '/chain.pem', 'utf8');

	const credentials = {
		key: privateKey,
		cert: certificate,
		ca: ca
	}

	const httpsServer = https.createServer(credentials, app);

	httpsServer.listen(securePort, () => {
		console.log('Listening for secure Deerman requests from port ' + securePort)
	})
} catch(error) {
	console.log("Secure Deerman error = " + error)
} finally {
	app.listen(port, function() {
   		console.log("Listening for Deerman requests from port " + port)
	})
}
