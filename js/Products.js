function Product(Name, Description, Price, Type, ImgName, ImgType) {
    this.Name = Name;
    this.Description = Description;
    this.Price = Price;
    this.Type = Type;
    this.ImgName = ImgName;
    this.ImgType = ImgType;
}

var products = [
    new Product(
        "Tørklæde silke batik (Bangladesh)", //Name
        "Tørklæde, silke, batik, Bangladesh", //Description
        149, //Price
        "Tørklæde", //Type
        "torklade-silke-batik_bangladesh", //ImgName
        "jpg" //ImgType
    ),
    new Product(
        "Tørklæde af silke (Bangladesh",
        "Sjal, silke & bomuld, 72x228 cm., Bangladesh",
        185,
        "Tørklæde",
        "torklade-silke_bangladesh",
        "jpg"
    ),
    new Product(
        "Tørklæde fra Palæstina",
        "Palæstinensertørklæde, 110x110 cm., Palæstina",
        220,
        "Tørklæde",
        "torklade-palestina",
        "jpg"
    ),
    new Product(
        "Tørklæde med broderi",
        "Sjal vorate broderi på uld, 200x85 cm., Bangladesh",
        395,
        "Tørklæde",
        "torklade-vorate-broderi",
        "jpg"
    ),
    new Product(
        "Tørklæde med bloktryk",
        "Tørklæde, bomuld, bloktryk, Bangladesh",
        85,
        "Tørklæde",
        "torklade-bloktryk_bangladesh",
        "jpg"
    ),
    new Product(
        "Tørklæde af viscose",
        "Tørklæde, viscose, bloktryk, Bangladesh",
        95,
        "Tørklæde",
        "torklade-af-viscose",
        "jpg"
    ),
    new Product(
        "Måtte af kokosbast, hund (Bangladesh)",
        "Måtte af kokosbast, hund, 60x30 cm., fra Bangladesh",
        275,
        "Måtte",
        "matte-af-kokosbast-hund_bangladesh",
        "jpg"
    ),
    new Product(
        "Måtte af kokosbast, flodhest (Bangladesh)",
        "Måtte af kokosbast, flodhest, 60x48 cm., Bangladesh",
        325,
        "Måtte",
        "matte-af-kokosbast-flodhest_bangladesh",
        "jpg"
    ),
    new Product(
        "Måtte af kokosbast, kat (Bangladesh)",
        "Måtte af kokosbast, kat, 63x38 cm., Bangladesh",
        225,
        "Måtte",
        "matte-af-kokosbast-kat_bangladesh",
        "jpg"
    ),
    new Product(
        "Måtte af kokosbast, gris (Bangladesh)",
        "Måtte af kokosbast, gris, 63x39 cm., Bangladesh",
        325,
        "Måtte",
        "matte-af-kokosbast-gris_bangladesh",
        "jpg"
    ),
    new Product(
        "Dørmåtte sol (Indien)",
        "Dørmåtte sol. Kokosbast på gummibund, 74x45 cm., Indien",
        215,
        "Måtte",
        "matte-sol_indien",
        "jpg"
    ),
    new Product(
        "Slidstærk sommerfuglemåtte (Bangladesh)",
        "Slidstærk måtte, kokosbast, Sommerfugl, div. farver, 60x32 cm., Bangladesh",
        185,
        "Måtte",
        "matte-sommerfugl_bangladesh",
        "jpg"
    ),
    new Product(
        "Denim genbrug med lomme",
        "Bred hængekøje til 1 person med lomme",
        585,
        "Hængekøje",
        "hangekoje-denim-genbrug",
        "jpg"
    ),
    new Product(
        "Off White med grå klunker",
        "Hængekøje med grå klunker, af vævet bomuld til 1 person",
        735,
        "Hængekøje",
        "hangekoje-off-white",
        "jpg"
    ),
    new Product(
        "Denim + ecru genbrug",
        "Hængekøjge til 1-2 personer. Bæreevne: 140 kg.",
        945,
        "Hængekøje",
        "hangekoje-denim-ecru-genbrug",
        "jpg"
    ),
    new Product(
        "Caipirinha",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hængekøje",
        "hangekoje-caipirinha",
        "jpg"
    ),
    new Product(
        "Pina Colada",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hængekøje",
        "hangekoje-pina-colada",
        "jpg"
    ),
    new Product(
        "Nikolina",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hængekøje",
        "hangekoje-nikolina",
        "jpg"
    ),
    new Product(
        "Lille vasketøjskurv (Bangladesh)",
        "Lille vasketøjskurv, farvet Kaisa-græs + snor af bomuld, 30x34 cm., Bangladesh",
        269,
        "Kurv",
        "kurv-lille-bangladesh",
        "jpg"
    ),
    new Product(
        "Kubisk U-kurv",
        "Kubisk U-kurv af Hogla-siv + jute, 28x28x28 cm., Bangladesh",
        169,
        "Kurv",
        "kurv-kubisk-u",
        "jpg"
    ),
    new Product(
        "Grå kurv med orange kant",
        "Grå kurv m/orange kant, vævet jute, 30x30 cm., Bangladesh",
        185,
        "Kurv",
        "kurv-gra-orange",
        "jpg"
    ),
    new Product(
        "Stribet kurv (Bangladesh)",
        "Stribet kurve af vævet jute, 27x27 cm., Bangladesh",
        149,
        "Kurv",
        "kurv-stribet-bangladesh",
        "jpg"
    ),
    new Product(
        "Kurv af palmeblade",
        "Kurv af palmeblade, dia. 18 cm., Bangladesh",
        39,
        "Kurv",
        "kurv-palmeblade",
        "jpg"
    ),
    new Product(
        "Zigzag kurv (Bangladesh)",
        "Zigzag kurve af vævet jute, stor, 32x15 cm., Bangladesh",
        139,
        "Kurv",
        "kurv-zigzag-bangladesh",
        "jpg"
    ),


]

