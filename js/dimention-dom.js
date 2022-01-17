// Méthode width() & height()
var l1 = $('p').width();
var h1 = $('p').height();
$('#sp1').text(`Taille de départ : ${h1}*${l1}px`);

$('#b1').click(function() {
    $('p').width('300px');
    $('p').height('100px');

    var l2 = $('p').width();
    var h2 = $('p').height();
    $('#sp2').text(`Nouvelle taille : ${h2} * ${l2} px`);
});

// Méthode outerWidth() & outerHeight()
var l = $('h3').outerWidth();
var lt = $('h3').outerWidth(true);

var h = $('h3').outerHeight();
var ht = $('h3').outerHeight(true);

$('#sp4').html(`Outer taille : ${h}*${l}px <br> Outer taille (totale) : ${ht}*${lt}px`);