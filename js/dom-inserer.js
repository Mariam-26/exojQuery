// Méthode append()
$('#b1').click(function() {
    $('.p1').append(' - Texte inséré avec append()');
});

// Méthode prepend()
$('#b2').click(function() {
    $('.p2').prepend(' - Texte ajouté avec prepend()');
});
// Méthode append()
$('#b3').click(function() {
    avecAppend();
});

// Méthode prepend()
$('#b4').click(function() {
    avecPrepend();
});

function avecAppend() {
    var t1 = '<p>Paragraphe créé en HTML</p>';
    var t2 = $('<p></p>').text('Paragraphe créé avec jQuery');
    var t3 = document.createElement('p');
    t3.innerHTML = 'Paragraphe créé avec JavaScript';
    $('#monDiv').append(t1, t2, t3);
};

function avecPrepend() {
    var t4 = '<p>Paragraphe créé en HTML</p>';
    var t5 = $('<p></p>').text('Paragraphe créé avec jQuery');
    var t6 = document.createElement('p');
    t6.innerHTML = 'Paragraphe créé avec JavaScript';
    $('#monDiv').prepend(t4, t5, t6);
};

// Méthode after()
$('#b5').click(function() {
    $('#monDiv2').after(' - Texte inséré avec after()');
});

// Méthode before()
$('#b6').click(function() {
    $('#monDiv2').before(' - Texte inséré avec before()');
});

// Méthode append()
$('#b7').click(function() {
    $('#monDiv2').append(' - Texte inséré avec append()');
});