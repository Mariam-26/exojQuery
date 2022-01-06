// Méthode "keydown()"
$('#prenom').keydown(function() {
    $(this).css('background-color', 'red');
});

// Méthode "keyup()"
$("#prenom").keyup(function() {
    $(this).css('background-color', 'green');
});

// Méthode "keypress()"
$('#prenom').keypress(function(e) {
    var touche = String.fromCharCode(e.which);
    $('#ascii').text(touche);
});