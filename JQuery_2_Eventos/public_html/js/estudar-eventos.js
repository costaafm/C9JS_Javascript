/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*************************************************************************/
/*                 PRINCÍPIOS DE MANIPULAÇÃO DE EVENTOS                  */
/*************************************************************************/

//$(function(){
//   var id = '';
//   var listaitems = $('li');  // Otem a lista de objetos jQuery li
//   
//   listaitems.on('mouseover', function(){   // aplica ação ao evento mouseover
//      id = this.id;                         // obter o valor do atributo id 
//      $(this).append('<i>' + id + '</i>');  // acrecentá-lo ao conteúdo do elem
//   });
//   
//   listaitems.on('mouseout', function(){    // aplica ação ao evento mouseout
//      $(this).children('i').remove();       // apaga os elementos internos <i>
//   });
//});


/*************************************************************************/
/*                   O OBJECTO EVENT E SUA UTILIZAÇÃO                    */
/*************************************************************************/

//$(function(){
//    $('li').on('click', function(e){   // define ação para o evento click
//       $('li span').remove();    // remove os elementos li span
//       var data = new Date();    // define um objeto Date
//       data.setTime(e.timeStamp);    // guarda no objeto Date a data do click
//       var dataclick = getData(data); // obtem a descrição da data
//       $(this).append('<span class="date">' + dataclick + ' ' 
//                          + e.type + '</span>');  // mostra data no item do click
//    }); 
//   
//    // descreve a data em português
//    var getData = function(d){
//        var sdata = '';
//        var dsem = d.getDay();
//        switch(dsem){
//            case 0:
//               sdata += 'Dom';
//               break;
//            case 1:
//               sdata += 'Seg';
//               break;
//            case 2:
//               sdata += 'Ter';
//               break;
//            case 3:
//               sdata += 'Qua';
//               break;
//            case 4:
//               sdata += 'Qui';
//               break;
//            case 5:
//               sdata += 'Sex';
//               break;
//            case 6:
//               sdata += 'Sab';
//               break;
//        }
//        sdata += ' ' + d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getYear()
//         + '  ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
//      
//        return sdata;
//   };
//   
//});


/**************************************************************************/
/* PARÂMETROS ADICIONAIS NA MANIPULAÇÃO DE EVENTOS + DELEGAÇÃO DE EVENTOS */
/**************************************************************************/

//$(function(){
//    var listaitems, itemestado, tipoevento;
//    $('#notes').hide();
//    // Delegar eventos
//    $('ul').on(
//        'mouseover click dblclick',
//        ':not(#four)',
//        {estado: 'importante'},
//        function(e){
//            $('#notes').show();
//            listaitems = 'Item: ' + e.target.textContent + '<br/>';
//            itemestado = 'Estado: ' + e.data.estado + '<br/>';
//            tipoevento = 'Evento: ' + e.type;
//            var notas = listaitems + itemestado + tipoevento;
//            $('#notes').html(notas);
//        }
//    );
//    
//    $('ul').on('mouseout', function(){
//        $('#notes').hide();
//    });
//});