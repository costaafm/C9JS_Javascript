/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
// PRIMEIRO MÉTODO: ATRAVÉS DO HTML EVENT HANDLER (NÃO RECOMENDADO)
// <input type="text" id="utilizador" onblur="verificaNomeUtilizador()" />
// 
// MÉTODO QUE ANALISA O PREENCHIMENTO DO ELEMENTO DO FORMULÁRIO UTILIZADOR
function verificaNomeUtilizador(){
    var elmsg = document.getElementById('feedback');  //obtem o elemento de feedebak
    var elutilizador = document.getElementById('utilizador');  // obtem o elemento input utilizador
    if(elutilizador.value.length < 5){  // verifica o tamanho conteúdo do elemento input
        elmsg.textContent = 'O nome do utilizador de conter 5 ou mais carateres'; 
    }
    else{
        elmsg.textContent = '';
    }
}

*/


/*
function verificaNomeUtilizador(){
    var elmsg = document.getElementById('feedback');  //obtem o elemento de feedebak
    if(this.value.length < 5){  // verifica o tamanho conteúdo do elemento do contexto
        elmsg.textContent = 'O nome do utilizador de conter 5 ou mais carateres'; 
    }
    else{
        elmsg.textContent = '';
    }
}


// SEGUNDO MÉTODO: ATRAVÉS DO TRADICIONAL DOM EVENT HANDLER
var elutilizador = document.getElementById('utilizador');  // obtem o elemento
elutilizador.onblur = verificaNomeUtilizador;    // associa ao evento onblur a método a disparar


// TERCEIRO MÉTODO: ATRAVÉS DO DOM EVENT LISTENER
var elutilizador = document.getElementById('utilizador');  // obtem o elemento
elutilizador.addEventListener('blur', verificaNomeUtilizador, false);  // configura o evento blur



// UTILIZAR  PARÂMETROS NO EVENT HANDLER & LISTENER
function verificaNomeUtilizador(tamanho_minimo){
    if(elutilizador.value.length < tamanho_minimo){  // verifica o tamanho conteúdo do elemento do contexto
        elmsg.innerHTML = 'O nome do utilizador de conter ' + tamanho_minimo + ' ou mais carateres'; 
    }
    else{
        elmsg.innerHTML = '';
    }
}

var elmsg = document.getElementById('feedback');  //obtem o elemento de feedebak
var elutilizador = document.getElementById('utilizador');

elutilizador.addEventListener('blur', function(){  // definir uma função anónima
    verificaNomeUtilizador(8);                     // para eftuar a chamada co parâmetro
}, false);
 



//UTILIZAR EVENT LISTENER NO IE-8 (NÃO SUPORTA O MÉTODO addEventListener)
function verificaNomeUtilizador(tam_min){
    if(elutilizador.value.length < tam_min){
        elmsg.innerHTML = 'O nome do utilizador tem de ter pelo menos ' + tam_min + ' carateres';
    }
    else{
        elmsg.innerHTML = '';
    }
}

var elutilizador = document.getElementById('utilizador');
var elmsg = document.getElementById('feedback');

if(elutilizador.addEventListener){     // possui o método
    elutilizador.addEventListener('blur', function(){  // implementa-o
        verificaNomeUtilizador(3);
    }, false);
}
else{                                   // senão
    elutilizador.attachEvent('onblur', function(){     // implementa para IE
        verificaNomeUtilizador(3);
    });
}
*/



// UTILIZAR O EVENT LISTENER COM O OBJETO EVENT
function verificaTamanho(e, tam_min){
    var el, elmsg;
    if(!e){
        e = window.event;
    }
    el = e.target || e.srcElement;
    elmsg = el.nextSibling;
    
    if(el.value.length < tam_min){
        elmsg.innerHTML = 'Tem de ter pelo menos ' + tam_min + ' carateres';
    }
    else{
        elmsg.innerHTML = '';
    }
}

var eluser = document.getElementById('utilizador');
if(eluser.addEventListener){
    eluser.addEventListener('blur', function(e){
        verificaTamanho(e, 6);
    }, false);
}
else{
    eluser.attachEvent('onblur', function(e){
        verificaTamanho(e, 6);
    });
}

var elpass = document.getElementById('password');
if(elpass.addEventListener){
    elpass.addEventListener('blur', function(e){
        verificaTamanho(e, 3);
    }, false);
}
else{
    elpass.attachEvent('onblur', function(e){
        verificaTamanho(e, 3);
    });
}
