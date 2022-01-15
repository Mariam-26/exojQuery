// Méthode clildren()
$('.l1').children().css('color', 'red');
$('.l1').children('.li1').css('color', 'green');
$('.l1').children('.li2').css('color', 'blue');
// $('.l1').children('.li3').css('color', 'yellow');

// Méthode find()
$('.l2').find('*').css('color', 'yellow');