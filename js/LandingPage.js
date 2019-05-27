//Initialize Materialize CSS components used on this page
$(document).ready(function () {
    $('.slider').slider();
    $('.carousel').carousel({
        fullWidth: true,
        indicators: true
    });
    $('.materialboxed').materialbox();
    $('.collapsible').collapsible({
        accordion: false
    });
    $('.modal').modal({
        onCloseStart: function () {
            //Make sure modal's scroll is reset everytime it reopens
            $('.modal-content').scrollTop(0);
        }
    });

    var newsletterCollapsibleInstance = M.Collapsible.getInstance($('#previousNewslettersCollapsible'));

    // console.log(newsletterCollapsibleInstance);

    // if ($(window).width() < 900) {
    //     $("#previousNewslettersCollapsible").removeClass('active');
    // }

});


$(window).resize(function () {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function () {
        if ($(window).width() < 900) {
            // $("#previousNewslettersCollapsible").removeClass('active');
            newsletterCollapsibleInstance.close(2);
        }
    }, 250);
});

$(document).on("click", ".modal-trigger", function (e) {
    let month = $(this).data('newsletter-month');
    let imgPath = "images/frontpage/newsletters/nyhedsbrev_" + month + ".jpg";
    let header =
        //Make sure first letter of month is uppercase
        month.charAt(0).toUpperCase() + month.slice(1) + " - "
        + $(this).data("newsletter-year");

    let newsletterToDisplay =
        $('#newsletterTemplate').html()
            .replace('##newsletterModalHeader##', header)
            .replace('##newsletterImgPath##', imgPath);
    $('#newsletterModalContent').html(newsletterToDisplay);
});