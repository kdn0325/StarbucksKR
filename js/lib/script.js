$(document).ready(function(){

    var $gnb = $('#gnb'),
       $firstMenu = $('.gnb_nav_1depth>li'),
       $subblock =$firstMenu.find('.sub_block');
    
    // $firstMenu.mouseover(function(){
    //     $gnb.stop().slideDown().animate({height:'600px'},1000);
    // }).mouseout(function(){
    //     $gnb.stop().animate({height:'66px'});
    // });
    $firstMenu.hover(function(){
       $gnb.stop().animate({height:'600px'},1000);
       $(this).find('.sub_block').stop().slideDown();
    },function(){
        $gnb.stop().animate({height:'66px'});
        $(this).find('.sub_block').stop().slideUp();
});
//mobile nav animate
  $('.ico_menu').on('click',function(){
      $('.tab_sub_wrap').show().animate({
          right:0
      },1000);
  });
  $('.side_close>a').on('click', function(){
      $('.tab_sub_wrap').animate({ 
          right: '-' + 100 + '%',
      },2000);
});
// 2depth slide down
  $('.tab_nav >ul >li, .tab_nav>ul>li>ul>li').hide();
  $('.tab_nav ul li.tab_nav_tit').show();

  $('.tab_nav>ul>li.tab_nav_tit>a').click(function(e){
      $(this).parent().siblings().stop(true, true).slideToggle();
      $(this).toggleClass('arrow_up');
  });
  $('.tab_nav>ul>li>a').click(function (e) {

      $(this).siblings().children().stop(true, true).slideToggle();
      $(this).children().toggleClass('arrow_up');
  //e.preventDefault();
});
// 3depth slide down
  $('.tab_sub_tit>ul').hide();
  $('.tab_sub_tit>a').click(function(e){
      $(this).siblings().stop(true,true).slideToggle();
      $(this).toggleClass('arrow_up');
  });
  $('.tab_tit_nav>li>a').click(function(e){
      $(this).children().stop(true).slideDown();
      $(this).children().toggleClass('arrow_up');
  });
});


// news : 공지 사항
   const newsBanner=$('.notice>li');
   let current=0;
   let newsInterval;

   newsSlide();
   function newsSlide(){
       newsInterval=setInterval(function(){
           let prev=newsBanner.eq(current);
           newsMove(prev, 0, '-100%');
           current++;
           if(current==7){current=0}
           let next=newsBanner.eq(current);
           newsMove(next, '100%', 0);
       },2000);
   }
   function newsMove(tg, start, end){
       tg.css("top", start).stop().animate({top:end},500)
   }

   $('.notice_wraps').hover(function(){
       clearInterval( newsInterval);
   },function(){
       newsSlide();
});

//promotion

/* 프로모션 슬라이드 */
let prom_cnt = $(".slider_item>li").length;
const prom_first = $(".slider_item>li:first").clone();
const prom_last = $(".slider_item>li:last").clone();
prom_first.insertAfter(".slider_item>li:last");
prom_last.insertBefore(".slider_item>li:first");

let click_over = 1; //반복 클릭 방지
let selected_item = 1; // 슬라이드 순서
let slide_x = -695;  // 슬라이드 이동 값
let slide_start = 0; // start : 1 stop : 0
let slide_timerId = 0;


/* 슬라이드 버튼 클릭 & 호버 기능 시작 */
init();

function init(){
    let toggle_btn = false;

    if(slide_timerId != 0){
        $(".btn_prom>img").attr('src', 'img/btn_prom_down.png');
        clearInterval(slide_timerId);
        slide_timerId = 0;
    }
    else{
        sliding_init();
        $(".btn_prom>img").attr('src', 'img/btn_prom_up.png');
    }
}

$(".promote_down_ico").click(function(){
    $(".promotion_wrap").stop().slideToggle();
})

$(".slider_left_mask>a").click(function(){
    sliding_left();
})

$(".slider_right_mask>a").click(function(){
    sliding_right();
})

$(".slider_toggle").click(function(){
    $(this).toggleClass('on');
    if(slide_timerId === 0){
        slide_timerId = setInterval(function(){
            sliding_right()
        }, 3000);

    }
    else{
        clearInterval(slide_timerId);
        slide_timerId = 0;
    }
})

$(".select_box>span").eq(0).click(function(){
    if(click_over != 0){
        click_over = 0;
        slide_x=-695;
        fn_slide(slide_x);
        selected_item = 1;
        focus_effect(selected_item);
    }
})

$(".select_box>span").eq(1).click(function(){
    if(click_over != 0){
        click_over = 0;
        slide_x=-1524;
        fn_slide(slide_x);
        selected_item = 2;
        focus_effect(selected_item);
    }
})

$(".select_box>span").eq(2).click(function(){
    if(click_over != 0){
        click_over = 0;
        slide_x=-2353;
        fn_slide(slide_x);
        selected_item = 3;
        focus_effect(selected_item);
    }
})

