var cancel = document.getElementsByClassName('cancel')[0];
var frmleft = document.getElementsByClassName('kontakt')[0];
var nav = document.getElementById('tescik');
    
$(document).ready(function(){
     
//    $(window).scroll(function() {
//        var wS = $(this).scrollTop()
//        if(wS> 50) {
//            nav.style.display = "flex";
//        } else {
//            nav.style.display = "none";
//        }
//    })
    
    $(".cancel").click(function() {
        $(".kontakt").hide();
        $(".kontakt").animate({"width" : "0%"}, "fast");
    })
    $("#leftmenu").click(function() {
        $(".kontakt").show();
        /*$(".kontakt").toggleClass("displaynone");*/
        $(".kontakt").animate({"width" : "36%"}, "fast");
        
    });
    
    $(".cancel2").click(function() {
        $(".about").hide();
        /*$(".about").toggleClass("displaynone");*/
        $(".about").animate({"width" : "0%"}, "fast");
    })
    $("#rightmenu").click(function() {
        /*$(".about").toggleClass("displaynone");*/
        $(".about").animate({"width" : "36%"}, "fast");
        $(".about").show();
    })
    
    $(".p1").hover(function(){
        $(".text-container").empty();
        $(".showonhover").attr('src','anim/anim2.svg');
        $(".shower").show();
        $(".text-container").show();
        $(".text-container").addClass('p1t');
        
        
    }, function(){
        $(".text-container").removeClass('p1t');
        $(".text-container").hide();
        $(".shower").hide();
        
    })
    $(".p2").hover(function(){
        $(".text-container").empty();
        $(".showonhover").attr('src','anim/anim0.svg');
        $(".shower").show();
        $(".text-container").show();
        $(".text-container").addClass('p2t')
    }, function(){
        $(".text-container").removeClass('p2t');
        $(".text-container").hide();
        $(".shower").hide();
    })
    
    $(".p3").hover(function(){
        $(".text-container").empty();
        $(".showonhover").attr('src','anim/anim3.svg');
        $(".shower").show();
        $(".text-container").show();
        $(".text-container").addClass('p3t')
    }, function(){
        $(".text-container").removeClass('p3t');
        $(".text-container").hide();
        $(".shower").hide();
    })
    
    $(".p4").hover(function(){
        $(".text-container").empty();
        $(".showonhover").attr('src','anim/anim5.svg');
        $(".shower").show();
        $(".text-container").show();
        $(".text-container").addClass('p4t')
    
    }, function(){
        $(".text-container").removeClass('p4t');
        $(".text-container").hide();
        $(".shower").hide();
    })
    
    
    $(".d1").hover(function(){
        $(".showonhover2").attr('src','anim/anim2c.svg');
        $(".shower2").show();
        $(".text-container2").show();
        $(".text-container2").addClass('d1t');
        
    }, function(){
        $(".text-container2").removeClass('d1t');
        $(".shower2").hide();
        $(".text-container2").hide();
    })
    
     $(".d2").hover(function(){
        $(".showonhover2").attr('src','anim/anim3c.svg');
        $(".shower2").show();
        $(".text-container2").show();
         $(".text-container2").addClass('d2t');
        
    }, function(){
         $(".text-container2").removeClass('d2t');
        $(".shower2").hide();
        $(".text-container2").hide();
    })
    
     $(".d3").hover(function(){
        $(".showonhover2").attr('src','anim/anim4c.svg');
        $(".shower2").show();
        $(".text-container2").show();
         $(".text-container2").addClass('d3t');
        
    }, function(){
         $(".text-container2").removeClass('d3t');
        $(".shower2").hide();
        $(".text-container2").hide();
    })
    
    
     $(".f1").hover(function(){
        $(".showonhover3").attr('src','anim/anim1d.svg');
        $(".prob3").show();
        $("showonhover3").show();
        $(".text-container3").show();
        $(".text-container3").addClass('f1t');
        
    }, function(){
         $(".text-container3").removeClass('f1t');
        $(".prob3").hide();
        $(".text-container3").hide();
    })
    
    $(".f2").hover(function(){
        $(".showonhover3").attr('src','anim/anim4d.svg');
        $(".prob3").show();
        $("showonhover3").show();
        $(".text-container3").show();
        $(".text-container3").addClass('f2t');
        
    }, function(){
        $(".text-container3").removeClass('f2t');
        $(".prob3").hide();
        $(".text-container3").hide();
    })
    
    $(".f3").hover(function(){
        $(".showonhover3").attr('src','anim/anim3d.svg');
        $(".prob3").show();
        $("showonhover3").show();
        $(".text-container3").show();
        $(".text-container3").addClass('f3t');
        
    }, function(){
        $(".text-container3").removeClass('f3t');
        $(".prob3").hide();
        $(".text-container3").hide();
    })
    
     $(".f4").hover(function(){
        $(".showonhover3").attr('src','anim/anim5d.svg');
        $(".prob3").show();
        $("showonhover3").show();
        $(".text-container3").show();
         $(".text-container3").addClass('f4t');
        
    }, function(){
         $(".text-container3").removeClass('f4t');
        $(".prob3").hide();
        $(".text-container3").hide();
    })
    
    $(".o1").hover(function(){
        $(".showonhover4").attr('src','anim/anim1e.svg');
        $(".prob4").show();
        $("showonhover4").show();
        $(".text-container4").show();
        $(".text-container4").addClass('o1t');
        
    }, function(){
        $(".text-container4").removeClass('o1t');
        $(".prob4").hide();
        $(".text-container4").hide();
    })
    
    
    $(".o2").hover(function(){
        $(".showonhover4").attr('src','anim/anim2e.svg');
        $(".prob4").show();
        $("showonhover4").show();
        $(".text-container4").show();
        $(".text-container4").addClass('o2t');
        
    }, function(){
        $(".text-container4").removeClass('o2t');
        $(".prob4").hide();
        $(".text-container4").hide();
    })
    
    $(".o3").hover(function(){
        $(".showonhover4").attr('src','anim/anim3e.svg');
        $(".prob4").show();
        $("showonhover4").show();
        $(".text-container4").show();
        $(".text-container4").addClass('o3t');
        
    }, function(){
        $(".text-container4").removeClass('o3t');
        $(".prob4").hide();
        $(".text-container4").hide();
    })
    
    $(".o4").hover(function(){
        $(".showonhover4").attr('src','anim/anim4e.svg');
        $(".prob4").show();
        $("showonhover4").show();
        $(".text-container4").show();
        $(".text-container4").addClass('o4t');
        
    }, function(){
        $(".text-container4").removeClass('o4t');
        $(".prob4").hide();
        $(".text-container4").hide();
    })
    
    

    
})

