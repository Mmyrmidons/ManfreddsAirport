var fs = require('fs')

exports.unleashTheMyrkridia = function(req, res) {
    var paths = [], things = []
    var thingsPath = __dirname + '/../things'
    
    req.app._router.stack.forEach(function(route) {
        if (route.route && route.route.path)
            paths.push(route.route.path)
    })
    
    fs.readdir(thingsPath, function(error, items) {
        if (error && error.code && error.code === 'ENOENT')
            fs.mkdirSync(thingsPath)
        else if (!error && items)
            items.forEach(function(item) {
                things.push('things/' + item)
            })
    })

    res.render('myrkridian', {
		myrkridianAura: req.secure ? 'deeppink' : 'orange',
        path: req.route.path,
        paths: paths,
        things: things
	})
}