(function($){
    'use strict';

    //Back to top
    $(window).scroll(function() {
		if ($(this).scrollTop() != 0) {
		 	$('.back-to-top').fadeIn();
		} else {
		 	$('.back-to-top').fadeOut();
		}
	 });
	jQuery('.footer__back-to-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, 700);
      return false;
    });
	//End back to top

	//Scroll to menu
    $('.menu-item a[href^="#"]').click(function(e){
        e.preventDefault();
        var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop:$(the_id).offset().top  
        }, 800);
    });

    //List - grid video archive

    $('.list-grid-video .grid-icon').click(function(e){
        $('.list-grid-video .list-icon').removeClass('active');
        $('.list-grid-video .grid-icon').addClass('active');

        $('.grid-list-custom-video').removeClass('col-lg-6');
        $('.grid-list-custom-video').addClass('col-lg-4');
        return false;
    });

    $('.list-grid-video .list-icon').click(function(e){
        $('.list-grid-video .grid-icon').removeClass('active');
        $('.list-grid-video .list-icon').addClass('active');

        $('.grid-list-custom-video').removeClass('col-lg-4');
        $('.grid-list-custom-video').addClass('col-lg-6');
        return false;
    });

    //List - grid video feature 2 archive
    
    $('.list-grid-video-full .grid-icon').click(function(e){
        $('.list-grid-video-full .list-icon').removeClass('active');
        $('.list-grid-video-full .grid-icon').addClass('active');

        $('.grid-list-custom-video').removeClass('col-lg-6');
        $('.grid-list-custom-video').addClass('col-lg-3');
        return false;
    });

    $('.list-grid-video-full .list-icon').click(function(e){
        $('.list-grid-video-full .grid-icon').removeClass('active');
        $('.list-grid-video-full .list-icon').addClass('active');

        $('.grid-list-custom-video').removeClass('col-lg-3');
        $('.grid-list-custom-video').addClass('col-lg-6');
        return false;
    });


    // Bootstrap modal center
    $('.modal-dialog').on('click tap', function(e){
        if ($(e.target).hasClass('modal-dialog')) {
            $('.modal').modal('hide');
        }
    })

    //Member popup - Get data via Ajax request
    $('a[href^="#popup"]').click(function(e){
        e.preventDefault();
        ajax.url;
        var idPerson = $(this).attr('href').replace( /^\D+/g, '');
        $('#personal-detail').modal('show');
        $('#personal-detail .modal-body').html('');

    });

})(jQuery);