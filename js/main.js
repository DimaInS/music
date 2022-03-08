$(function () {
	let header = $('#header');
    let headerH;
    let intro = $('#about');
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        headerH = header.innerHeight();
        if ( scrollPos > introH) {
            header.addClass('background');
        } else {
            header.removeClass('background'); 
        }
	});
	



    $ ('[data-scroll]').on('click',function(event) {
        event.preventDefault();
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        $('html,body').animate( {
            scrollTop: elementOffset - 64
        } ,700 );
	}); 
	



	$('.events__box').slick({
		slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
     prevArrow: '<button type="button" class="slick-prev"><img src="images/events/prev.png" alt=""></button >',
     nextArrow: '<button type="button" class="slick-next"><img src="images/events/next.png" alt=""></button>',
		responsive:[
            {
                breakpoint: 1320,
                settings: {
                    slidesToShow: 2,
                   
                }
            },{

              breakpoint: 850,
              settings: {
                slidesToShow: 1
              }
            },{

              breakpoint: 500,
              settings: {
                dots: true,
                slidesToShow: 1,
                arrows: false
              }
            }

        ]
       
		
    });
    
	$('.header__burger').click(function(event){
		$('.header__list').toggleClass('header__list--active');
	})
	$('.header__link').click(function (event) {
		$('.header__list.header__list--active').removeClass('header__list--active');
	})
});