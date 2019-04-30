$(function () {

    var ex = $('.ex1');

    $('.ev1').click(function () {
        ex.hide('slow');
    })

    $('.ev2').click(function () {
        ex.show('slow');
    })

    //O toggle encapsula o hide e o show, sempre ocorre o outro efeito
    $('.ev3').click(function () {
        ex.toggle('slow');
    })

    $('.ev4').keyup(function () {
        var texto = $(this).val();
        if (texto == 'hide') {
            ex.hide('slow');
        } else if (texto == 'show') {
            ex.show('slow');
        } else if (texto == 'toggle') {
            ex.toggle('slow');
        }
    })

})