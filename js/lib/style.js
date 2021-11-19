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


// news
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

//image moving

$(function(){
    $('.section1_slogan').animate({left:'10%', top: '15%'},2000);
    $('.section1_img_wrap>.img_wrap1>img').animate({left:0, top: 0},2000);
    $('.section1_img_wrap>.img_wrap2>img').animate({left:0, top: 0},4000);
    $('.section1_img_wrap>.img_wrap3>img').animate({left:0, top: 0},5000);
    $('.visual_coffee>img').animate({left:0, top: 0},2000);
    $('.section3_visual_txt>img').animate({left:0,top:0},3000);
    $('.fav_txt_wrap>.fav_txt1').animate({left:0,top:0},3000);
    $('.fav_txt_wrap>.fav_txt2').animate({left:0,top:0},3000);
    $('.fav_img').animate({left:0,top:0},3000);
    $('#fav_img').animate({left:'40%',top:'20%'},3000);
    $('.reserve_tit>img').animate({opacity:'1'},6000);
    $('.reserve_visual>img').animate({opacity:'1'},6000);
    $('.store_img1').animate({opacity:'1'},5000);
    $('.store_img2').animate({opacity:'1'},5000);
    $('.store_img3').animate({opacity:'1'},10000);
    $('.store_img4').animate({opacity:'1'},5000);
    $('.store_txt_wrap>.store_txt1').animate({opacity:'1'},4000);
    $('.store_txt_wrap>.store_txt2').animate({opacity:'1'},5000);
    $('.halloween_bean_txt').animate({left:0,top:0},3000);
});

//bxslider



// $('.bxslider').bxSlider( { 
//     mode: 'horizontal',// 가로 방향 수평 슬라이드 
//     speed: 500, // 이동 속도를 설정
//     pager: true, // 현재 위치 페이징 표시 여부 설정 
//     moveSlides: 1, // 슬라이드 이동시 개수 
//     slideWidth: 1000, // 슬라이드 너비 
//     minSlides: 3,// 최소 노출 개수
//     maxSlides: 5, // 최대 노출 개수 
//     slideMargin: 5, // 슬라이드간의 간격 
//     auto: true, // 자동 실행 여부 
//     autoHover: true, // 마우스 호버시 정지 여부 
//     controls: true, // 이전 다음 버튼 노출 여부 
//     autoControls: true,
//     stopAutoOnClick: true,
//     touchEnabled : false,
    
// });
// $('.promote_down_ico').click(function(){
//     $('.promote_down_ico').find('img').attr('src','//img/starbucks/common/btn_prom_down.png)');
//     $('.bx-wrapper').slideUp().animate({display:'none'});

// })
// $('.promote_down_ico').click(function(){
//     $('.promote_down_ico').find('img').attr('src','//img/starbucks/common/btn_prom_up.png)');
//     $('.bx-wrapper').slideDown().animate({display:'block'});
// });

var swiper = new Swiper(".mySwiper", {
    slidesPerView : '1', // 한 슬라이드에 보여줄 갯수
    spaceBetween : 1000, // 슬라이드 사이 여백
    loop : false, // 슬라이드 반복 여부
    loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    pagination : false, // pager 여부
    autoplay : {  // 자동 슬라이드 설정 , 비 활성화 시 false
      delay : 3000,   // 시간 설정
      disableOnInteraction : false,  // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
$('.promote_down_ico').click(function(e){
    $('.promote_down_ico>a').find('img').attr('src','//img/starbucks/common/btn_prom_down.png)');
    $('.swiper').stop().slideUp().animate({display:'none'});
    $('.promote_down_ico>a').find('img').attr('src','//img/starbucks/common/btn_prom_up.png)');
    $('.swiper').slideDown().animate({display:'block'});
    e.preventDefault();
    return false;

});

// $('.promote_down_ico').click(function(e){
//     $('.promote_down_ico>a').find('img').attr('src','//img/starbucks/common/btn_prom_up.png)');
//     $('.swiper').slideDown().animate({display:'block'});
//     e.preventDefault();
// });





    // $('.line_notice_bgr a, .btn_main_bnr_close').click(function () {
    //     if (lineNotice == false) {
    //       // $('.line_notice_bgr a span.btn_prom_arrow').css({'background-position':'-35px 0'});
    //       $('.line_notice_bgr a span.btn_prom').find('img').attr('src', '//image.istarbucks.co.kr/common/img/common/btn_prom_up.png');
    //       $('.main_prom_bnr').slideDown();
    //       $('body').animate({
    //         scrollTop: $('.line_notice_bgr').offset().top - 120
    //       }, 1000);
    //       lineNotice = true;
    //     } else {
    //       // $('.line_notice_bgr a span.btn_prom_arrow').css({'background-position':'0 0'});
    //       $('.line_notice_bgr a span.btn_prom').find('img').attr('src', '//image.istarbucks.co.kr/common/img/common/btn_prom_down.png');
    //       $('.main_prom_bnr').slideUp();
    //       lineNotice = false;
    //     }
    //   });
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