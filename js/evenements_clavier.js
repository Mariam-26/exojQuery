// Méthode "click()"
$('h1').click(function() {
    $(this).hide();
});

// Méthode "dblclick()"
$("p").dblclick(function() {
    $(this).hide();
});

// Méthode "mouseenter()"
$('#para4').hide();

$('.para3').mouseenter(function() {
    $('#para4').show();
});

// Méthode "mouseout()"
$('.para3').mouseleave(function() {
    $('#para4').hide();
});


// Méthode "hover()"
$('#para6').hide();
$('.para5').hover(
    function() {
        $('#para6').show();
    },
    function() {
        $('#para6').hide();
    }
);


// Méthode "mousedown()"
$('#para8').hide();
$('.para7').mousedown(function() {
    $('#para8').show();
});


// Méthode "mouseup()"
$('.para7').mouseup(function() {
    $('#para8').hide();
});