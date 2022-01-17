// // Méthode css() 
// $('span').parents().css({
//     'color': 'blue',
//     'border': '2px solid orange'
// });

$('span').parentsUntil('.l1').css({
    'color': 'blue',
    'border': '2px solid orange'
});