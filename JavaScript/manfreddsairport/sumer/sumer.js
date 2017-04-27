var xslt4node = require('xslt4node')
var fs = require('fs')

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
            tableOfContentsPartial: function() { return 'sumer/static/tableOfContents' }
	   	})
	}
	
   	if (fs.existsSync(transliXmlPath)) {
		var config = {
   			xsltPath: 'sumer/xsl/yevvy.xsl',
   			sourcePath: transliXmlPath,
   			result: 'views/partials/sumer/' + transli + '.handlebars'
		}

		xslt4node.transform(config, function(err) {
   			if (err) {
   				console.log(err)
   				next()
   			}

   			config = {
   				xsltPath: 'sumer/xsl/poopy.xsl',
   				sourcePath: transliXmlPath,
   				result: 'views/partials/sumer/' + glossary + '.handlebars'
   			}

   			xslt4node.transform(config, function(err) {
	   			if (err) {
	   				console.log(err)
	   				glossary = "empty"
		   		}

		   		if (fs.existsSync(translaXmlPath)) {
					config = {
   						xsltPath: 'sumer/xsl/manny.xsl',
   						sourcePath: translaXmlPath,
   						result: 'views/partials/sumer/' + transla + '.handlebars'
   					}
	
   					xslt4node.transform(config, function(err) {
   						if (err) {
		   					console.log(err)
		   					transla = "empty"
		   				}

                        config = {
   					        xsltPath: 'sumer/xsl/gemineye.xsl',
                            sourcePath: transliXmlPath,
   					        result: 'views/partials/sumer/' + title + '.handlebars'
   					    }

                        xslt4node.transform(config, function(err) {
   						   if (err) {
                               console.log(err)
                               transla = "static/empty"
                           }
		   				
                            renderTrans()
                        })
		   			})
				} else {
					transla = "static/empty"
					renderTrans()
				}				
			})
 		})
	} else { next() }
}