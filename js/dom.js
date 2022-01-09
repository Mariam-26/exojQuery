// On récupère la taille de notre titre h1
var taille = $('h1').css('font-size');
// On affiche la valeur récupérée
$('#test').text(`La taille actuelle du h1 est ${taille}`);
$('#test').css('color', 'red');


$('h2').css('font-size', '50px');
// On récupère la taille de notre titre h1
var taille = $('h2').css('font-size');
// On affiche la valeur récupérée
$('#testH2').text(`La taille actuelle du h2 est ${taille}`);
$('#testH2').css('color', 'green');

// Méthode text()
var titre = $('h1').text();
$('h1').text('<mark>DOM HTML</mark> manipulé !');
$('#testH1').text(titre);
$('#testH1').css('color', 'blue');

// Méthode html ()
var titre = $('h3').html();
$('h3').html('<mark>DOM HTML</mark> manipulé !');
$('#testH3').html(titre);
$('#testH3').css('color', 'gray');

// Méthode val ()
$('#prenom').keyup(function() {
    var valeurInput = $(this).val();
    $('#sp1').text(valeurInput);
})

// Méthode change ()
$('select').change(function() {
    var valeurSelect = $('select').val() || [];
    $('#sp2').text(valeurSelect.join(', '));
});