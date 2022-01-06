// Méthode "on()"
$('h1').on('click', function() {
    $(this).hide();
});

$('.div1').on('mouseenter mouseleave', function() {
    $('#msg1').text('Vous êtes entré ou sorti de la div 1');
    $('#msg1').css('color', 'red');
});


$('.div2').on({
    mouseenter: function() {
        $('#msg2').text('Vous êtes entré dans la div 2');
        $('#msg2').css('color', 'yellow');
    },

    mouseleave: function() {
        $('#msg2').text('Vous êtes sorti dans la div 2');
    }
});

// Méthode "trigger()"
$("#trg").click(function() {
    $('#fcs').trigger('focus');
});

// Méthode "triggerHandler()"
$("#trgh").click(function() {
    $('#fcs').triggerHandler('focus');
});

$('#fcs').focus(function() {
    $('#msg').text('Evènement focuc déclenché');
    $('#msg').css('color', 'green');
})


$('#msg3').hide();
$('#b2').click(function() {
    $('#b1').on('click', function() {
        $('#msg3').show();
    });
    $('#b1').text('Vous pouvez maintenat me cliquer');
})

// Méthode "off()"
$('#b3').click(function() {
    $('#b1').off('click');
    $('#b1').text('Plus de clic possible');
});

// Méthode "off()"
$('p').on("click mouseover mouseout", function(e) {
    $('#msg4').text('Evènement déclenché : ' + e.type);
    $('#msg4').css('color', 'blue');
});