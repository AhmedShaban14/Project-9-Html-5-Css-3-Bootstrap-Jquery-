$(document).ready(function(){
   
    //Button at (Mobile Phones) to display header
    $(' header .icon').click(function(){
        $('header nav .nav-list').slideToggle();
    });
   
    //Add Sticky Header 
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll>100){
        $('header').addClass('sticky');
        }
        else{
          $('header').removeClass('sticky');

        }
         if(scroll>2015){
                $('.time').countTo(); // Run Count To Plugin
                $(window).off('scroll');
            }
          if ( scroll > 500) { // Fade The Scroll Top Btn
            
            $('.scrollTop').fadeIn();
            
        } else {
            
            $('.scrollTop').fadeOut();
            
        }
        
    });
    
    //Change TExt using buttos in home secton
$('.bt1').click(function(){
    $('.parent p:first-child').show().siblings().hide()

});
    $('.bt2').click(function(){
    $('.parent p:last-child').show().siblings().hide()

});
//Change Button Color : 
    $('.buttons button').click(function(){
    
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
    
    });
//MixItUp
 var mixer = mixitup('.images');
    
    //Owl Curosal 
 $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
//show  Choose Panel in choose section : 
    $('.choose-panel ul li').click(function(){
        var data = $(this).data('role');
        $(this).addClass('active-btn').siblings().removeClass('active-btn');
        $('.content .content-info').hide();
        $('.content').contents().filter('#'+data).fadeIn();
    
    });
    
// popup video in choose section
    $('.pop').magnificPopup({
        type: 'iframe'
    });
// slick slider on pleasure section
    $('.slick').slick({
        nextArrow : false,
        prevArrow : false
    });
    
// Scroll to Top
    $('.scrollTop').click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });
    
// smooth Scroll 
    $('.nav-list-items a').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 70
        });
        
    });
//Add Nice Scroll
  $("html").niceScroll();    
});