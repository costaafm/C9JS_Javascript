/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function sugestaoPacote(){
    var pacote = this.options[this.selectedIndex].value;  // obtem o valor da opção selecionada
    var elsugestaopacote = document.getElementById('packageHint');
    if(pacote == 'mensal'){
        elsugestaopacote.innerHTML = 'Poupe 10€ se pagar anualmente!';
    }
    else{
        elsugestaopacote.innerHTML = 'Escolha sábia!';
    }
}

function verificaAceitacaoTermos(eventobj){
    var eltermos = document.getElementById('terms');
    var elsugestaotermos = document.getElementById('termsHint');
    if(!eltermos.checked){
        elsugestaotermos.innerHTML = "Tem de concordar com os termos do contrato.";
        eventobj.preventDefault();
    }
}

var elform = document.getElementById('formSignup');

var elpacoteselecionado = document.getElementById('package');

elform.addEventListener('submit', verificaAceitacaoTermos, false);
elpacoteselecionado.addEventListener('change', sugestaoPacote, false);

