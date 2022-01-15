// Méthode remove()
$('#b1').click(function() {
    $('div').remove('#monDiv1');
});

$('#b2').click(function() {
    $('div').remove('#monDiv2');
});

// Méthode empty()
$('#b3').click(function() {
    $('#monDiv3').empty();
});

// Méthode removeAttr()
$('#b4').click(function() {
    $('a').removeAttr('href');
});