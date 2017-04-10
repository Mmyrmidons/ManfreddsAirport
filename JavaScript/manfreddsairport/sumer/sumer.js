var xslt4node = require('xslt4node')
var fs = require('fs')

exports.parseTrans = function(req, res, next) {
	var transli = req.params.trans ? "c." + req.params.trans : "c.1.1.1"
	var transliXmlPath = 'sumer/transliterations/' + transli + '.xml'
	var transla = req.params.trans ? "t." + req.params.trans : "t.1.1.1"
	var translaXmlPath = 'sumer/translations/' + transla + '.xml'
	var glossary = transli.replace("c.", "g.")

	var renderTrans = function() {
		res.render('sumer', {
	   		transliterationPartial: function() { return transli },
	   		translationPartial: function() { return transla },
	   		glossaryPartial: function() { return glossary }
	   	})
	}
	
   	if (fs.existsSync(transliXmlPath)) {
		var config = {
   			xsltPath: 'sumer/xsl/yevvy.xsl',
   			sourcePath: transliXmlPath,
   			result: 'views/partials/' + transli + '.handlebars'
		}

		xslt4node.transform(config, function(err) {
   			if (err) {
   				console.log(err)
   				next()
   			}

   			config = {
   				xsltPath: 'sumer/xsl/poopy.xsl',
   				sourcePath: transliXmlPath,
   				result: 'views/partials/' + glossary + '.handlebars'
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
   						result: 'views/partials/' + transla + '.handlebars'
   					}
	
   					xslt4node.transform(config, function(err) {
   						if (err) {
		   					console.log(err)
		   					transla = "empty"
		   				}
		   			
		   				renderTrans()
		   			})
				} else {
					transla = "empty"
					renderTrans()
				}				
			})
 		})
	} else { next() }
}