$(".slider_item>li>img").mouseover(function(){
    clearInterval(slide_timerId);
})

$(".slider_item>li>img").mouseout(function(){
    if(slide_timerId != 0){
        clearInterval(slide_timerId);
        slide_timerId = setInterval(function(){
            sliding_right()
        }, 3000);
    }
})

$(".slider_right_mask>a").mouseover(function(){
    clearInterval(slide_timerId);
})


$(".slider_right_mask>a").mouseout(function(){
    if(slide_timerId != 0){
        clearInterval(slide_timerId);
        slide_timerId = setInterval(function(){
            sliding_right()
        }, 3000);
    }
})

$(".slider_left_mask>a").mouseout(function(){
    if(slide_timerId != 0){
        clearInterval(slide_timerId);
        slide_timerId = setInterval(function(){
            sliding_right()
        }, 3000);
    }
})

$(".slider_left_mask>a").mouseover(function(){
    clearInterval(slide_timerId);
})

$(".slider_item>li>a").mouseout(function(){
    if(slide_timerId != 0){
        clearInterval(slide_timerId);
        slide_timerId = setInterval(function(){
            sliding_right()
            }, 3000);
    }
})

$(".slider_item>li>a").mouseover(function(){
    clearInterval(slide_timerId);
})
/* 슬라이드 버튼 클릭 & 호버 기능 끝 */


/* 슬라이드 관련 함수 시작 */
function sliding_init(){ 
    slide_x = -695; //슬라이드 이동 값 초기화
    selected_item = 1; //슬라이드 순서 초기화
    $('.slider_item').css({'left' : '-696px'}); // 첫 번째 슬라이드로 초기화
    $(".slider_item>li").css({opacity : '0.22'}); // 슬라이드 이동 효과 초기화
    $(".slider_item>li").eq(1).css({opacity : '1'});

    slide_timerId = setInterval(function(){
       sliding_right()
    }, 3000);
    $(".slider_controller>span").eq(0).addClass('on');
}


function sliding_left(){ //슬라이드 왼쪽 이동
    if(click_over != 0){
        click_over = 0;
        slide_x+=829;
        fn_slide(slide_x);
        focus_effect(--selected_item);
    }
}

function sliding_right(){ //슬라이드 오른쪽 이동
    if(click_over != 0){
        click_over = 0;
        slide_x-=829;
        fn_slide(slide_x);
        focus_effect(++selected_item);
    }
}

function fn_slide(x){ //슬라이드 이동 애니메이션
    // PC : margin-left : -695 -> -1524 -> -2353
    // 이동 : 819

    $(".slider_item").stop().animate({'left' : x + 'px'}, 600, 'easeOutCirc', () => {

        if(x === -3182){
            slide_x = -695;
            $(".slider_item").css({'left' : slide_x + 'px'});
        }
        else if(x === 134){
            slide_x = -2353;
            $(".slider_item").css({'left' : slide_x + 'px'});
        }
        click_over = 1;
    });
}

function focus_effect(selected){ //슬라이드 이동 효과
    
    if( selected > 0 && selected < 4){
        setTimeout(() => {
            $(".slider_item>li").css({opacity : '0.22'});
            $(".slider_item>li").eq(selected).css({opacity : '1'});
        }, 500); 
        $(".select_box>span").eq(selected-1).toggleClass('on').siblings().removeClass('on');
    }
    else if( selected <= 0){
        selected_item = 3;
        focus_effect(selected_item);
    }
    else if( selected > 3){
        selected_item = 1;
        focus_effect(selected_item);
    }
}
/* 프로모션 슬라이드 끝*/

// section1
$(function(){
    function s1Ani(){
        $('.section1_img_wrap>.img_wrap3>img').stop().delay(600).animate({opacity:1},1000,function(){
            $('.section1_img_wrap>.img_wrap1>img').stop().animate({opacity:1},1000,function(){
                $('.section1_img_wrap>.img_wrap2>img').stop().animate({opacity:1},1000, function(){
                    $('.section1_slogan').stop().animate({opacity:1},1000,function(){
                        $('.section1_slogan_txt').stop().animate({opacity:1},1000);
                    });
                });       
            });
        });
    }
    s1Ani();
});

// section2 : 페럴럭스 슬라이드 
$(function(){
    let s2Ani=0

    $(window).scroll(function(){
        if($(window).scrollTop()>=439){
            if(s2Ani==0){
                s2Ani=1;
				sec2AnimationStart();
            }
        }
        else{
            s2Ani=0;
            sec2AnimationSetting();
        }
    });
    function sec2AnimationSetting(){
        $('#section2_visual_wrap .visual_coffee>img').stop().animate({left:-100+'%',opacity:0},1000)
        $('#section2_visual_wrap .halloween_bean_txt').stop().animate({right:-150+'%',opacity:0},1000)
    }
    function sec2AnimationStart(){
        $('#section2_visual_wrap .visual_coffee>img').stop().animate({left:0,opacity:1},2000)
        $('#section2_visual_wrap .halloween_bean_txt').stop().animate({right:0,opacity:1},2000)
    }
});

