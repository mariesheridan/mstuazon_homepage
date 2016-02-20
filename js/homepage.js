
$(document).ready(function(){
    var $hover = $('.hover-rise');
    var $sectionWithLogo = $('.sectionwithlogo');
    var headerNameColor = $('#header-name').css('color');
    var newHeaderNameColor = '#ff1a8c';
    var headerOrigSize = $('#header-name').css('font-size');
    var sectionTitleOrigSize = $('.sectiontitle').css('font-size');

    $hover.mouseenter(function(){
        expandFont($(this), newHeaderNameColor);
    });

    $hover.mouseleave(function(){
        shrinkFont($(this), headerNameColor, headerOrigSize);
    });

    $sectionWithLogo.mouseenter(function(){
        $(this).find('.sectiontitle').each(function(){
            expandFont($(this), newHeaderNameColor);
        });
    });

    $sectionWithLogo.mouseleave(function(){
        $(this).find('.sectiontitle').each(function(){
            shrinkFont($(this), headerNameColor, sectionTitleOrigSize);
        });
    });

});

function expandFont($object, color)
{
    $object.css('color', color);
    $object.animate({fontSize: '+=0.5em' }, 200);
}

function shrinkFont($object, color, origSize)
{
    $object.css('color', color);
    $object.animate({fontSize: origSize}, 200);
}