/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function mostraElemento(){
    alert(this.innerHTML);
}

// Testando o método EVENT BUBBLING
var el = document.getElementById('list');
el.addEventListener('click', mostraElemento, false);

var el = document.getElementById('item');
el.addEventListener('click', mostraElemento, false);

var el = document.getElementById('link');
el.addEventListener('click', mostraElemento, false);

// Testando o método EVENT CAPTURING
var el = document.getElementById('list2');
el.addEventListener('click', mostraElemento, true);

var el = document.getElementById('item2');
el.addEventListener('click', mostraElemento, true);

var el = document.getElementById('link2');
el.addEventListener('click', mostraElemento, true);