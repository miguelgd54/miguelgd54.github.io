$(document).ready(function () {

    // Owl-carousel
    $('.site-main .work-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

});