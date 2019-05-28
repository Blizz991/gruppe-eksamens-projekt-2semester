function sendMessage() {
    M.toast({ html: 'Beskeden er afsendt' }); //Show confirmation toast
    $('#contactEmail').val(''); //Empty contact email input
    $('#contactEmail').removeClass('valid invalid'); //Reset validation state
    $('#contactMessage').val(''); //Empty contact message input
    $('#contactMessage').attr('style', ''); //Trigger resize on contact message input in case it's higher than default
    M.updateTextFields();
}