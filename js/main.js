$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        prevArrow: '<img class="arrow arrow-left" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow arrow-right" src="images/arrow-right.svg" alt="">',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1,
                    
                }
            }
        ]
       
    });
});