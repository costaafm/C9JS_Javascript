/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// devolve o objeto event
function getTarget(e){
    if(!e){
        e = window.event;   // IE antigos
    }
    return e.target || e.srcElement;
}

function compraCompleta(e){
    // remove o elemento da lista
    var el, elascendente, elascendente2;
    el = getTarget(e);   // apanha o elemento <a>
    
    if(el.nodeName.toLowerCase() === "a"){
        elascendente = el.parentNode;  // apanha o elemento pai <li>
    }
    if(el.nodeName.toLowerCase() === 'em'){
        elascendente = el.parentNode.parentNode;   // apanha <li> (2 níveis acima)
        
    }
    elascendente2 = elascendente.parentNode;   // apanha <ul>
    elascendente2.removeChild(elascendente);
        
    // anula o comportamento por defeito
    if(e.preventDefault){
        e.preventDefault(); 
    }
    else{
        e.returnValue = false;
    }
}

// delegação de eventos no elemento contentor
var el = document.getElementById('listacompras');  // elemento contentor
if(el.addEventListener){     // adiciona evento
    el.addEventListener('click', function(e){
        compraCompleta(e);
    }, false);
}
else{
    el.attachEvent('onclick', function(e){
        compraCompleta(e);
    });
}
