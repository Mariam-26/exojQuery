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

// Méthode html()
var titre = $('h3').html();
$('h3').html('<mark>DOM HTML</mark> manipulé !');
$('#testH3').html(titre);
$('#testH3').css('color', 'gray');

// Méthode val()
$('#prenom').keyup(function() {
    var valeurInput = $(this).val();
    $('#sp1').text(valeurInput);
})

// Méthode change()
$('select').change(function() {
    var valeurSelect = $('select').val() || [];
    $('#sp2').text(valeurSelect.join(', '));
});

// Méthode attr()
// On récupère la valeur de l'attribut class de h4
let attr1 = $('h4').attr('class');
// On affiche cette valeur dans notre span
$('#test5').text(`Valeur de class de h4 : ${attr1}`);

// On modifie la valeur associée à l'attribur class de h5
$('h5').attr('class', 'titre');

// On définit 2attributs href et target pour a et on leur attribue des valeurs
$('a').attr({
    href: 'https://femmenumerique.netlify.app/',
    target: '_blank'
});

// Méthode prop()
$('#c').change(function() {
    var v = $(this);
    $('#sp3').html(`Valeur attribut : ${v.attr('checked')}<br> Valeur propriété : ${v.prop('checked')}`);
});

// Méthode css()
$('.sp4').css('color', 'green');
$('.sp4').parent().css('color', 'red');