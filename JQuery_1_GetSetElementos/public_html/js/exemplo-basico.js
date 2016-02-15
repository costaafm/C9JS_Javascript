
//TESTAR SE A PÁGINA ESTÁ PRONTA
//$(document).ready(function(){
//    alert("Documento pronto a ser processado.");
//});



//OUTRA FORMA DE TESTAR SE A PÁGINA ESTÁ PRONTA
//$(function(){
//    alert("Documento pronto a ser processado.");
//});

 

//// EXEMPLO BÁSICO DE UTILIZAÇÃO DE JQUERY
//$(function(){
//    $(':header').addClass('headline');  // Adiciona novo atributo class 
//    $('li:lt(3)').hide().fadeIn(1500);  // esconde 3 primeiros seguido de fadein
//    $('li').on('click', function(){     // define evento click no elemento li
//        $(this).remove();               // remove o elemento do click
//    });
//});



//// LOOPING - AS AÇÕES APLICAM-SE AOS ELEMENTOS SELECIONADOS
//// O LOOP DE APLICAÇÃO DA AÇÃO É AUTOMATICAMENTE EFETUADA PELO JQUERY
//$(function(){
//    $('li em').addClass('seasonal');  // adiciona atributo class ao li em
//    $('li.hot').addClass('favorite'); // adiciona atrib class aos elem. li.hot
//    $('li#four').addClass('seasonal');
//});


//// CHANNING - OS MÉTODOS NOS JQUERY PODEM SER ENCADEADOS PROVOCANDO
//// VÁRIAS AÇÕES EM CADEIA SOBRE O ELEMENTO SELECIONADO
//$(function(){
//    $('li[id!="one"]')
//            .hide()             // esconde os elementos 
//            .delay(500)         // cria uma pausa
//            .fadeIn(1400);      // efetua um fadein aos elementos
//});


///// ********************************************************** 
////       OBTER CONTEÚDO DOS ELEMENTOS html() e text()       *
///// **********************************************************
//
//// OBTER O CONTEÚDO HTML DE UL E DUPLICAR O CONTEÚDO DE UL
//$(function(){
//   var listHTML = $('ul').html();
//   $('ul').append(listHTML);
//});


////OBTER O CONTEÚDO TEXTUAL DE UL E ACRESCENTÁ-LO NUM NOVO ELEMENTO
//$(function(){
//    var listtext = $('ul').text();
//    $('ul').append('<p>' + listtext + '</p>');
//});


////OBTER O CONTÉUDO HTML DO PRIMEIRO LI E ACRESCENTÁ-LO A TODOS OS ELEM LI
//$(function(){
//   var listitemhtml = $('li').html();   // obtem o conteúdo html dp 1º li
//   $('li').append('<i>' + listitemhtml + '</i>');  // atualiza html dos n li
//});



////OBTER O CONTEÚDO TEXTUAL DE N LI E ACRECENTÁ-LO AOS N LI
//$(function(){
//   var listitemtext = $('li').text();
//   $('li').append('<i>' + listitemtext + '</i>');
//});


//// ***************************************************************
////                MUDAR O CONTEÚDO DOS ELEMENTOS                  
//// ***************************************************************
//
//$(function(){
//   $('li:contains("Pinhões")').text('Castanhas');  // substitui o conteúdo
//                                                   // de li com texto pinhões
//                                                   // para Castanhas
//   $('li.hot').html(function(){ // reenquadra o conteúdo de li.hot numa tag em
//       return '<em>' + $(this).text() + '</em>';
//   });
//   $('li#one').remove();  // remove o elemento li com id one
//});


//// ***************************************************************
////                       INSERIR NOVOS ELEMENTOS                  
//// ***************************************************************
//
//$(function(){
//   $('ul').before('<p class="notice">Acabado de atualizar</p>'); // adiciona
//                                        // antes de ul
//   $('li.hot').prepend('- ');   // adiciona conteúdo ao existente (no início)
//   $('li.hot').append(' +')     // adiciona contúdo ao existem (no fim)
//   var novoitem = $('<li><em>Soja</em> sem glúten</li>'); // cria novo elemento
//   $('li:last').after(novoitem); // adiciona novo elemento à árvore DOM
//});


//// ***************************************************************
////                       TRABALHAR COM ATRIBUTOS                  
//// ***************************************************************
//
//$(function(){
//   $('li#three').removeClass('hot');
//   $('li.hot').addClass('favorite');
//   // obter o valor d atributo id de cada li
////   $('li').append(function(){    
////      return '<i>' + $(this).attr('id') + '</i>';  
////   });
//
//   //obter o valor d atributo id de cada li (de outra forma)
//   $('li').each(function(){  // trabalha cada elemento
//      var id = this.id;     // obtem o valor da propriedade id do elemento
//      $(this).append('<i>' + id + '</i>');  //acrescenta-o ao conteúdo do elem. 
//   });
//   
//   $('ul').attr('id', 'group');  // atualiza o valor do atributo id de ul
//});


//// ***************************************************************
////                TRABALHAR COM PROPRIEDADES CSS                  
//// ***************************************************************
//
//$(function(){
//   var valcorfundocss = $('li').css('background-color'); // obtem o valor da
//                                    // propriedade css background-color
//   $('ul').append('<p>Cor de fundo: ' + valcorfundocss + '</p>'); // mostra
//   
//   $('li').css({    // definir um conjunto de regras css para elementos li 
//      'background-color': '#c5a996',
//      'border': '1px solid #fff',
//      'color': '#000',
//      'font-family': 'Georgia',
//      'padding-left': '+=75'
//   });
//});
//
//

//// FORMAS DE DEFINIR SELETORES
$(function(){
    $('#four').addClass('hot');    // seletor de id
    $('div#page ul li#one em').addClass('seasonal');  // seletor descritivo
    $('div#page ul li#one em').css('color', 'green'); // seletor descritivo
    
    var elhot = $('div#page ul li.hot').html(); //obter valor interno do seletor
    $('li#four.cool').html(elhot);   // alteração do HTML do elemento
    
    $('.cool').addClass('favorite');    //seletor de class
    $('.cool').html('<em class="seasonal">Item</em> modificado'); // alteração
    
    $('#one').text ('Castanhas');  // alteração do conteudo textual do elemento
    $('#one em').addClass('seasonal');
    $('#one').addClass('complete');
    
    $('ul').append('<p>' + $('ul').text() + '</p>'); // acrescentar elem. depois

    $('ul').prepend('<p>' + $('li').html() + '</p>'); // acrescenta elem. antes
});