function openonas() {
    $('html, body').animate({
        scrollTop: $("#frstlook").offset().top
    }, 600);
    $(".about").animate({"width" : "36%"}, "slow");
    $(".about").show();
}

function openkontakt() {
    $('html, body').animate({
        scrollTop: $("#frstlook").offset().top
    }, 600);
    $(".kontakt").show();
    $(".kontakt").animate({"width" : "36%"}, "slow");
}



$(".main").onepage_scroll({
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {
       
           var video1 = document.getElementById('kvideo');
           var video2= document.getElementById('dvideo');
           var video3 = document.getElementById('cvideo');
           var video4 = document.getElementById('ovideo');
   
       if(document.body.classList.contains('viewing-page-1')){
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
       
       if(document.body.classList.contains('viewing-page-2')){
//           video1.currentTime = 0;
           video1.play();
       } else {
           video1.pause();
       }
       
       if(document.body.classList.contains('viewing-page-3')){
           video2.play();
       } else {
         
           video2.pause();
       } 
       if(document.body.classList.contains('viewing-page-4')){
           video3.play();
       } else {
           video3.pause();
       } 
       
       if(document.body.classList.contains('viewing-page-5')){
           video4.play();
       } else {
           video4.pause();
       }
       
       
   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
                                    // the browser's width is less than 600, the fallback will kick in.
   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
});

/*

onePageScroll(".main", {
   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", 
                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
   pagination: false,                // You can either show or hide the pagination. Toggle true for show, false for hide.
   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
   afterMove: function(index) {
           var video1 = document.getElementById('kvideo');
           var video2= document.getElementById('dvideo');
           var video3 = document.getElementById('cvideo');
           var video4 = document.getElementById('ovideo');
   
       if(document.body.classList.contains('viewing-page-1')){
            nav.style.display = "none";
        } else {
            nav.style.display = "flex";
        }
       
       if(document.body.classList.contains('viewing-page-2')){
//           video1.currentTime = 0;
           video1.play();
       } else {
           video1.pause();
       }
       
       if(document.body.classList.contains('viewing-page-3')){
           video2.play();
       } else {
         
           video2.pause();
       } 
       if(document.body.classList.contains('viewing-page-4')){
           video3.play();
       } else {
           video3.pause();
       } 
       
       if(document.body.classList.contains('viewing-page-5')){
           video4.play();
       } else {
           video4.pause();
       }
       
   
   },   // This option accepts a callback function. The function will be called after the page moves.
   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
   keyboard: true,                  // You can activate the keyboard controls
   responsiveFallback: false        // You can fallback to normal page scroll by defining the width of the browser in which
                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever 
                                    // the browser's width is less than 600, the fallback will kick in.
});
*/



