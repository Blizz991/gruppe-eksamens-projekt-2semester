//Global variables
let maxProductsToDisplay = 100;
let currentProductsIndex = 0;
let currentMinPrice = 0;
let currentMaxPrice = 1000;
let currentFilters = new Filters(); //No filters
let slider = document.getElementById('limitPriceSlider'); //Not using Jquery because we only want the single element
const productTemplate = $('#productTemplate');


//#region Constructors

function Filters(Query = "", Types = [] /* Empty = show all */, MinPrice = 0, MaxPrice = 1000) {
    this.Query = Query;
    this.Types = Types;
    this.MinPrice = MinPrice;
    this.MaxPrice = MaxPrice;
    this.ProductMatchesFilter = function (product) {
        let filterMatches = true;

        if (this.Query !== "") {
            filterMatches = product.Name.includes(this.Query) || product.Description.includes(this.Query);
        }

        //If there is something present in the Types array.
        if (filterMatches && this.Types.length !== 0) {
            //If The product's type exists in the filter types
            if (this.Types.indexOf(product.Type) !== -1) {
                filterMatches = true;
            } else {
                filterMatches = false;
            }
        }

        if (filterMatches && product.Price >= this.MinPrice && product.Price <= this.MaxPrice) {
            filterMatches = true;
        } else {
            filterMatches = false;
        }

        //If nothing matches, product should not be displayed
        return filterMatches;
    }
}

function Product(Name, Description, Price, Type, ImgName, ImgType) {
    this.Name = Name;
    this.Description = Description;
    this.Price = Price;
    this.Type = Type;
    this.ImgName = ImgName;
    this.ImgType = ImgType;
}
//#endregion Constructors

