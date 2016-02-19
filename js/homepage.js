
$(document).ready(function(){
    var $hover = $('.hover-rise');
    var headerNameColor = $('#header-name').css('color');
    var newHeaderNameColor = "#ff1a8c";
    var headerOrigSize = $('#header-name').css('font-size');
    var sectionTitleOrigSize = $('.sectiontitle').css('font-size');

    $hover.mouseenter(function(){
        $(this).css('color', newHeaderNameColor);
        $(this).animate({fontSize: '+=0.5em' }, 300);
    });

    $hover.mouseleave(function(){
        var origSize = $(this).hasClass('sectiontitle') ? sectionTitleOrigSize : headerOrigSize;
        $(this).css('color', headerNameColor);
        $(this).animate({fontSize: origSize}, 250);
    });
});