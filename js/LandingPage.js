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

function subscribeNewsletter() {
    if (!($('#newsletterEmail').hasClass('invalid'))) {
        M.toast({ html: 'Du er nu tilmeldt nyhedsbrevet' }); //Show confirmation toast
        $('#newsletterEmail').val(''); //Empty newsletter email input
        $('#newsletterEmail').removeClass('valid invalid'); //Reset validation state
        M.updateTextFields();
    }

}