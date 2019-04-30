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
        }).focusout(function () {
            $(this).css('background', '#000')
            ex.text("Você saiu do Foco!")
        });

    $('.ev4').mouseover(function () {
        $(this).css('background', '#ccc')
        ex.text("Você passou o mouse")
    }).mouseout(function () {
        $(this).css('background', '#000')
        ex.text("Você tirou o mouse")
    });

    $('.ev5').mousedown(function () {
        $(this).css('background', '#ccc')
        ex.text("Você está segurando o mouse")
    }).mouseup(function () {
        $(this).css('background', '#000')
        ex.text("Você soltou o mouse")
    });

    var a = 0;

    $('.ev6').mouseenter(function () {
        a += 1;
        ex.text('Entradas do Mouse ' + a) 
    }).mouseout(function(){
        ex.text('Saida do Mouse')
    });

    var b = 0;
    $('.ev7').mouseover(function(){
        b += 1;
        ex.text('Mouse Over: ' + b)
    }).mouseleave(function(){
        ex.text('Mouse Leave')
    })

    $('.ev8').mousemove(function(move){
        var localx = move.pageX;
        var localy = move.pageY;
        ex.text('X: ' + localx + 'Y: ' + localy)
    })

})