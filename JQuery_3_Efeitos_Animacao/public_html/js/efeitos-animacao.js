/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*************************************************************************
 *                EFEITOS BÁSICOS E ANIMAÇÃO PERSONALIZADA
 *************************************************************************/

$(function(){ 
    $('h2').hide().slideDown();
    var lista = $('li');
    lista.hide().each(function(index){
        $(this).delay(700 * index).fadeIn(700);
    });
    
    lista.fadeTo(700, 0.5);
    
    lista.on('click', function(){
        // Sintaxe: .animate({styles}[, speed][, easing][, complete]);
//        $(this).animate({
//            opacity: 0.0,
//            paddingLeft: '+=80'
//        }, 500, function(){
//            $(this).remove();
//        });
        
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 
        {
            duration: 1500,
            easing: 'swing',
            complete: function(){$(this).remove();},
            queue: false    
        });
        
//        $(this).animate({
//            opacity: 1.0,
//            paddingLeft: '+=80'
//        }, 500, 'swing', function(){$(this).remove();});

    });
    
    lista.on('mouseover', function(e){
        $(this).fadeTo(300, 1.0);
    });
    
    lista.on('mouseout', function(){
        $(this).fadeTo(300, 0.5);
    });
   
});