var sumer = (function() {
    var onReady = function() {
		$('.transliterationPartial > div').each(function() {
 			var siblingIdArray = $(this).attr("id").split(".")
 			
 			if (siblingIdArray && siblingIdArray.length > 1) {
 				var sibling = $("#" + siblingIdArray[1])
 			
 				if ($(this).height() > sibling.height())
 					sibling.height($(this).height())
 				else
 					$(this).height(sibling.height())
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

			$('.dicLemma').each(function() {
				var baseThis = $(this).text().replace(regex, function(match) {
					return accentedChars[match]
				})
				
				if (inputVal.length < 2 || baseThis.indexOf(inputVal) > -1)
					$(this).parent().show()
				else
					$(this).parent().hide()
			})

		})
	}

	var lightPink = function(tag, id) {
		tag.style.color = 'lightpink';	
		idRoot = document.getElementById(id);

		for (i = 0; i < idRoot.childNodes.length; i++) {
			node = idRoot.childNodes[i];
			if (node.nodeName == 'DIV')
				node.style.color = 'lightpink';
		}
	}
	
	var mistyRose = function(tag, id) {
		tag.style.color = 'mistyrose';
		idRoot = document.getElementById(id);

		for (i = 0; i < idRoot.childNodes.length; i++) {
			node = idRoot.childNodes[i];
			if (node.nodeName == 'DIV')
				node.style.color = 'mistyrose';
		}
	
	}

	var gloss = function(lemma, pos, label) {
		$(".diakk").html("<div class='lemma'>" + lemma + ":</div><div class='def'><span class='pos'>" + pos + "</span>" + label + "</div>")
	}
	
    return {
        lightPink: lightPink,
        mistyRose: mistyRose,
        gloss: gloss,
		onReady: onReady
    }
})()

$(document).ready(function() {
	sumer.onReady()
});


