var fs = require('fs')

exports.unleashTheMyrkridia = function(req, res) {
    var thingsPath = __dirname + '/../public/things'
    
    if (!fs.existsSync(thingsPath))
        fs.mkdirSync(thingsPath)
    
    var paths = []

    req.app._router.stack.forEach(function(route) {
        if (route.route && route.route.path)
            paths.push(route.route.path.toString().replace(/[(].+$/, ''))
    })

    myrkAttack(paths, [], req, res)
}

exports.myrkThings = function(req, res) {
    var things = []
    var thingsPath = __dirname + '/../public' + unescape(req.originalUrl)

    fs.readdir(thingsPath, function(error, items) {
        if (!error && items)
            items.forEach(function(item) {
                if (!item.startsWith('.'))
                    things.push(item)
            })
    })

    myrkAttack([], things, req, res)
}

var myrkAttack = function(paths, things, req, res) {
    res.render('myrkridian', {
		myrkridianAura: req.secure ? 'deeppink' : 'orange',
        path: req.originalUrl,
        paths: paths,
        things: things
	})    
}