$(function () {

    var ex = $('.ex1');

    $('.ev1').click(function () {
        $(this).css('background', '#ccc');
        ex.text("Você Clicou!");
    });

    $('.ev2').dblclick(function () {
        $(this).css('background', '#ccc');
        ex.text("Você Clicou duas Vezes!");
    });

    $('.ev3')
        .focusin(function () {
            $(this).css('background', '#ccc')
            ex.text("Você deu foco!")
        })
        .focusout(function () {
            $(this).css('background', 'black')
            ex.text("Você saiu do Foco!")
        })


})