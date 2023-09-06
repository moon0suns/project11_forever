$(function () {



    $('.main_full').fullpage({
        anchors: ['intro', 'charge', 'service', 'notice', 'about'],
        responsiveWidth: 768,
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            if (idx != 1) {
                if ($(window).width() > 767) {
                    $('nav').addClass('on');
                    $('.header').addClass('on');
                } else {
                    $('.header').addClass('active');
                }


            } else {

                if ($(window).width() > 767) {
                    $('nav').removeClass('on');
                    $('.header').removeClass('on')
                } else {
                    $('.header').removeClass('active');
                }
            }


            if (idx == 1) {
                $('.to_top').fadeOut();
            } else {
                $('.to_top').fadeIn();
            }

        },
        onLeave: function (idx, nIdx, dir) {
            console.log(idx, nIdx, dir);
            $('.aside li').eq(nIdx - 1).addClass('on').siblings().removeClass('on');

        }
    });


    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        speed: 600,
        dots: true,

        on: {
            slideChangeTransitionStart: function () {
                console.log("0", this.realIndex);
                $('.main_visual .dots li').eq(this.realIndex).addClass('on').siblings().removeClass('on');
            }
        },

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',


        pagination: {
            el: ".sbar",
            type: "progressbar",
        },
    });


    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });

    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    });


    $('.main_service .box').on('mouseenter', function () {
        $(this).addClass('on').siblings().removeClass('on');
    })

    const noticeSlide = new Swiper('.notice_wrap', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 40,
        autoplay: {
            delay: 4000,
        },

        pagination: {
            el: ".sbar",
            type: "progressbar",
        },

        breakpoints: {
            768: {
                slidesPerView: 3,
            },

        },
    })

    $('.main_notice .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    });

    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    });



    $('#f1').on('change', function () {
        const lnk = $(this).val();
        console.log(lnk, '')
        lnk && window.open(lnk);
    })



    $('.header .gnb>ul>li').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).find('.sub').stop().slideToggle();
        }

    });

    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    });


    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    })

})


