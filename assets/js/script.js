  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
  
$(function () {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
});

function openNav() {
    document.getElementById('menuNav').style.width = '100%';
}

function closeNav() {
    document.getElementById('menuNav').style.width = '0%';
}

jQuery(function ($) {
    "use strict";

    var counterUp = window.counterUp["default"]; // import counterUp from "counterup2"

    var $counters = $(".counter");

    /* Start counting */
    $counters.each(function (ignore, counter) {
        counterUp(counter, {
            delay: 10,
            time: 1000
        });
    });
});

// // Back to top button
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 100) {
//         $('.back-to-top').fadeIn('slow');
//     } else {
//         $('.back-to-top').fadeOut('slow');
//     }
// });

// $('.back-to-top').click(function () {
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1500, 'easeInOutExpo');
//     return false;
// });
