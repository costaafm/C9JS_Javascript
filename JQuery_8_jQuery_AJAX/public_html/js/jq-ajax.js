/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/***************************************************************************
 * JQUERY & AJAX - O MÉTODO .LOAD()
 **************************************************************************/

$(function(){
    $('#content').load('home.html #conteudo').hide().fadeIn(1000);
    
    $('nav a').on('click', function(e){
        e.preventDefault();
        var url = this.href;

        $('nav a.current').removeClass('current');
        $(this).addClass('current');

        $('#container').remove();
        $('#content').load(url + ' #conteudo').hide().fadeIn(1000);
    });
}());


/***************************************************************************
 * JQUERY & AJAX - O MÉTODO .AJAX()
 **************************************************************************/
/*
$(function(){
    $('#content').load('home.html #conteudo').hide().fadeIn('slow');
    
    $('nav a').on('click', function(e){
        e.preventDefault();
        var url = this.href;
        var conteudo = $('#content');
        
        $('nav a.current').removeClass('current');
        $(this).addClass('current');
        $('container').remove();
        
        $.ajax({
            type: 'GET',
            url: url,
            timeout: 2000,
            beforeSend: function(){
                conteudo.append('<div id="loading">Carregando...</div>');
            },
            complete: function(){
                $('#loading').remove();
            },
            success: function(data){
                conteudo.html($(data).find('#container')).hide().fadeIn(400);
            },
            error: function(){
                conteudo.html('<div class="loading">Por favor tente novamente...</div>');
            }
        });
    });
}());
*/