var products = [
    new Product(
        "Tørklæde silke batik (Bangladesh)", //Name
        "Tørklæde, silke, batik, Bangladesh", //Description
        149, //Price
        "Scarf", //Type
        "torklade-silke-batik_bangladesh", //ImgName
        "jpg" //ImgType
    ),
    new Product(
        "Tørklæde af silke (Bangladesh",
        "Sjal, silke & bomuld, 72x228 cm., Bangladesh",
        185,
        "Scarf",
        "torklade-silke_bangladesh",
        "jpg"
    ),
    new Product(
        "Tørklæde fra Palæstina",
        "Palæstinensertørklæde, 110x110 cm., Palæstina",
        220,
        "Scarf",
        "torklade-palestina",
        "jpg"
    ),
    new Product(
        "Tørklæde med broderi",
        "Sjal vorate broderi på uld, 200x85 cm., Bangladesh",
        395,
        "Scarf",
        "torklade-vorate-broderi",
        "jpg"
    ),
    new Product(
        "Tørklæde med bloktryk",
        "Tørklæde, bomuld, bloktryk, Bangladesh",
        85,
        "Scarf",
        "torklade-bloktryk_bangladesh",
        "jpg"
    ),
    new Product(
        "Tørklæde af viscose",
        "Tørklæde, viscose, bloktryk, Bangladesh",
        95,
        "Scarf",
        "torklade-af-viscose",
        "jpg"
    ),
    new Product(
        "Måtte af kokosbast, hund (Bangladesh)",
        "Måtte af kokosbast, hund, 60x30 cm., fra Bangladesh",
        275,
        "Mat",
        "matte-af-kokosbast-hund_bangladesh",
        "jpg"
    ),
    new Product(
        "Måtte af kokosbast, flodhest (Bangladesh)",
        "Måtte af kokosbast, flodhest, 60x48 cm., Bangladesh",
        325,
        "Mat",
        "matte-af-kokosbast-flodhest_bangladesh",
        "jpg"
    ),
    new Product(
        "Måtte af kokosbast, kat (Bangladesh)",
        "Måtte af kokosbast, kat, 63x38 cm., Bangladesh",
        225,
        "Mat",
        "matte-af-kokosbast-kat_bangladesh",
        "jpg"
    ),
    new Product(
        "Måtte af kokosbast, gris (Bangladesh)",
        "Måtte af kokosbast, gris, 63x39 cm., Bangladesh",
        325,
        "Mat",
        "matte-af-kokosbast-gris_bangladesh",
        "jpg"
    ),
    new Product(
        "Dørmåtte sol (Indien)",
        "Dørmåtte sol. Kokosbast på gummibund, 74x45 cm., Indien",
        215,
        "Mat",
        "matte-sol_indien",
        "jpg"
    ),
    new Product(
        "Slidstærk sommerfuglemåtte (Bangladesh)",
        "Slidstærk måtte, kokosbast, Sommerfugl, div. farver, 60x32 cm., Bangladesh",
        185,
        "Mat",
        "matte-sommerfugl_bangladesh",
        "jpg"
    ),
    new Product(
        "Denim genbrug med lomme",
        "Bred hængekøje til 1 person med lomme",
        585,
        "Hammock",
        "hangekoje-denim-genbrug",
        "jpg"
    ),
    new Product(
        "Off White med grå klunker",
        "Hængekøje med grå klunker, af vævet bomuld til 1 person",
        735,
        "Hammock",
        "hangekoje-off-white",
        "jpg"
    ),
    new Product(
        "Denim + ecru genbrug",
        "Hængekøjge til 1-2 personer. Bæreevne: 140 kg.",
        945,
        "Hammock",
        "hangekoje-denim-ecru-genbrug",
        "jpg"
    ),
    new Product(
        "Caipirinha",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hammock",
        "hangekoje-caipirinha",
        "jpg"
    ),
    new Product(
        "Pina Colada",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hammock",
        "hangekoje-pina-colada",
        "jpg"
    ),
    new Product(
        "Nikolina",
        "Hængekøje med barrer til 1 person af vævet bomuld fra El Salvador",
        575,
        "Hammock",
        "hangekoje-nikolina",
        "jpg"
    ),
    new Product(
        "Lille vasketøjskurv (Bangladesh)",
        "Lille vasketøjskurv, farvet Kaisa-græs + snor af bomuld, 30x34 cm., Bangladesh",
        269,
        "Basket",
        "kurv-lille-bangladesh",
        "jpg"
    ),
    new Product(
        "Kubisk U-kurv",
        "Kubisk U-kurv af Hogla-siv + jute, 28x28x28 cm., Bangladesh",
        169,
        "Basket",
        "kurv-kubisk-u",
        "jpg"
    ),
    new Product(
        "Grå kurv med orange kant",
        "Grå kurv m/orange kant, vævet jute, 30x30 cm., Bangladesh",
        185,
        "Basket",
        "kurv-gra-orange",
        "jpg"
    ),
    new Product(
        "Stribet kurv (Bangladesh)",
        "Stribet kurve af vævet jute, 27x27 cm., Bangladesh",
        149,
        "Basket",
        "kurv-stribet-bangladesh",
        "jpg"
    ),
    new Product(
        "Kurv af palmeblade",
        "Kurv af palmeblade, dia. 18 cm., Bangladesh",
        39,
        "Basket",
        "kurv-palmeblade",
        "jpg"
    ),
    new Product(
        "Zigzag kurv (Bangladesh)",
        "Zigzag kurve af vævet jute, stor, 32x15 cm., Bangladesh",
        139,
        "Basket",
        "kurv-zigzag-bangladesh",
        "jpg"
    ),


]

