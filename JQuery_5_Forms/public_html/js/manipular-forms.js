/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function(){
    var botaonovoitem = $('#newItemButton');
    var formnewitem = $('#newItemForm');
    var textinput = $('input:text');
    
    botaonovoitem.show();
    formnewitem.hide();
    
    $('#showForm').on('click', function(){
        botaonovoitem.hide();
        formnewitem.show();
    });
    
    formnewitem.on('submit', function(e){
        e.preventDefault();
        var novoitem = $('input:text').val();
        if(novoitem !== ''){
            $('li:last').after('<li>' + novoitem + "</li>");
            formnewitem.hide();
            botaonovoitem.show();
            textinput.val('');
        }
        else{
            textinput.focus();
        }
    });
});