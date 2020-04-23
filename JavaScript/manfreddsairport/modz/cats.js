var cats = [
    {manny: "Mistr Manfredd"},
	{pooh: "Miss Pooh"},
    {piglet: "Miss Piglet"},
    {tashi: "Miss Tashi"},
    {guapo: "Guapster"},
    {sally: "Sally Cat"},
    {mickey: "Mickey"},
    {jasmine: "Jasmine"},
    {harold: "Harold or Tony"},
    {beanie: "Beanie"},
    {lukey: "Lukey"},
    {tomato: "Tomatie"},
    {albert: "Albie"},
    {spud: "Hey Bud"},
    {tygerTyger: "Tyger Tyger"},
    {rexie: "Lord of Hillcrest Avenue"},
    {birdieJr: "Squeaky Squeakster McSqueakypants"}
]
    
exports.getCats = function(req, res) {	
	res.json(cats)
}

exports.postCats = function(req, res) {
    for (var key in req.body)
        console.log("Katz = " + key + " = " + req.body[key])

    
//    if (req.body.hasOwnProperty("poopy"))
        console.log("Poopy = " + req.body.poopy)

	res.json(req.body)
}

exports.putCats = function(req, res) {
    console.log("Spud = " + req.body.spud)

	res.json(req.body)
}

exports.deleteCats = function(req, res) {
    console.log("Albie = " + req.body.albert)

	res.json(req.body)
}