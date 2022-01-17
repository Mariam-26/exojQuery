// Méthode css()
var taille = $('p').css('font-size');
$('#smg').text(`Taille du texte de base ${taille}`);

$('#b1').click(function() {
    $('p').css('color', 'red');
});

$('#b2').click(function() {
    $('p').css({
        'color': 'blue',
        'fonte-weight': 'bold'
    });
});