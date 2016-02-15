/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/****************************************************************************
 *                       NAVEGANDO A ÁRVORE DOM
 ****************************************************************************/

//$(function(){
//    var h2 = $('h2');   // obtem o elemento <h2>
//    $('ul').hide();     // esconde a lista
//    h2.append('<a class="show">Mostra</a>');// acrescenta um elemento <a> a <h2>
//    
//    // quando clicar em <a>
//    h2.on('click', function(){
//        h2.next()       // para os elementos seguintes
//                .fadeIn(500)    // faz aparecer
//                .children('.hot')   // para todos elementos descendentes <li>
//                .addClass('complete');  // modifica o valor do atributo class
//        h2.find('a').fadeOut();  // desvanece o elemento <a>
//    });
//    
//});


/****************************************************************************
 *             ADICIONAR E FILTRAR ELEMENTOS DA SELEÇÃO JQUERY
 ****************************************************************************/

//$(function(){
//    var listaitems = $('li');  // obtem os elementos <li> 
//    listaitems.filter('.hot:last').removeClass('hot'); // retira o valor hot da
//                                                       // do último elemento hot
//    
//    $('li:not(.hot)').addClass('cool');  // altera o atributo class para cool
//                                         // de todos os elementos não .hot
//    //listaitems.filter(':not(.hot)').addClass('cool');  // ibidem
//    
//    listaitems.has('em').addClass('complete');  // altera o valor do atribturo
//                                                // class dos elementos com <em>
//    
//    listaitems.each(function(){  // para todos os elementos da lista
//        var el = $(this);       // apanha elemento atual
//        if(el.is('.hot')){      // verifica se tem o valor hot do atributo class
//            el.prepend('Prioritário: ');
//        }
//    });
//    
//    $('li:contains("Mel")').append(' (local)');  // para o elemento li que 
//                                    //contem o valor 'Mel' adiciona...
//});


/****************************************************************************
 *             ENCONTRAR ELEMENTOS A PARTIR DO SEU ÍNDICE
 ****************************************************************************/

$(function(){
    $('li:lt(2)').removeClass('hot');
    $('li:eq(0)').addClass('complete');
    $('li:gt(2)').addClass('cool');
});
