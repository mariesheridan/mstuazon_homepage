
$(document).ready(function(){
    hover = $('.hover-rise');

    hover.mouseenter(function(){
        $(this).css('color', '#862d59');
        //$(this).css('font-size', '1.5em');
        $(this).animate({fontSize: '1.5em'}, 300);
    });

    hover.mouseleave(function(){
        $(this).css('color', '#c6538c');
        //$(this).css('font-size', '1em');
        $(this).animate({fontSize: '1em'}, 300);
    });

});