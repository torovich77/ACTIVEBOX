$(function(){
    
    let header = $("#header"); 
    let intro = $("#intro"); 
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    let slider = $("#reviewsSlider");
    
    $(window).on("scroll load resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        
        if(scrollPos > introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
        
        console.log(scrollPos);
        
    });
    
    
    
    /*smooth scroll*/
    
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;
        
        nav.removeClass("show");
        
        
        $("html, body").animate({
           scrollTop: elementOffset - 70
        }, 700);
    });
    
    /*navToggle*/

    
    navToggle.on("click", function(Event) {
        Event.preventDefault();
        
        nav.toggleClass("show");    
    });
    
    
    /*Reviews*/
    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
});
    
    
});