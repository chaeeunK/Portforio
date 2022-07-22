$(document).ready(function(){


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


    var top1= $('#sc1').offset().top;
    var top2= $('#sc2').offset().top;
    var top3= $('#sc3').offset().top;
    var top4= $('.pu1').offset().top;
    var top5= $('.pu2').offset().top;
    var top6= $('.pu3').offset().top;
    var top7= $('.pu4').offset().top;
    var top8= $('#sc5').offset().top;
    var top9= $('#sc6').offset().top;

    var gap=150;


    $(window).scroll(function(){
        var h = $(window).scrollTop();
        if(h < 400){
            $(".fi").removeClass('on');
            $(".int").removeClass('on');
        }
        else if(h <= top2+gap){
            $(".fi").addClass('on');
            $(".int").addClass('on');
        }
        else if(h > top3-gap && h < top4-400){
            $(".fi").removeClass('on');
            $(".int").removeClass('on');
            $(".work1 .wtext > div h3").removeClass('on');
            $(".work1 .wtext > div p").removeClass('on');
            $(".work1 .wtext > div a").removeClass('on');
            $(".work2 .wtext > div h3").removeClass('on');
            $(".work2 .wtext > div p").removeClass('on');
            $(".work2 .wtext > div a").removeClass('on');
            $(".work3 .wtext > div h3").removeClass('on');
            $(".work3 .wtext > div p").removeClass('on');
            $(".work3 .wtext > div a").removeClass('on');
            $(".work4 .wtext > div h3").removeClass('on');
            $(".work4 .wtext > div p").removeClass('on');
            $(".work4 .wtext > div a").removeClass('on');
        }
        else if(h <= top4 + gap){
            $(".work1 .wtext > div h3").addClass('on');
            $(".work1 .wtext > div p").addClass('on');
            $(".work1 .wtext > div a").addClass('on');
        }
        else if(h <= top5 + gap){
            $(".work2 .wtext > div h3").addClass('on');
            $(".work2 .wtext > div p").addClass('on');
            $(".work2 .wtext > div a").addClass('on');
        }
        else if(h <= top6 + gap){
            $(".work3 .wtext > div h3").addClass('on');
            $(".work3 .wtext > div p").addClass('on');
            $(".work3 .wtext > div a").addClass('on');
        }
        else if(h <= top7 + gap){
            $(".work4 .wtext > div h3").addClass('on');
            $(".work4 .wtext > div p").addClass('on');
            $(".work4 .wtext > div a").addClass('on');
        }
        else if(h > top8-gap && h < top9-500){
            $(".work1 .wtext > div h3").removeClass('on');
            $(".work1 .wtext > div p").removeClass('on');
            $(".work1 .wtext > div a").removeClass('on');
            $(".work2 .wtext > div h3").removeClass('on');
            $(".work2 .wtext > div p").removeClass('on');
            $(".work2 .wtext > div a").removeClass('on');
            $(".work3 .wtext > div h3").removeClass('on');
            $(".work3 .wtext > div p").removeClass('on');
            $(".work3 .wtext > div a").removeClass('on');
            $(".work4 .wtext > div h3").removeClass('on');
            $(".work4 .wtext > div p").removeClass('on');
            $(".work4 .wtext > div a").removeClass('on');
            $(".cMail h3").removeClass('on');
            $(".cMail p").removeClass('on');
            $(".con_r .fig").removeClass('on');
        }
        else if(h < top9+gap){
            $(".cMail h3").addClass('on');
            $(".cMail p").addClass('on');
            $(".con_r .fig").addClass('on');
        }
    })
    
});
