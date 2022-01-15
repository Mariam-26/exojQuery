// Méthode wrapAll()
$('#b1').click(function() {
    $('.toWrapAll').wrapAll("<div class='wrapA'></div>");
});

// Méthode unwrap()
$('#b2').click(function() {
    $('.toWrapAll').unwrap();
});