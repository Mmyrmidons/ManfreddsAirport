var sumer = (function() {
    var onReady = function() {
		$('.transliterationPartial > div').each(function() {
            var siblingId = $(this).attr("id")

            if (siblingId) {
                var siblingIdArray = siblingId.split(".")
 			
                if (siblingIdArray && siblingIdArray.length > 1) {
 				   var sibling = $("#" + siblingIdArray[1])
 			
                   if ($(this).height() > sibling.height())
 					  sibling.height($(this).height())
                    else
 					  $(this).height(sibling.height())
                }
            }
		})
		
		var lemmaeSoFar = []
		
		$('.dicLemma').each(function() {
			if (jQuery.inArray($(this).text(), lemmaeSoFar) > -1)
				$(this).parent().remove()
			else
				lemmaeSoFar.push($(this).text())
		})
		
		$('.dracolisk').keyup(function() {
			var inputVal = $(this).val()		
			var accentedChars = {
				"à": "a", "á": "a", "è": "e", "é": "e", "í": "i", "ì": "i", "ò": "o", "ó": "o", "ù": "u", "ú": "u",
				"À": "A", "Á": "A", "È": "E", "É": "E", "Í": "I", "Ì": "I", "Ò": "O", "Ó": "O", "Ù": "U", "Ú": "U"
			}
			var regex = /[àáèéíìòóùúÀÁÈÉÍÌÒÓÙÚ]/g
            var wordArray = []

			$('.dicLemma').each(function() {
				var baseThis = $(this).text().replace(regex, function(match) {
					return accentedChars[match]
				})
				
				if (inputVal.length < 2 || baseThis.indexOf(inputVal) > -1 || $(this).siblings('.dicPos').text().indexOf(inputVal) > -1 || $(this).siblings('.dicLabel').text().indexOf(inputVal) > -1) {
					$(this).parent().show()
                    wordArray.push($(this).text())
                } else $(this).parent().hide()
			})

            filterTrans(wordArray)
            
            if (inputVal.length > 1)
                $('html, body').animate({scrollTop: 0}, 500);
        })
        
        $('.firedrake').click(function(event) {
            var disenchanter = $('.disenchanter')
            var left = disenchanter.css('left') == '464px' ? 1024 : 464
            var symbol = disenchanter.css('left') == '464px' ? '+' : '-'
            
            disenchanter.animate({
                left: left
            }, 377, function() {
                $('.firedrake').text(symbol)
                
                if (disenchanter.css('left') == '464px') {
                    $('.pedipalp').addClass('vilstrack')
//                    $('.kampfult').css({visibility: 'visible'})
//
//                    $('html, body').css({
//                        overflow: 'hidden',
//                        height: '100%'
//                    })
                } else $('.pedipalp').removeClass('vilstrack')
            })


//            $('.tarrasque, .transliterationPartial, .translationPartial, .glossaryPartial').animate({
//                opacity: 0.2
//            }, 377, function() {
//                disenchanter.css({'z-index': 100})
//            })
            
            event.preventDefault()
        })
        
        $('.sirine a').click(function(event) {
            var nthP = $('.slaad p:eq(' + $(this).index() + ')')
            
            $('.slaad').animate({
                scrollTop: nthP.offset().top
            }, 700)
            
            event.preventDefault()
        })

        $('.slaad a').click(function(event) {
            var href = $(this).attr('href')
            
            $('.disenchanter').animate({
                left: 1024
            }, 500, function() {
                location.href = href
            })
            
            event.preventDefault()
        })
        
        $('#glossaryTable tr').mouseenter(function(event) {
            $(this).addClass('githzerai')
//            filterTrans([$(this).find('.dicLemma').text()])
        })

        $('#glossaryTable tr').mouseleave(function(event) {
            $(this).removeClass('githzerai')
        })
        
//        $('#glossaryTable').mouseleave(function(event) {
//            filterTrans(['x'])
//        })
        
        var firstLemma = $('.transliterationPartial span[title]').first();
        
        if (firstLemma) {
            var firstLemmaTitle = firstLemma.attr('title')

            if (firstLemmaTitle) {
                var firstLemmaParts = firstLemmaTitle.split(' ')
        
                if (firstLemmaParts && firstLemmaParts.length > 2)
                    gloss(firstLemmaParts[0], firstLemmaParts[1], firstLemmaParts[2])
            }
        }
    }
    
    var filterTrans = function(wordArray) {
        $('.transliterationPartial div[id^="t"]').each(function() {
            var titles = '-'
            var translationId = $(this).attr('id')
            var translationIdArray = translationId.split('.')
                
            $(this).find('span[title]').each(function(i, tTag) {
                titles += $(tTag).text() + '-'
            })
                        
            if (translationIdArray && translationIdArray.length > 1) {
                var correspondingTranslation = $('#' + translationIdArray[1])
				var match = false
                
                for (var key in wordArray) {                    
                    var regex = new RegExp('[-()]{1}' + wordArray[key] + '[-()]{1}', "g");

                    if (wordArray[key].length < 2 || titles.match(regex)) {
                        match = true
                        break
                    }
                }

                if (match) {
                    $(this).show()
                    correspondingTranslation.show()
                } else {
                    $(this).hide()
                    correspondingTranslation.hide()                    
                }
            } else $(this).show()
        })            
    }

    var highlightGlossaryWords = function(regexString) {
        $('.dicLemma').each(function(i, tTag) {
            var word = $(tTag).text()
                
            if (word && word.match(regexString))
                $(tTag).parent().addClass('githzerai')
            else
                $(tTag).parent().removeClass('githzerai')     
        })
    }
    
    var createRegexString = function(mNode) {
        var regexString = ''
        
        mNode.find('span[title]').each(function(i, tTag) {
            var words = $(tTag).text()
            
            if (words)
                regexString += words.replace(/-/g, '|')
        })
        
        return regexString
    }
    
	var lightSalmon = function(tag, id) {
        var mTag = $(tag)
        mTag.css({color: 'lightsalmon'})
        
        if (id)
            $('#' + id).css({color: 'lightsalmon'})
        
        highlightGlossaryWords(createRegexString(mTag))
    }

    var lightPink = function(tag, id) {
		tag.style.color = 'lightpink';	
		idRoot = document.getElementById(id);

        var regexString = ''
                
		for (i = 0; i < idRoot.childNodes.length; i++) {
			node = idRoot.childNodes[i];
			if (node.nodeName == 'DIV') {
				node.style.color = 'lightpink';
                regexString += createRegexString($(node))
            }
		}

        highlightGlossaryWords(regexString)
    }
	
	var mistyRose = function(tag, id) {
		tag.style.color = 'mistyrose';
		idRoot = document.getElementById(id);

		for (i = 0; i < idRoot.childNodes.length; i++) {
			node = idRoot.childNodes[i];
			if (node.nodeName == 'DIV')
				node.style.color = 'mistyrose';
		}
	
        $('#glossaryTable tr').removeClass('githzerai')
	}

    var mistierRose = function(tag, id) {
        tag.style.color = 'mistyrose';
		idRoot = document.getElementById(id);
        
        if (idRoot)
            idRoot.style.color = 'mistyrose'
        
        $('#glossaryTable tr').removeClass('githzerai')
	}

	var gloss = function(lemma, pos, label) {
		$(".diakk").html("<div class='lemma'>" + lemma + ":</div><div class='def'><span class='pos'>" + pos + "</span>" + label + "</div>")
	}
	
    return {
        lightSalmon: lightSalmon,
        lightPink: lightPink,
        mistyRose: mistyRose,
        mistierRose: mistierRose,
        gloss: gloss,
		onReady: onReady
    }
})()

$(document).ready(function() {
	sumer.onReady()
});