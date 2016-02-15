/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function(){
    var dados;
    
    // FUNÇÃO QUE RECOLHE DADOS DO FICHEIRO JSON
    function loadTimeTable(){
        $.getJSON('dados/programa.json')
                .done(function(data){
                    dados = data;})
                .fail(function(){
                    $('#event')
                        .html('Lamentamos! Não é possivel carregar o programa')
                });
    }
    
    loadTimeTable();
    
    //CONTROLA O EVENTO DE SELEÇÃO DA LOCALIZAÇÃO
    // PREENCHENDO A ÁREA DE SESSIONS
    $('#content').on('click', '#event a', function(e){
        e.preventDefault();
        var loc = this.id.toUpperCase();
        
        var novoconteudo = '';
        for(var i = 0; i < dados[loc].length; i++){
            novoconteudo += '<li><span class="time">' 
                    + dados[loc][i].time + '</span>' 
                    +'<a href="dados/descricoes.html#' + 
                    dados[loc][i].title.replace(/ /g,'-') + '">' +
                    dados[loc][i].title + '</a></li>';
        }
        
        $('#sessions').html('<ul>' + novoconteudo + '</ul>');
        
        $('#event a.curent').removeClass('current');
        $(this).addClass('current');
        
        $('#details').text('');
    });
    
    //CONTROLA O CLICK NA ÁREA DE SESSIONS PARA CARREGAR AS DESCRIÇÕES
    $('#content').on('click', '#sessions li a', function(e){
        e.preventDefault();
        var fragmento = this.href;
        
        fragmento = fragmento.replace('#', ' #');
        $('#details').load(fragmento);
        
        $('#sessions a.current').removeClass('current');
        $(this).addClass('current');
    });
    
    //CONTROLA O CLICK NA BARRA DE NAVEGAÇÃO
    $('nav a').on('click', function(e){
        e.preventDefault();
        var url = this.href;
        
        $('nav a.current').removeClass('current');
        $(this).addClass('current');
        
        $('#container').remove();
        $('#content').load(url + ' #container').hide().fadeIn('slow');
    });
});