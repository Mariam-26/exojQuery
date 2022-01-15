// Méthode replaceWhith()
$('button').click(function() {
    var rpl = $('#p1').replaceWith('<h2>Un titre 2</h2>');
    $('#msg').text(`Ancien texte : ${rpl.text()}`);
});

// Méthode replaceWith()
$('#b1').click(function() {
    $('#p1').replaceWith('<h2>Un titre 2</h2>');
});
// Méthode replaceAll()
$('#b2').click(function() {
    $('<h2>Autre titre h2</h2>').replaceAll('#p2');
});

// Méthode toWrap()
$('.toWrap').wrap("<div class='wrap'></div>");

// Méthode toWrapAll()
$('.toWrapAll').wrapAll("<div class='wrapA'></div>");

// Méthode toWrapInner()
$('.toWrapInner').wrapInner("<div class='wrapI'></div>");