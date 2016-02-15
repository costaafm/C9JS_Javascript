/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function getTarget(e){
    if(!e){
        e = window.event;
    }
    return e.target || e.srcElement;
}

function inicio(){
    var textinput = document.getElementById("utilizador");
    textinput.focus();
}

function verificaNomeUtilizador(e, tam_min){
    var el = getTarget(e);
    var textoel = el.value;
    if(textoel.length < tam_min){
        elmsg.className = 'warning';
        elmsg.textContent = 'Nº de carateres insuficientes...';
    }
    else{
        elmsg.textContent = '';
    }
}

function infoNomeUtilizador(e, tam_min){
    elmsg.className = 'tip';
    elmsg.textContent = 'O nome do utilizador deve ter pelo menos ' + tam_min + 'carateres.';
}

var elmsg = document.getElementById('feedback');
var el = document.getElementById('utilizador');


el.addEventListener('focus', function(e){
    infoNomeUtilizador(e, 7);
}, false);

el.addEventListener('blur', function(e){
    verificaNomeUtilizador(e, 7);
}, false);

window.addEventListener('load', inicio, false);