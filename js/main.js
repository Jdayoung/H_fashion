$(function(){
  

  $('.gnb_wrap>li').hover(function () {
    $(this).find('.sub_wrap').addClass('show');

    if($(this).find('.sub_wrap').length > 0) {
      $('header').addClass('hov')
    }
  }, function () {
    $('.gnb .sub_wrap').removeClass('show');
    $('header').removeClass('hov');
  })

  $(window).scroll(function () {
    const curr = $(window).scrollTop(); 
    if (curr > 95) {
      $('header').addClass('on');
    } else {
      $('header').removeClass('on');
    }

  });  

  $('.menu_select a').click(function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active')
    el = $(this).attr('href');
    $(el).addClass('active').siblings().removeClass('active') 
  })

    var swiper = new Swiper(".sc_visual .main_swiper", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
       },
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: ".sc_visual .btn.prev",
          prevEl: ".sc_visual .btn.next",
        },
        pagination: {
            el: ".sc_visual .swiper-pagination",
          },
      });
      $('.sc_visual .pause').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.sc_visual .play').css({display:'block'});
        slide01.autoplay.stop();
      })
      $('.sc_visual .play').click(function(e){
          e.preventDefault();
          $(this).hide();
          $('.sc_visual .pause').css({display:'block'});
          slide01.autoplay.start();
      }) 


      $('.dept1').click(function(e){
        e.preventDefault();
        $('.sub_wrap').stop().slideUp(); //먼저 닫고 
        // $(this).siblings('.sub').slideDown(); // 내가 선택한것만 연다.
        $(this).siblings('.sub_wrap').stop().slideToggle();

        // $('.dept1').removeClass('on');
        // $(this).toggleClass('on')

        //처음 눌렀을때 on을 주겠다. > 똑같은걸 2번째 누를때 on이 있다.
        if($(this).hasClass('on')) { //열려있는경우
            $('.dept1').removeClass('on');
        }else {
            $('.dept1').removeClass('on');
            $(this).addClass('on')
        }
    })

      var navSlide = new Swiper(".sc_brand .nav_slide", {
        loop: true,
        slidesPerView: 3,
        spaceBetween:5,
        centeredSlides: true,
        simulateTouch: false, //슬라이드 넘김x
        navigation: {
          nextEl: ".sc_brand .btn.next",
          prevEl: ".sc_brand .btn.prev",
        },
       
      });

      $('.sc_brand .next').click(function(){
        navSlide.slideNext();
        brandSlide.slideNext();
      })
      $('.sc_brand .prev').click(function(){
        navSlide.slideNext();
        brandSlide.slideNext();
      })



      var brandSlide = new Swiper(".sc_brand .brand_slide", {
        loop: true,
        spaceBetween: 10,
        simulateTouch: false,
        
      });
      // navSlide.controller.control = brandSlide;
      //   brandSlide.controller.control = navSlide;
      


      var swiper = new Swiper(".sc_brand .right_area", {
        loop: true,
        pagination: {
          el: ".sc_brand .swiper-pagination",
        },
      });

      var swiper = new Swiper(".menu_swiper", {
        spaceBetween: 10,
        slidesPerView: 15,
        freeMode: true,
        watchSlidesProgress: true,
      });

      $('.cate_select a').click(function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active')
        el = $(this).attr('href');
        $(el).addClass('active').siblings().removeClass('active') 
      })



      $('.cate_nav a').click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on')
        el = $(this).attr('href');
        $(el).addClass('on').siblings().removeClass('on') 
      })

      $('.tab_nav a').click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on')
        el = $(this).attr('href'); // 내가선택한 속성중에 href값을 가져와라
        $(el).addClass('on').siblings().removeClass('on') // 형제는 빼라
    })

      var swiper = new Swiper(".sc_best .cont.swiper", {
        loop: true,
        slidesPerView: 5,
        spaceBetween: 30,
        observer: true,   // 추가
        observeParents: true,   // 추가
        navigation: {
          nextEl: ".sc_best .next",
          prevEl: ".sc_best .prev",
        },
        pagination: {
          el: ".sc_best .swiper-pagination",
        },
      });

      $('.tab_nav a').click(function(e){
        e.preventDefault();
        $(this).addClass('on').siblings().removeClass('on')
        el = $(this).attr('href'); // 내가선택한 속성중에 href값을 가져와라
        $(el).addClass('on').siblings().removeClass('on') // 형제는 빼라
    })



      $('.sc_best .pause').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.sc_best .play').css({display:'block'});
        swiper.autoplay.stop();
      })
      $('.sc_best .play').click(function(e){
          e.preventDefault();
          $(this).hide();
          $('.sc_best .pause').css({display:'block'});
          swiper.autoplay.start();
      }) 

      var style01 = new Swiper(".sc_style .main_swiper", {
        loop: true,
        autoplay: {
          delay: 3000,
      },
      simulateTouch: false,
      navigation: {
        nextEl: ".sc_style .next",
        prevEl: ".sc_style .prev",
      },
      });
      
      var style02 = new Swiper(".sc_style .sub_swiper", {
        loop: true,
          autoplay: {
              delay: 3000,
          },
          simulateTouch: false,
        });
        $('.sc_style .next').click(function(){
          style02.slideNext();
        })
        $('.sc_style .prev').click(function(){
          style02.slidePrev();
        })

      $('.sc_style .pause').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.sc_style .play').css({display:'block'});
        style01.autoplay.stop();
        style02.autoplay.stop();
      })
      $('.sc_style .play').click(function(e){
          e.preventDefault();
          $(this).hide();
          $('.sc_style .pause').css({display:'block'});
          style01.autoplay.start();
          style02.autoplay.start();
      }) 

      $('.sc_style .state').click(function(){

      })

      var swiper = new Swiper(".sc_shop .left_swiper", {
        loop: true,
        pagination: {
          el: ".sc_shop .swiper-pagination",
        },
      });

      var swiper = new Swiper(".right_swiper", {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: ".sc_shop .next",
          prevEl: ".sc_shop .prev",
        },
        pagination: {
          el: ".sc_shop .swiper-pagination",
        },
      });

      var swiper = new Swiper(".sc_foryou .for_swiper", {
        loop: true,
        autoplay: {
          delay: 2000,
      },
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
          nextEl: ".sc_foryou .next",
          prevEl: ".sc_foryou .prev",
        },
      });

      $('.sc_foryou .pause').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.sc_foryou .play').css({display:'block'});
        $('.sc_foryou .for_swiper').autoplay.stop();
      })
      $('.sc_foryou .play').click(function(e){
        e.preventDefault();
        $(this).hide();
        $('.sc_foryou .pause').css({display:'block'});
        $('.sc_foryou .for_swiper').autoplay.start();
      }) 


      var swiper = new Swiper(".sc_tv .tv_swiper", {
        loop: true,
        // effect: 'coverflow',
        // coverflowEffect: {
        //   rotate: 0,
        //   stretch: 0,
        //   depth: 80,
        //   modifier: 1.5,
        //   slideShadows: true,
        // },
        slidesPerView: 3,
        // spaceBetween: 10,
        centeredSlides: true,
        navigation: {
          nextEl: ".sc_tv .next",
          prevEl: ".sc_tv .prev",
        },
      });


      $('.t_footer .site_btn').click(function (e) {
        e.preventDefault();
    
        if ($(this).siblings('.sub_wrap').hasClass('active')) { //열려있는경우
            $('.t_footer .site_btn').removeClass('active');
        } else { //첫클릭
            $('.t_footer .site_btn').removeClass('active');
            $(this).siblings('.sub_wrap').addClass('active')
        }
        
      })
})