$(document).ready(function () {
    $('.modal').modal({
        onCloseStart: function () {
            //Make sure modal's scroll is reset everytime it reopens
            $('.modal-content').scrollTop(0);
        }
    });

    //Make max slide default to max -- currently doesn't work, as the input isn't being updated
    $('#priceSlider').val(945);
    //TODO: Usability!

    let shuffledProducts = shuffleArray(products);
    let productTemplate = $('#productTemplate');

    for (let index = 0; index < 10; index++) {
        const product = shuffledProducts[index];
        let imgPath = "images/products/256x256/" + product.ImgName + "_256x256." + product.ImgType;
        
        let newProduct = productTemplate.html()
            .replace('##productImgSrc##', imgPath)
            .replace('##productImgName##', product.ImgName)
            .replace('##productImgType##', product.ImgType)
            .replace('##productImgAltText##', product.Name)
            .replace('##productImgTitleText##', product.Name)
            .replace('##productName##', product.Name)
            .replace('##productDescription##', product.Description)
            .replace('##productPrice##', product.Price)
            .replace('##productType##', product.Type);
        $(newProduct).prependTo($('#productsContainer'));
    }

    $(document).on("click", ".modal-trigger", function (e) {
        let productName = $(this).data('product-name');
        let productImgSrc = "images/products/512x512/" + $(this).data('img-name') + "_512x512." + $(this).data('img-type');
        let productDescription = $(this).data('product-description');
        let productPrice = $(this).data('product-price') + ",00 kr.";
        let productType = $(this).data('product-type');

        let productToDisplay = $('#productModalTemplate').html()
            .replace('##productName##', productName)
            .replace('##productImgSrc##', productImgSrc)
            .replace('##productImgAltText##', productName)
            .replace('##productImgTitleText##', productName)
            .replace('##productDescription##', productDescription)
            .replace('##productPrice##', productPrice)
            .replace('##productType##', productType);
        $('#productModalContent').html(productToDisplay);
    });
});

/*
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 * https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}