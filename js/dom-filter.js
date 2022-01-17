// Méthode first()
$('p').first().css('color', 'red');

// Méthode last()
$('p').last().css('color', 'green');

// Méthode eq()
$('p').eq(1).css('color', 'blue');
$('p').eq(-2).css('color', 'yellow');

// Méthode filter()
$('li').filter(':nth-child(even)').css('color', 'purple');
$('tr').filter(':nth-child(odd)').css('color', 'aqua');

// Méthode not()
$('li').not(':nth-child(even)').css('color', 'orange');
$('tr').not(':nth-child(odd)').css('color', 'pink');