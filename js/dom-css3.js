// Méthode siblings()
$('h1').siblings().css('color', 'red');
$('h1').siblings('.p1').css('color', 'blue');

// Méthode next()
$('h1').next().css('color', 'green');
$('.p1').nextAll().css('color', 'purple');
$('.li1').nextUntil('.li4').css('color', 'orange');

// Méthode prev()
$('.p4').prev().css('color', 'red');
$('.p3').prevAll().css('color', 'blue');
$('.p5').prevUntil('.li1').css('color', 'green');