// Méthode "focus()"
$('#prenom').focus(function() {
    $(this).css('background-color', 'yellow');
});

// Méthode "focusin()"
$('#fld').focusin(function() {
    $(this).css('background-color', 'blue');
});

// Méthode "focusout()"  
$('#fld').focusout(function() {
    $(this).css('background-color', 'purple');
});

// Méthode " focus() et blur()"
$('#nom').focus(function() {
    $(this).css('background-color', 'red');
});
$('#nom').blur(function() {
    $(this).css('background-color', 'gray');
});

// Méthode "change()" ne fonctionne qu'avec : input, textarea et select
$("#liste").change(function() {
    alert(`Nouvelle option sélectionnée`)
});

// Méthode "submit()"
$('#formulaire').submit(function() {
    alert(`Formulaire envoyé`);
});