
$(document).ready(function(){
    hover = $('.hover-rise');

    hover.mouseenter(function(){
        $(this).css('color', '#862d59');
        $(this).css('font-size', '1.5em');
    });

    hover.mouseleave(function(){
        $(this).css('color', '#c6538c');
        $(this).css('font-size', '1em');
    });

});