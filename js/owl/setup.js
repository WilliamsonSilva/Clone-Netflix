$('.owl-carousel').owlCarousel({
    loop:true, /* o true vai deixar de forma infinita */
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
            items:5
        }
    }
})