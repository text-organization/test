$(function(){

    // ハンバーガーメニューの開閉
    $('.hamburger').click(function(){
        if($('.hamburger').hasClass('active')){
            $('.nav').removeClass('active');
            $(this).removeClass('active');
        } else {
            $('.nav').addClass('active');
            $(this).addClass('active');
        }
    })

    $('.nav a').click(function(){
        if($('.hamburger').hasClass('active')){
            $('.nav').removeClass('active');
            $('.hamburger').removeClass('active');
        } else {
            $('.nav').addClass('active');
            $('.hamburger').addClass('active');
        }
    })

	// Featureセクション タブの選択
    $('.menu-list').click(function(){
        var num = $(this).index();

        $('.active').removeClass('active');
        $(this).addClass('active');
        $('.features li').eq(num).addClass('active');

    })

    // FAQ 開閉
    $('#faq dt').click(function(){

        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $(this).next().removeClass('open');
        } else {
            $(this).addClass('open');
            $(this).next().addClass('open');
        }

    })

    //// slideIn animation

    $('.about-2 .inner .text').on('inview',function(){
        $('.about-2 .illust .t-circle').addClass('circleIn');
        $('.about-2 .illust .os-circle').addClass('circleIn');
        $('.about-2 .illust .ol-circle').addClass('circleIn');
    })

    $('#fee').on('inview',function(){
        $(this).addClass('turnIn3');
    })

    $('#fee .monthly-fee .price').on('inview',function(){
        $(this).parent().addClass('changeScale2');
    })


});