

function Product(Name, Description, Price, Type, Imgpath) {
    this.Name = Name;
    this.Description = Description;
    this.Price = Price;
    this.Type = Type;
    this.Imgpath = Imgpath;
}

var products = [

    new Product(
        "Tørklæde silke batik (Bangladesh)", //Name
        "Tørklæde, silke, batik, Bangladesh",
        149,
        "Tørklæde",
        "images/products/torklade/torklade-silke-batik_bangladesh.jpg"
    ),
    new Product(
        "Tørklæde af silke (Bangladesh", 
        "Sjal, silke & bomuld, 72x228 cm., Bangladesh",
        185,
        "Tørklæde",
        "images/products/torklade/torklade-silke_bangladesh.jpg"
    ),
    new Product(
        "Tørklæde fra Palæstina",
        "Palæstinensertørklæde, 110x110 cm., Palæstina",
        220,
        "Tørklæde",
        "images/products/torklade/torklade-palestina.jpg"
    ),
    new Product(
        "Tørklæde med broderi",
        "Sjal vorate broderi på uld, 200x85 cm., Bangladesh",
        395,
        "Tørklæde",
        "images/products/torklade/torklade-vorate-broderi.jpg"
    ),
    new Product(
        "Tørklæde med bloktryk",
        "Tørklæde, bomuld, bloktryk, Bangladesh",
        85,
        "Tørklæde",
        "images/products/torklade/torklade-bloktryk_bangladesh.jpg"
    ),
    new Product(
        "Tørklæde af viscose",
        "Tørklæde, viscose, bloktryk, Bangladesh",
        95,
        "Tørklæde",
        "images/products/torklade/torklade-af-viscose.jpg"
    ),
    new Product(
        "Måtte af kokosbast, hund (Bangladesh)",
        "Måtte af kokosbast, hund, 60x30 cm., fra Bangladesh",
        275,
        "Måtte",
        "images/products/matte/matte-af-kokosbast-hund_bangladesh.jpg"
    ),
    new Product(
        "Måtte af kokosbast, flodhest (Bangladesh)",
        "Måtte af kokosbast, flodhest, 60x48 cm., Bangladesh",
        325,
        "Måtte",
        "images/products/matte/matte-af-kokosbast-flodhest_bangladesh.jpg"
    ),
    new Product(
        "Måtte af kokosbast, kat (Bangladesh)",
        "Måtte af kokosbast, kat, 63x38 cm., Bangladesh",
        225,
        "Måtte",
        "images/products/matte/matte-af-kokosbast-kat_bangladesh.jpg"
    ),
    new Product(
        "Måtte af kokosbast, gris (Bangladesh)",
        "Måtte af kokosbast, gris, 63x39 cm., Bangladesh",
        325,
        "Måtte",
        "images/products/matte/matte-af-kokosbast-gris_bangladesh.jpg"
    ),
    new Product(
        "Dørmåtte sol (Indien)",
        "Dørmåtte sol. Kokosbast på gummibund, 74x45 cm., Indien",
        215,
        "Måtte",
        "images/products/matte/matte-sol_indien.jpg"
    ),
    new Product(
        "Slidstærk sommerfuglemåtte (Bangladesh)",
        "Slidstærk måtte, kokosbast, Sommerfugl, div. farver, 60x32 cm., Bangladesh",
        185,
        "Måtte",
        "images/products/matte/matte-sommerfugl_bangladesh.jpg"
    ),
    new Product(
        "Denim genbrug med lomme",
        "Bred hængekøje til 1 person med lomme",
        585,
        "Hængekøje",
        "images/products/hangekoje/hangekoje-denim-lomme.jpg"
    ),
    new Product(
        "Off White med grå klunker",
        "Hængekøje med grå klunker, af vævet bomuld til 1 person",
        735,
        "Hængekøje",
        "images/products/hangekoje/hangekoje-off-white.jpg"
    ),
    new Product(
        "Denim + ecru genbrug",
        "Hængekøjge til 1-2 personer. Bæreevne: 140 kg.",
        945,
        "Hængekøje",
        "images/products/hangekoje/hangekoje-denim-ecru-genbrug.jpg"
    ),
    new Product(
        "Caipirinha",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hængekøje",
        "images/products/hangekoje/hangekoje-caipirinha.jpg"
    ),
    new Product(
        "Pina Colada",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hængekøje",
        "images/products/hangekoje/hangekoje-pina-colada.jpg"
    ),
    new Product(
        "Nikolina",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hængekøje",
        "images/products/hangekoje/hangekoje-nikolina.jpg"
    ),
    new Product(
        "Lille vasketøjskurv (Bangladesh)",
        "Lille vasketøjskurv, farvet Kaisa-græs + snor af bomuld, 30x34 cm., Bangladesh",
        269,
        "Kurv",
        "images/products/kurv/kurv-bangladesh,jpg"
    ),
    new Product(
        "Kubisk U-kurv",
        "Kubisk U-kurv af Hogla-siv + jute, 28x28x28 cm., Bangladesh",
        169,
        "Kurv",
        "images/products/kurv/kurv-kubisk-u.jpg"
    ),
    new Product(
        "Grå kurv med orange kant",
        "Grå kurv m/orange kant, vævet jute, 30x30 cm., Bangladesh",
        185,
        "Kurv",
        "images/products/kurv/kurv-gra-orange.jpg"
    ),
    new Product(
        "Stribet kurv (Bangladesh)",
        "Stribet kurve af vævet jute, 27x27 cm., Bangladesh",
        149,
        "Kurv",
        "images/products/kurv/kurv-stribet-bangladesh.jpg"
    ),
    new Product(
        "Kurv af palmeblade",
        "Kurv af palmeblade, dia. 18 cm., Bangladesh",
        39,
        "Kurv",
        "images/products/kurv/kurv-palmeblade.jpg"
    ),
    new Product(
        "Zigzag kurv (Bangladesh)",
        "Zigzag kurve af vævet jute, stor, 32x15 cm., Bangladesh",
        139,
        "Kurv",
        "images/products-kurv-zigzag-bangladesh.jpg"
    ),


]

$(document).ready(function () {
    $('.modal').modal();

    //Make max slide default to max
    $('#priceSlider').val(945);
    //TODO: Usability!

    let productTemplate = $('#productTemplate');
    $.each(products, function (k, product) {
        
    });
});