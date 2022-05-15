$(function(){

    $('#active_menu_btn').on('click' , function(){
        $('#main_menu ul , #nav .navbar-brand').toggleClass('active')
    })

    //banner slider start

    $('.banner-slider').slick({
        prevArrow: $('.banner_slider_arrow_left'),
        nextArrow: $('.banner_slider_arrow_right')
    })
    //banner slider end
    // service slider
    $('.service_slider').slick({
        arrows: false,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            },
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]

    })
    //counter up start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    //counter up end

    //blog slider
    $('.blog_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        prevArrow:$('.blog_slider_arrow_left'),
        nextArrow:$('.blog_slider_arrow_right'),
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
    })

    //testimonial slider
    $('.testimonial_content').slick({
        arrows: false,
        fade: true,
        asNavFor: '.testimonial_slider',
    })

    $('.testimonial_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        asNavFor: '.testimonial_content',
        prevArrow:$('.testimonial_slider_arrow_left'),
        nextArrow:$('.testimonial_slider_arrow_right'),
        
    })
    

    //card slider 
    $('.card_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        prevArrow: $('.card_slider_arrow_left'),
        nextArrow: $('.card_slider_arrow_right'),
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            },
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }

            

        }
    ]
    })

    $('.testimonial_content').slick({
        arrows: false,
        fade: true,
        asNavFor: '.testimonial_slider',
    })

    $('.testimonial_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        asNavFor: '.testimonial_content',
        prevArrow:$('.testimonial_slider_arrow_left'),
        nextArrow:$('.testimonial_slider_arrow_right'),
    })
    
})