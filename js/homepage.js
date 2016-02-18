
$(document).ready(function(){
    var hover = $('.hover-rise');
    var headerNameColor = $('#header-name').css('color');
    var newHeaderNameColor = "#ff1a8c";

    hover.mouseenter(function(){
        
        $(this).css('color', newHeaderNameColor);
        $(this).animate({fontSize: '1.5em'}, 300);
    });

    hover.mouseleave(function(){
        $(this).css('color', headerNameColor);
        $(this).animate({fontSize: '1em'}, 250);
    });

});