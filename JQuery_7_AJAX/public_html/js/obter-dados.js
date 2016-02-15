/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/***************************************************************************
 *   AJAX - OBTER DADOS EM HTML
 **************************************************************************/
/*
var xhr = new XMLHttpRequest();  // objeto de controlo do pedido AJAX

xhr.onload = function(){    // tratamento da resposta aos dados pedidos
    if(xhr.status === 200){   // estado do servidor OK
        document.getElementById('content').innerHTML = xhr.responseText; // atualiza página
    }
};

xhr.open('GET', 'dados/dados.html', true);  // Prepara o pedido
xhr.send(null);     // efetua o pedido ao servidor
*/

/***************************************************************************
 *   AJAX - OBTER DADOS EM XML
 **************************************************************************/

/* Cada elemento XML é transformado em HTML:
 * <div class="event">
 *   <img src="mapa" alt="Local" />
 *   <p><b>Local</b><br />Data</p>
 * </div>
 */
/*
var xhr = new XMLHttpRequest();
xhr.onload = function(){
    if(xhr.status === 200){
        var resposta = xhr.responseXML;
        var eventos = resposta.getElementsByTagName('evento');
        
        for(var i = 0; i < eventos.length; i++){
            var contentor, imagem, local, cidade, novalinha;
            // Constrói <div class="event">
            contentor = document.createElement('div');
            contentor.className = 'event';
            
            // Constrói <img src="mapa" alt="Local" />
            imagem = document.createElement('img');
            imagem.setAttribute('src', getValorDoNo(eventos[i], 'mapa'));
            imagem.setAttribute('alt', getValorDoNo(eventos[i], 'local'));
            // adiciona <img> ao <div>
            contentor.appendChild(imagem);
            
            // Constrói <p><b>Local</b><br />Data</p>
            local = document.createElement('p');
            cidade = document.createElement('b');
            novalinha = document.createElement('br');
            cidade.appendChild(document.createTextNode(getValorDoNo(eventos[i], 'local')));
            local.appendChild(cidade);
            local.appendChild(novalinha);
            local.appendChild(document.createTextNode(getValorDoNo(eventos[i], 'data')));
            
            // adiciona <p> ao <div>
            contentor.appendChild(local);
            
            // Atualiza o página com o novo conteúdo
            document.getElementById('content').appendChild(contentor);
        }
    }
};


// Função que devolve o valor do elemento XML pedido
function getValorDoNo(obj, tag){
    return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
}

xhr.open('GET', 'dados/dados.xml', true);
xhr.send(null);
*/


/***************************************************************************
 *   AJAX - OBTER DADOS EM JSON
 **************************************************************************/

var xhr = new XMLHttpRequest();

xhr.onload = function(){
    if(xhr.status === 200){
        objresposta = JSON.parse(xhr.responseText);

        // Constrói string com conteúdo HTML a partir o objeto
        var novoconteudo = '';
        for(var i = 0; i < objresposta.eventos.length; i++){
            novoconteudo += '<div class="event">' +
                    '<img src="' + objresposta.eventos[i].mapa + '" ' +
                    'alt="' + objresposta.eventos[i].local + '" />' +
                    '<p><b>' + objresposta.eventos[i].local + '</b><br />' +
                    objresposta.eventos[i].data + '</p>' + 
                    '</div>';
        }
        // atualiza conteudo
        document.getElementById('content').innerHTML = novoconteudo;
    }
};

xhr.open('GET', 'dados/dados.json', true);
xhr.send(null);
