
// smooth scrolling
    $('nav a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top -0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

  /* $('.me a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 65
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

  $('.right-articles a, .down-button a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 65
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
*/


      