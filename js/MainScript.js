$(document).ready(function () {
    $('.sidenav').sidenav({
        edge: 'right'
    });
    $('.tooltipped').tooltip();
});

//From: https://makitweb.com/highlight-current-page-menu-item-with-jquery/
// Get current page URL
var url = window.location.href;

// remove # from URL
url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

// remove parameters from URL
url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

// select file name
url = url.substr(url.lastIndexOf("/") + 1);

// If file name not avilable
if (url == '') {
    url = 'index.html';
}
console.log(url);

// Loop all menu items
$('.menu li').each(function () {

    // select href
    var href = $(this).find('a').attr('href');
    console.log(href);

    // Check filename
    if (url == href) {

        // Add active class
        $(this).addClass('active');
    }
});

// $('.carousel.carousel-slider').carousel({
//     fullWidth: true,
//     indicators: true
// });

