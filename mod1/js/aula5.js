$(function () {

    $('img')
        .width($(window).width())
        .height($(window).height())

    $(window).resize(function () {
        $('img')
            .width($(window).width())
            .height($(window).height())
    });

    // $(window).scroll(function () { 
    //     $('img').fadeOut();
    // });

$(window).scroll(function () { 
    var topo = $(window).scrollTop();
    if(topo>10){
        $('img').fadeOut(1000);
    } else {
        $('img').fadeIn();
    }
});

})
