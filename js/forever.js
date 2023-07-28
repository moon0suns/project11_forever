$(function () {



    $('.main_full').fullpage({
        anchors: ['intro', 'charge', 'service', 'notice', 'about'],
        responsiveWidth: 768,
        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            //만약에 2번쨰에 오면... nav li class on을 붙이고 나머지 a는 뗀다.
            // $('nav li a').removeClass('on');
            if (idx == 2 || idx == 3 || idx == 4 || idx == 5 || idx == 6) {
                //$('nav li').eq(1).find('a').addClass('on');

                if ($(window).width() > 767) {
                    $('nav').addClass('on');
                    $('.header').addClass('on');
                }


            } else {

                if ($(window).width() > 767) {
                    $('nav').removeClass('on');
                    $('.header').removeClass('on')
                }
            }


            if (idx == 1) {
                $('.to_top').fadeOut();
            } else {
                $('.to_top').fadeIn();
            }




            // if (idx == 4) {
            //     //$('nav li').eq(1).find('a').addClass('on');
            //     $('nav').addClass('on')
            // } else {
            //     $('nav').removeClass('on')
            // }
        },
        onLeave: function (idx, nIdx, dir) {
            console.log(idx, nIdx, dir);
            // $('nav li').eq(nIdx - 1).addClass('on').siblings().removeClass('on');
            $('.aside li').eq(nIdx - 1).addClass('on').siblings().removeClass('on');

        }
        // navigation: true,
        // navigationPosition: 'left',
        // navigationTooltips: ['첫페이지', '두페이지']
    });


    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        // 💫스와이퍼
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
            //disableOnInteraction: false,
        },

        pagination: {
            el: ".sbar",
            type: "progressbar",
        },

        // 반응형갔을때
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



    // 📳 반응형

    // 2 서부메뉴 누르면 나오게
    $('.header .gnb>ul>li').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $(this).find('.sub').stop().slideToggle();
        }

    });

    // 3 클릭햇을때 메뉴 나오게
    $('.mopen').on('click', function () {
        $(this).toggleClass('on')
        $('.gnb').toggleClass('on')
    });


    //pc버전에서 오류작동 잡기
    $(window).on('resize', function () {
        $('.header .gnb').removeClass('on');
        $('.sub').removeAttr('style');
    })

})


