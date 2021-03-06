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
            var leftBoundary = '0px'
            var left = disenchanter.css('left') == leftBoundary ? 1024 : leftBoundary
            var symbol = disenchanter.css('left') == leftBoundary ? '+' : '-'
            
            $('html, body').addClass('vilstrack')

            disenchanter.animate({
                left: left
            }, 377, function() {
                $('.firedrake').text(symbol)
                
                if (disenchanter.css('left') == leftBoundary) {
                    disableInteractions()
                } else {
                    $('html, body').removeClass('vilstrack')
                    enableInteractions()
                }
            })
            
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
                $('html, body').removeClass('vilstrack')
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
        
        $('.myconid').click(function(event) {
            var trans = location.pathname.replace(/(\/sumer\/?)/g, '')

            $('.opinicus').addClass('gloomwing')
            obliviax()
            
            if (!trans)
                trans = '1.1.1'
            
            $.post({
                url: '/sumer/pdf',
                data: {trans: trans}
            }).done(function() {
                $('.opinicus').removeClass('gloomwing')
                window.open('../pdf/' + trans + '.pdf', '_blank')
            }).fail(function(error) {
                $('.opinicus').removeClass('gloomwing')
                console.log(error.statusText)                
            })
            
            event.preventDefault()
        })

        var firstTranslit = $('.transliterationPartial span[title]').first()
                
        if (firstTranslit) {
            var firstTranslitTitle = firstTranslit.attr('title')

            if (firstTranslitTitle) {
                var firstTranslitParts = firstTranslitTitle.split(',')
        
                if (firstTranslitParts && firstTranslitParts.length > 2)
                    gloss($.trim(firstTranslitParts[0]), $.trim(firstTranslitParts[1]), $.trim(firstTranslitParts[2]))
            }
        }
        
        var hollyphantIndex = 398;
        
        $('.hollyphant > div').draggable({
            cursor: "grab",
            start: function(event, ui) {
                $(this).css('z-index', hollyphantIndex++)
            }
        })
        
        enableInteractions()
    }
    
    var enableInteractions = function() {
        $('.transliterationPartial span[title]').on('mouseover', glosser)
        $('.transliterationPartial .persephone').on('mouseover', highlights.lightSalmon)
        $('.transliterationPartial .persephone').on('mouseout', highlights.mistyRose)
        $('.translationPartial .persephone').on('mouseover', highlights.lightPink)
        $('.translationPartial .persephone').on('mouseout', highlights.mistierRose)
        $('input').prop('disabled', false)
    }
    
    var disableInteractions = function() {
        $('.transliterationPartial span[title]').off('mouseover')
        $('.transliterationPartial .persephone').off('mouseover')
        $('.transliterationPartial .persephone').off('mouseout')
        $('.translationPartial .persephone').off('mouseover')
        $('.translationPartial .persephone').off('mouseout')
        $('input').prop('disabled', true)
    }
    
    var obliviax = function() {
        var obliviaxNode = $('.obliviax')
        
        obliviaxNode.animate({
            opacity: obliviaxNode.css('opacity') > 0.6 ? 0.6 : 0.9
        }, 1800, function() {
            if ($('.opinicus').hasClass('gloomwing'))
                obliviax()
            else
                obliviaxNode.css('opacity', 1)
        });
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

    var createRegex = function(mNode) {
        var regexString = ''
        
        mNode.find('span[title]').each(function(i, tTag) {
            var title = $(tTag).attr('title')

            if (title) {
                var lemma = title.split(',')
                
                if (lemma && lemma.length > 0 && lemma[0].length > 0) {
                    regexString += '|'                    
                    regexString += lemma[0]
                }
            }
        })
        
        regexString += '$'
        
        return RegExp(regexString.replace(/^\|/, '^'))
    }

    var highlights = {
        highlightGlossaryWords: function(regex) {
            $('.dicLemma').each(function(i, tTag) {
                var word = $(tTag).text()

                if (word && word.match(regex))
                    $(tTag).parent().addClass('githzerai')
                else
                    $(tTag).parent().removeClass('githzerai')
            })
            
        },
    
        colorizeTransli: function(mThis, makeMisty) {
            var oldColor = makeMisty ? 'lightsalmon' : 'mistyrose'
            var newColor = makeMisty ? 'mistyrose' : 'lightsalmon'
            var idParts = mThis.parent().attr('id') ? mThis.parent().attr('id').split('.') : null
        
            mThis.removeClass(oldColor).addClass(newColor)

            if (idParts && idParts.length > 1)
                $('#' + idParts[1]).removeClass(oldColor).addClass(newColor)
        },
    
        lightSalmon: function() {
            highlights.colorizeTransli($(this), false)
            highlights.highlightGlossaryWords(createRegex($(this)))
        },

        mistyRose: function() {
            highlights.colorizeTransli($(this), true)
            $('#glossaryTable tr').removeClass('githzerai')
        },
        
        colorizeTransla: function(mThis, makeMisty) {
            var oldColor = makeMisty ? 'lightpink' : 'mistyrose'
            var newColor = makeMisty ? 'mistyrose' : 'lightpink'
            
            mThis.removeClass(oldColor).addClass(newColor)
        
            var transli = $('.transliterationPartial > div[id$="' + mThis.attr('id') +  '"]')
        
            if (transli)
                transli.find('.persephone').removeClass(oldColor).addClass(newColor)
        },

        lightPink: function() {
            var selectorString = '.transliterationPartial > div[id$="' + $(this).attr('id') +  '"]'
            var transliNode = $(selectorString)
            
            highlights.colorizeTransla($(this), false)
            highlights.highlightGlossaryWords(createRegex(transliNode))
        },
    
        mistierRose: function() {
            highlights.colorizeTransla($(this), true)
            $('#glossaryTable tr').removeClass('githzerai')
        }
    }
    
	var glosser = function() {
        var title = $(this).attr('title')
        
        if (title) {
            var titleParts = title.split(',')
            
            if (titleParts && titleParts.length > 2)
                gloss($.trim(titleParts[0]), $.trim(titleParts[1]), $.trim(titleParts[2]))
        }
	}

	var gloss = function(lemma, pos, label) {
		$(".diakk").html("<div class='lemma'>" + lemma + ":</div><div class='def'><span class='pos'>" + pos + "</span>" + label + "</div>")
	}
	
    return {
		onReady: onReady
    }
})()

$(document).ready(function() {
	sumer.onReady()
})