// section3 : 페럴럭스 슬라이드
$(function(){
    let s3Ani=0

    $(window).scroll(function(){
        if($(window).scrollTop()>=1036){
            if(s3Ani==0){
                s3Ani=1;
				sec3AnimationStart();
            }
        }
        else{
            s3Ani=0;
            sec3AnimationSetting();
        }
    });
    function sec3AnimationSetting(){
        $('.section3_visual_txt>img').stop().animate({left:-100+'%',opacity:0},1000)
    }
    function sec3AnimationStart(){
        $('.section3_visual_txt>img').stop().animate({left:0,opacity:1},2000)
    }
});

// section4 : 페럴럭스 슬라이드

$(function(){
    let s4Ani=0

    $(window).scroll(function(){
        if($(window).scrollTop()>=1406){
            if(s4Ani==0){
                s4Ani=1;
				sec4AnimationStart();
            }
        }
        else{
            s4Ani=0;
            sec4AnimationSetting();
        }
    });
    function sec4AnimationSetting(){
        $('.fav_txt_wrap>.fav_txt1').stop().animate({left:-100+'%',opacity:0},2000)
        $('.fav_txt_wrap>.fav_txt2').stop().animate({left:-100+'%',opacity:0},2000)
        $('.fav_img').stop().animate({left:50+'%',opacity:0},2000)
    }
    function sec4AnimationStart(){
        $('.fav_txt_wrap>.fav_txt1').stop().animate({left:0,opacity:1},2000)
        $('.fav_txt_wrap>.fav_txt2').stop().animate({left:0,opacity:1},2000)
        $('.fav_img').stop().animate({left:0,opacity:1},2000)
    }
});

// section5 : 페럴럭스 슬라이드

$(function(){
    let s5Ani=0

    $(window).scroll(function(){
        if($(window).scrollTop()>=2123){
            if(s5Ani==0){
                s5Ani=1;
				sec5AnimationStart();
            }
        }
        else{
            s5Ani=0;
            sec5AnimationSetting();
        }
    });
    function sec5AnimationSetting(){
        $('.reserve_tit>img').stop().animate({opacity:0},2000)
        $('.reserve_visual>img').stop().animate({opacity:0},2000)
    }
    function sec5AnimationStart(){
        $('.reserve_tit>img').stop().animate({opacity:1},1000)
        $('.reserve_visual>img').stop().animate({opacity:1},3000)
    }
});
// section6 : 페럴럭스 슬라이드

$(function(){
    let s6Ani=0

    $(window).scroll(function(){
        if($(window).scrollTop()>=2558){
            if(s6Ani==0){
                s6Ani=1;
				sec6AnimationStart();
            }
        }
        else{
            s6Ani=0;
            sec6AnimationSetting();
        }
    });
    function sec6AnimationSetting(){
        $('.store_img1').stop().animate({opacity:0},2000)
        $('.store_img2').stop().animate({opacity:0},2000)
        $('.store_img3').stop().animate({opacity:0},2000)
        $('.store_img4').stop().animate({opacity:0},2000)
        $('.store_txt_wrap').stop().animate({right:-30+'%',opacity:0},2000)
    }
    function sec6AnimationStart(){
        $('.store_img1').stop().animate({opacity:1},2000)
        $('.store_img2').stop().animate({opacity:1},2000)
        $('.store_img3').stop().animate({opacity:1},2000)
        $('.store_img4').stop().animate({opacity:1},2000)
        $('.store_txt_wrap').stop().animate({right:10+'%',opacity:1},2000)
    }
});

//프로모션 이미지 애니메이션
$('.promote_down_ico').click(function(e){
    $('.promote_down_ico>a').find('img').attr('src','//img/starbucks/common/btn_prom_down.png)');
    $('.swiper').stop().slideUp().animate({display:'none'});
    $('.promote_down_ico>a').find('img').attr('src','//img/starbucks/common/btn_prom_up.png)');
    $('.swiper').slideDown().animate({display:'block'});
    e.preventDefault();
    return false;

});

//footer menu slide

  $('.m_footer_menu > ul > li, .m_footer_menu>ul>li>ul>li').hide();
  $('.m_footer_menu ul li.m_footer_tit').show();

  $('.m_footer_menu>ul>li.m_footer_tit>a').click(function(e){
      $(this).parent().siblings().stop(true, true).slideToggle();
      $(this).toggleClass('arrow_up');
  });
  $('.m_footer_menu>ul>li>a').click(function (e) {
  
      $(this).siblings().children().stop(true, true).slideToggle();
      $(this).children().toggleClass('arrow_up');
  //e.preventDefault();
});