try {
	var xslt4node = require('xslt4node')
	var fs = require('fs')
	var Handlebars = require('handlebars');
	var pdf = require('html-pdf')

	exports.parseTrans = function(req, res, next) {
		var transli = req.params.trans ? "c." + req.params.trans : "c.1.1.1"
		var transliXmlPath = 'sumer/transliterations/' + transli + '.xml'
		var transla = req.params.trans ? "t." + req.params.trans : "t.1.1.1"
		var translaXmlPath = 'sumer/translations/' + transla + '.xml'
		var glossary = transli.replace("c.", "g.")
		var title = transli.replace("c.", "a.")

		var renderTrans = function() {
        	res.render('sumer', {
            	layout: 'boring',
	 			transliterationPartial: function() { return 'sumer/' + transli },
	   			translationPartial: function() { return 'sumer/' + transla },
	   			glossaryPartial: function() { return 'sumer/' + glossary },
	   			titlePartial: function() { return 'sumer/' + title },
            	tableOfContentsPartial: function() { return 'sumer/static/tableOfContents' },
            	menuPartial: function() { return 'sumer/static/menu' }
			})
		}
	
		if (fs.existsSync(transliXmlPath)) {
        	var emptyTemplate = "static/empty"
			var config = {
   				xsltPath: 'sumer/xsl/transli.xsl',
   				sourcePath: transliXmlPath,
   				result: 'views/partials/sumer/' + transli + '.handlebars'
			}

			xslt4node.transform(config, function(err) {
            	if (err) {
   					console.log(err)
   					next()
				}

				config = {
   					xsltPath: 'sumer/xsl/glossary.xsl',
   					sourcePath: transliXmlPath,
   					result: 'views/partials/sumer/' + glossary + '.handlebars'
				}

				xslt4node.transform(config, function(err) {
                	if (err) {
	   					console.log(err)
	   					glossary = emptyTemplate
					}

					config = {
                    	xsltPath: 'sumer/xsl/title.xsl',
                    	sourcePath: transliXmlPath,
                    	result: 'views/partials/sumer/' + title + '.handlebars'
					}
	
					xslt4node.transform(config, function(err) {
                    	if (err) {
		  					console.log(err)
                        	title = emptyTemplate
						}

						if (!fs.existsSync(translaXmlPath)) {
				        	transla = emptyTemplate
                        	renderTrans()
                    	} else {
                        	config = {
   						   	xsltPath: 'sumer/xsl/transla.xsl',
   							sourcePath: translaXmlPath,
   						   	result: 'views/partials/sumer/' + transla + '.handlebars'
							}

							xslt4node.transform(config, function(err) {
                            	if (err) {
                               		console.log(err)
									 transla = emptyTemplate
								}
                             
								renderTrans()
							})
						}
					})
				})
			})
		} else next()
	}

	exports.growPdf = function(req, res) {
    	var trans = req.body.trans ? req.body.trans : '1.1.1'
    	var pdfPath = 'public/pdf/' + trans + '.pdf'
    
		if (fs.existsSync(pdfPath)) {
        	res.send([])
        	return
		}
    
		var transliHandlebarsPath = 'views/partials/sumer/c.' + trans + '.handlebars'
		var translaHandlebarsPath = 'views/partials/sumer/t.' + trans + '.handlebars'
		var glossaryHandlebarsPath = 'views/partials/sumer/g.' + trans + '.handlebars'
		var titleHandlebarsPath = 'views/partials/sumer/a.' + trans + '.handlebars'

		if (!fs.existsSync(transliHandlebarsPath)) {
        	res.status(500)
        	res.send([])
       	 	return
		}
    
		var transliPartial = fs.readFileSync(transliHandlebarsPath, 'utf8')
    	var translaPartial = fs.existsSync(translaHandlebarsPath) ? fs.readFileSync(translaHandlebarsPath, 'utf8') : null
    	var glossaryPartial = fs.existsSync(glossaryHandlebarsPath) ? fs.readFileSync(glossaryHandlebarsPath, 'utf8') : null
    	var titlePartial = fs.existsSync(titleHandlebarsPath) ? fs.readFileSync(titleHandlebarsPath, 'utf8') : null
    	var emptyPartial = fs.readFileSync('views/partials/sumer/static/empty.handlebars', 'utf8')
    	var markup = fs.readFileSync('views/sumerPdfGrower.handlebars', 'utf8')
    	var template = Handlebars.compile(markup)
    
		Handlebars.registerPartial('transliterationPartial', function() { return transliPartial })
    
		if (translaPartial)
        	Handlebars.registerPartial('translationPartial', function() { return translaPartial })
		else
    		Handlebars.registerPartial('translationPartial', function() { return emptyPartial })

			if (glossaryPartial)
        		Handlebars.registerPartial('glossaryPartial', function() { return glossaryPartial })
			else
    			Handlebars.registerPartial('glossaryPartial', function() { return emptyPartial })
    
				if (titlePartial)
        			Handlebars.registerPartial('titlePartial', function() { return titlePartial })
				else
        			Handlebars.registerPartial('titlePartial', function() { return emptyPartial })

					var html = template({});
    	var options = {
        	format: 'Letter',
        	orientation: 'landscape'
		}

		pdf.create(html, options).toFile(pdfPath, function(err, rez) {
        	if (err) {
            	console.log(err)
            	res.status(500)
			}

			res.send([])
		})
	}
} catch {
	exports.parseTrans = function(req, res) {
		const https = require('https')
		
		https.get('https://urtheaters.com/sumer/4.07.2', (resp) => {
			let html = ''
			
			resp.on('data', (chunk) => { html += chunk })
			
			resp.on('end', () => {
				res.send(html)
				
				// 		    	res.render('sumer', {
				// 		        	layout: 'boring',
				// 		 			transliterationPartial: function() { return 'sumer/static/empty' },
				// 		   			translationPartial: function() { return 'sumer/static/empty' },
				// 		   			glossaryPartial: function() { return 'sumer/static/empty' },
				// 		   			titlePartial: function() { return 'sumer/static/empty' },
				// 		        	tableOfContentsPartial: function() { return 'sumer/static/tableOfContents' },
				// 		        	menuPartial: function() { return 'sumer/static/empty' }
				// })
			})
		
		}).on("error", (err) => { console.log("Service Error: " + err.message) })

	}

	exports.growPdf = function(req, res) {
		res.render('spudandal', {
	        layout: 'boring'
	    })
	}
}
