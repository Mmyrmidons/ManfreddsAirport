var myrkridian = (function() {
    var onReady = function() {
        $('.kenku audio').bind('ended', function() {
            var songPlaying = $('.kenku a:contains(' + $('.kenku audio source').attr('src') + ')')
            var songIndex =  songPlaying.index('a')
            var kenkus = $('.kenku a')

            kenkus[(songIndex + 1) % kenkus.length].click()
        });

        $('.kenku a').click(function (event) {
            $('.vodyanoi').removeClass('vodyanoi')
            $(this).addClass('vodyanoi')
            $('.kenku audio source').attr('src', $(this).text())
            $('.kenku audio')[0].load()
            $('.kenku audio')[0].play()

            event.preventDefault()
        })
    }

    return {
        onReady: onReady
    }
})()

$(document).ready(function() {
    myrkridian.onReady()
})
