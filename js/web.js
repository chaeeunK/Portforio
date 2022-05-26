$(document).ready(function(){

    //나브 클릭시 이동
    // var menu = $('.mainM > li');
    // var contents = $('.box');
    // menu.click(function(e){

    //     var tg = $(this);
    //     var i = tg.index();
    //     var section = contents.eq(i);
    //     var tt = section.offset().top;
    //     $('html, body').stop().animate({scrollTop:tt},800);
    //     return false;
    // });

    var menuc = $('.sub li');
    var contentsc = $('.box2');
    menuc.click(function(e){
        e.preventDefault();
        var tg = $(this);
        var i = tg.index();
        var section = contentsc.eq(i);
        var tt = section.offset().top;
        $('html, body').stop().animate({scrollTop:tt},800);
    });

    $('.scr').click(function(e){
        e.preventDefault();
        var tc = $(this).index()
        var tg = $('.box').eq(tc);
        var tt = tg.offset().top;
        $('html, body').stop().animate({scrollTop:tt},800);
    });

    
    //모달1
    $(".moclick").click(function(){
        $(".modal").fadeIn();
    });
    $(".modal").click(function(){
        $(".modal").fadeOut();
    });

    $(".Skills li").click(function(e){
        e.preventDefault();
        $(".tool li").removeClass('on');
        var i = $(this).index();

        $('.tool li').fadeOut(0);
        $('.tool li').eq(i).fadeIn(0);

        });

    $(window).trigger('resize');
// Scroll effect end


    //포트폴리오 모니터 마우스오버 이벤트
    $(".moni").on("mouseenter", function(){
        let imgH=$(this).find("img").height();
        let caseH=$(this).height();
        $(this).find("img").stop().animate({
            top:-(imgH-caseH)
        },4000)
    });
    $(".moni").on("mouseleave", function(){
        $(this).find("img").stop().animate({
            top:0
        },2000)
    });

    //카드 뒤집기 모달
    $('.Back').click(function(){
        var image = $(this).find('img').attr('title');
        $('.DEmodal img').attr('src',image)
            $('.DEmodal').css({'display':'block'});
        });
        $('.DEmodal').click(function(){
            $('.DEmodal').css({'display':'none'});
        });



        //스크롤 이벤트
        // $(".top").each(function () {
        //     // 개별적으로 Wheel 이벤트 적용 mousewheel(IE/chrome/opera) DOMMouseScroll(FF)
        //     $(this).on("mousewheel DOMMouseScroll", function (e) {
        //         e.preventDefault();
        //         var delta = 0;
        //         /* IE */
        //         if (!event) event = window.event;
        //         //휠에 대한 정보 얻기 파이어폭스 외 IE/Chrome/Opera = wheelDelta
        //         if (event.wheelDelta) {
        //             delta = event.wheelDelta / 50;
        //             //평균 50~120 사이로 요소의 인식높이에 따라 다름(한 화면(height100%)기준일떄는 120
        //             if (window.opera) delta = -delta;
        //         //휠에 대한 정보 얻기 Mozilla FF = detail
        //         } else if (event.detail) delta = -event.detail / 3;
        //         var moveTop = null;
        //         // 마우스휠을 위에서 아래로
        //         if (delta < 0) {
        //             if ($(this).next() != undefined) {
        //                 moveTop = $(this).next().offset().top;
        //             }
        //         // 마우스휠을 아래에서 위로
        //         } else {
        //             if ($(this).prev() != undefined) {
        //                 moveTop = $(this).prev().offset().top;
        //             }
        //         }
        //         // 화면 이동 0.8초(800)
        //         $("html,body").stop().animate({
        //             scrollTop: moveTop + 'px'
        //         }, {
        //             duration: 300, complete: function () {
        //             }
        //         });
        //     });
        // });
     
});
