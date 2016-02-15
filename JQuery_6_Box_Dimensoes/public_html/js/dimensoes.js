/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*************************************************************************
 *             MANIPULANDO DIMENSÕES DOS ELEMENTOS
 ************************************************************************/

//$(function(){
//    var alturalista = $('#page').height();
//    var larguralista = $('#page').width();
//    $('ul').before('<p>Altura: ' + alturalista + 
//            'px<br/>Largura: ' + larguralista + 'px</p>');
//    
//    $('li').width('50%');
//    $('li#one').width(150);
//    $('li#two').width('75%');
//    $('li:gt(2)').width('95%');
//    
//    $(window).on('resize', function(){
//        $('p').remove();
//        var alturalista = $('#page').height();
//        var larguralista = $('#page').width();
//        $('ul').before('<p>Altura: ' + alturalista + 
//                'px<br/>Largura: ' + larguralista + 'px</p>');
//    });
//        
//});


/*************************************************************************
 *             DETERMINAR A POSIÇÃO DOS ITEMS NA PÁGINA
 ************************************************************************/
//
$(function(){
    var janelabrowser = $(window);
    var clipedeslizante = $('#slideAd');
    var zonafinal = $('#footer').offset().top - janelabrowser.height()- 500;
    
    janelabrowser.on('scroll', function(){
        if(zonafinal < janelabrowser.scrollTop()){
            clipedeslizante.animate({'right': '0px'}, 250);
        }
        else{
            clipedeslizante.stop(true).animate({'right': '-360px'}, 250);
        }
    });
    
});
