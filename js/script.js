$('.burger').on('click', function () {
    $(this).toggleClass('active');
    $('.site-nav').toggleClass('active');
})

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.page-header').addClass('nav-sticky');
        $('.page-top').css('display', 'block');
    } else {
        $('.page-header').removeClass('nav-sticky');
        $('.page-top').css('display', 'none');
    }
})

$('a[href^="#"]').on('click', function () {
    $('.burger').removeClass('active');
    $('.site-nav').removeClass('active');

    let $href = $.attr(this, 'href');
    $('html, body').animate({
        scrollTop: $($href).offset().top
    }, 750);
})

$('.page-top').on('click', function () {
    $('html, body').animate({
        scrollTop: $('#home').offset().top
    }, 750);
});