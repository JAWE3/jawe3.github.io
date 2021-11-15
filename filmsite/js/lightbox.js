// JavaScript Document

$(function () {
    let currentImg;
    // variabel forberedt til at indeholde img src fra det billede vi har klikket på
    let currentNr;
    // variabel forberedt til modtage det nummer billede i arrayet vi er nået til (det vi har klikket på)
    const imageList = $("#filmsite_gallery img");
    // vælger alle billeder i #wrapper og lægger dem i en variabel som nodelist
    console.log(imageList);
    const imageSrcList = [];
    console.log(imageSrcList);
    const altCaption = [];
    console.log(altCaption);
    // array forberedt til at modtage img src fra de 9 billeder i #wrapper (imageList)

    // så længe der er img src i vores nodelist, bliver de lagt ind i vores imageSrcList (array), 
    //som komma-separerede værdier, ligesom i vores textList.
    for (let i = 0; i < imageList.length; i++) {
        imageSrcList.push($(imageList[i]).attr("src"));
        altCaption.push($(imageList[i]).attr("alt"));
    }
    // åbn lightbox ved klik på et hvilket som helst billede på siden inden for #wrapper
    $(imageList).on("click", function () {
        if (screen.width > 767) {
            currentImg = $(this).attr("src");
            $("#photo img").attr("src", currentImg);
            currentNr = imageSrcList.indexOf(currentImg);
            $("#caption").text(altCaption[currentNr]);
            $("#lightbox").show();
        }
    });

    /* luk lightbox igen ved at trykke indenfor #lightbox (hele skærmen),
    men kun hvis der klikkes udenfor området med billedet ( #lightbox_content) */
    $("#lightbox").on("click", function (e) {
        if ($(e.target).hasClass("lb")) {
            $("#lightbox").hide();
        }
    });

    // hvis der trykkes på next-pilen, skal billedet skifte frem, 
    // ud fra hvilket nummer billede vi er nået til og hvis vi er på det sidste i listen, 
    // så skal vi gå til det første billede og så kalde funktionen change().
    $("#next").on("click", function () {
        currentImg = $("#photo img").attr("src");
        currentNr = imageSrcList.indexOf(currentImg);
        if (currentNr < imageSrcList.length - 1) {
            currentNr++;
        } else {
            currentNr = 0;
        }
        changeImg();
    });

    // hvis der trykkes på back-pilen, skal billedet skifte tilbage, 
    // ud fra hvilket nummer billede vi er nået til og hvis vi er på det første i listen, 
    // så skal vi gå til det sidste billede og så kalde funktionen change().
    $("#back").on("click", function () {
        currentImg = $("#photo img").attr("src");
        currentNr = imageSrcList.indexOf(currentImg);
        if (currentNr > 0) {
            currentNr--;
        } else {
            currentNr = imageSrcList.length - 1;
        }
        changeImg();
    });

    // denne funktion skifter src-stien til det store billede og teksten nedenunder,
    // ud fra hvilket billede man er nået til ved tryk på pilene, enten frem eller tilbage.
    function changeImg() {
        $("#photo img").fadeOut(150, function () {
            $("#photo img").attr("src", imageSrcList[currentNr]);
            $("#caption").text(altCaption[currentNr]);
            $("#photo img").fadeIn(150);
        });
    }
});