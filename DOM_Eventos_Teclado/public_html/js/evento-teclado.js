/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function contaCarateres(eventobj){
    var texto, caraterinfo, contador, ultimocarater;
    texto = document.getElementById('message').value;   //  valor caixa de menssagem
    caraterinfo = document.getElementById('charactersLeft'); // elemento da contagem de carateres
    contador = (180 - texto.length);    // calcula os carateres em falta
    caraterinfo.textContent = 'Faltam ' + contador + ' carateres.';  // apresenta os carateres em falta
    
    ultimocarater = document.getElementById('lastKey');  // elemento qeu apresenta o código doc arater
    ultimocarater.textContent = 'Código ASCII do último carater: ' + eventobj.keyCode;  // apresenta o código do carater
}

var el = document.getElementById('message');
el.addEventListener('keypress', contaCarateres, false);