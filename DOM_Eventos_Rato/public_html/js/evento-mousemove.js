/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var sx = document.getElementById('sx');
var sy = document.getElementById('sy');
var px = document.getElementById('px');
var py = document.getElementById('py');
var cx = document.getElementById('cx');
var cy = document.getElementById('cy');

function mostraPosicao(evento){
    sx.value = evento.screenX;
    sy.value = evento.screenY;
    px.value = evento.pageX;
    py.value = evento.pageY;
    cx.value = evento.clientX;
    cy.value = evento.clientY;
}

var elbody = document.getElementById('body');
elbody.addEventListener('mousemove', mostraPosicao, false);