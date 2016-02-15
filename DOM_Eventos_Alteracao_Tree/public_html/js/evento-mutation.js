/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function adicionaItem(e){
    e.preventDefault();
    var novoel = document.createElement('li');
    var novotexto = document.createTextNode('Novo item');
    novoel.appendChild(novotexto);
    ellista.appendChild(novoel);
}

function atualizaContador(){
    var nritems = ellista.getElementsByTagName('li').length;
    var elcontador = document.getElementById('counter');
    elcontador.innerHTML = nritems;
}

var ellista = document.getElementById('lista');
var elbotao = document.querySelector('a');
//var elbotao = document.getElementsByClassName('add').item(0);

elbotao.addEventListener('click', adicionaItem, false);
ellista.addEventListener('DOMNodeInserted', atualizaContador, false);
