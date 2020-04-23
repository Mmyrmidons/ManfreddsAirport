var fs = require('fs')

var summonTheMyrkridia = function (thingsPath) {
    var rockers = {}
    var cover = ''
    var mp3s = []
    var items = fs.readdirSync(thingsPath)

    items.forEach(function(item) {
        if (!item.startsWith('.')) {
            var stats = fs.statSync(thingsPath + '/' + item)

            if (stats.isDirectory()) {
                var summonedWarriors = summonTheMyrkridia(thingsPath + item + '/')

                for (var warrior in summonedWarriors)
                    rockers[warrior] = summonedWarriors[warrior]

            } else if (item.endsWith('.jpg'))
                cover = item
            else if (item.endsWith('.mp3') || item.endsWith('.m4a') || item.endsWith('.png') || item.endsWith('.aiff'))
                mp3s.push(thingsPath.replace(/^.+musick\/(.+)$/, '$1') + '/' + item)
        }
    })

    if (!cover)
        cover = (Math.random() * 10000).toString().split('.')[0]

    rockers[cover] = mp3s

    return rockers
}

exports.unleashTheMyrkridia = function(req, res) {
    var thingsPath = __dirname + '/../public/things'
    
    if (!fs.existsSync(thingsPath))
        fs.mkdirSync(thingsPath)
    
    var paths = []

    req.app._router.stack.forEach(function(route) {
        if (route.route && route.route.path)
            paths.push(route.route.path.toString().replace(/[(].+$/, ''))
    })

    myrkAttack(paths, [], [], '', req, res)
}

exports.myrkThings = function(req, res) {
    var things = []
    var thingsPath = __dirname + '/../public' + decodeURI(req.originalUrl)
    var mp3s = []
    var covers = []
    var summonedWarriors = summonTheMyrkridia(thingsPath)

    var i = 0;

    console.log("Manners: " + thingsPath.replace(/^.*\/musick\//, ""))

    var pwd = thingsPath.replace(/^.*\/musick\//, "")
    var pwdRegex = new RegExp("^" + pwd)



    for (var warrior in summonedWarriors) {
        var albumId = (Math.random() * 1000).toString().split('.')[0]

        for (var j = 0; j < summonedWarriors[warrior].length; j++)
            mp3s.push(summonedWarriors[warrior][j].replace(pwdRegex, "").replace(/^\/+/, ''))


        if (parseInt(warrior))
            warrior = '/img/spudandal/spudandalbert.jpg'

        console.log("Manners 1: " + albumId)
        covers.push(warrior)


    }

    fs.readdir(thingsPath, function(error, items) {
        if (!error && items)
            items.forEach(function(item) {
                if (!item.startsWith('.')) {
                    things.push(item)
                }
            })
    })

    res.render('myrkridian', {
        myrkridianAura: req.secure ? 'deeppink' : 'orange',
        path: req.originalUrl,
        paths: [],
        things: things,
        mp3s: mp3s,
        covers: covers
    })
}

var myrkAttack = function(paths, things, mp3s, covers, req, res) {
    res.render('myrkridian', {
		myrkridianAura: req.secure ? 'deeppink' : 'orange',
        path: req.originalUrl,
        paths: paths,
        things: things,
        mp3s: mp3s,
        covers: covers
	})    
}