$(document).ready(function () {
    $('.modal').modal({
        onCloseStart: function () {
            //Make sure modal's scroll is reset every time it reopens
            $('.modal-content').scrollTop(0);
        }
    });
    $('.collapsible').collapsible({
        accordion: false
    });

    //#region Price range handler
    noUiSlider.create(slider, {
        start: [($('#productMinPrice').val()), ($('#productMaxPrice').val())],
        behaviour: 'tap',
        connect: true,
        margin: 100,
        step: 10,
        orientation: 'horizontal',
        animate: true,
        animationDuration: 300,
        tooltips: [true, wNumb({ decimals: 0, suffix: ' kr.' })],
        range: {
            'min': 0,
            'max': 1000
        },
        format: wNumb({
            decimals: 0,
            suffix: ' kr.'
        })
    });

    slider.noUiSlider.on('change',
        function () {
            let minPrice = slider.noUiSlider.get()[0]; //First handle
            let maxPrice = slider.noUiSlider.get()[1]; //Second handle
            $('#productMinPrice').val(minPrice);
            currentFilters.MinPrice = minPrice;
            $('#productMaxPrice').val(maxPrice);
            currentFilters.MaxPrice = maxPrice;

            updateProductDisplay(currentFilters);
        }
    );

    $('#productMinPrice').change(function () {
        currentMinPrice = this.value;
        slider.noUiSlider.set([this.value, currentMaxPrice]);
        updateProductDisplay(currentFilters);
    });

    $('#productMaxPrice').change(function () {
        currentMaxPrice = this.value;
        slider.noUiSlider.set([currentMinPrice, this.value]);
        updateProductDisplay(currentFilters);
    });
    //#endregion Price range handler

    //Initial product display
    displayProducts(products);

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

    if ($(window).width() > 1200) {
        $('.collapsible').collapsible('open');
    };

    // $(window).resize(function () {
    //     clearTimeout(window.resizedFinished);
    //     window.resizedFinished = setTimeout(function () {
    //         if ($(window).width() < 1200) {
    //             $('.collapsible').collapsible('close');
    //             console.log('Collapse!');
    //         }
    //     }, 250);
    // });

});

function displayProducts(filteredProducts) {
    $('#productsContainer').html('');
    let index = 0;

    if (filteredProducts.length > 0) {
        //Keep adding products to the product view, as long as we're not above
        //the max products to display, or we're displaying products that should be displayed
        while (index < maxProductsToDisplay && index < filteredProducts.length) {
            const product = filteredProducts[index];
            let productType;
            //Translation because I refuse to write danish in code...
            switch (product.Type) {
                case "Scarf":
                    productType = "Tørklæde"
                    break;
                case "Mat":
                    productType = "Måtte"
                    break;
                case "Hammock":
                    productType = "Hængekøjer"
                    break;
                case "Basket":
                    productType = "Kurve"
                    break;
                default:
                    productType = product.productType
                    break;
            }
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
                .replace('##productInfoPrice##',product.Price)
                .replace('##productType##', productType);
            $(newProduct).prependTo($('#productsContainer'));
            index++
        }
    } else {
        $($('<div/>').addClass('col s12').append($('<h4/>').text("Der var desværre ingen produkter der matchede dine filtre..."))).prependTo($('#productsContainer'));
    }
}

function applyFilters(element) {
    let filter = $(element);
    let filterType = filter.data('filter');
    let filterState; //Only used if element is a checkbox
    if (filter.is(':checkbox')) {
        filterState = filter.prop('checked');
    }

    if (filterType == "All") {
    } else if (filterType == "Query") {
        currentFilters.Query = filter.val();
    } else {
        if (filterState) {
            currentFilters.Types.push(filterType);
        } else {
            currentFilters.Types.splice($.inArray(filterType, currentFilters.Types), 1);
        }
    }
    updateProductDisplay(currentFilters);
}

function updateProductDisplay(filterToApply) {
    let filteredProducts = products.filter(function (product, i) {
        return filterToApply.ProductMatchesFilter(product);
    });
    displayProducts(filteredProducts);
}

function resetFilters() {
    currentFilters = new Filters();

    $('#productSearch').val('');
    //Reset all checkboxes
    $('input:checkbox').prop('checked', false);

    //Reset price range to default
    currentMinPrice = 0;
    currentMaxPrice = 1000;
    slider.noUiSlider.set([currentMinPrice, currentMaxPrice]);

    $('#productMinPrice').val(currentMinPrice);
    $('#productMaxPrice').val(currentMaxPrice);

    updateProductDisplay(currentFilters);
}

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