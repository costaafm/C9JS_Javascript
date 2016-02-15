/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// aceder pelo elemento id
var el = document.getElementById('one');
el.className = 'cool';   // modifica o atributo class do elemento

//Aceder a elementos pelo atributo class
var elementos = document.getElementsByClassName('hot');  // devolve um nodelist
if(elementos.length > 1){
    el = elementos[1];     // obtem o 2º elemento da nodelista obtida
    el.className = 'cool';     // modifica o atributo class do elemento
}

//Aceder a elementos pela nome da tag
elementos = document.getElementsByTagName('li'); // devolve uma nodelist
if(elementos.length > 3){                            // neste caso com 4 nodes
    el = elementos[3];                           // obtem o último nó
    el.className = 'complete';   // modifica o atributo class do elemento
}


//Aceder por selectores CSS
el = document.querySelector('li.hot');   // devolve o primeiro elemento
el.className = 'cool';   // modifica o atributo class do elemento

// devolve uma nodelist com todos os elementos que possui o seletor css indicado
elementos = document.querySelectorAll('li');
elementos[elementos.length-1].className = 'cool';

elementos = document.querySelectorAll('li.hot');
for(var i = 0; i < elementos.length; i++){
    elementos[i].className = 'cool';
}


// Aceder ao elemento anterior e seguinte (no mesmo nível)
// para funcionar a tag <ul...</ul> tem de estar numa única linha
var elemento = document.getElementById('two');   // obtem o elemento com id=two
var elementoanterior = elemento.previousSibling; // obtem o nó irmão anterior
var elementoseguinte = elemento.nextSibling;     // obtem o nó irmão seguinte

elementoanterior.className = 'complete';   // modifica a class do nó anterior
elementoseguinte.className = 'cool';   //modifica a class do nó seguinte


// Aceder ao elemento anterior e seguinte (no mesmo nível)
var elemento = document.getElementById('two');
var elementoanterior = elemento.previousElementSibling;
var elementoseguinte = elemento.nextElementSibling;

elementoanterior.className = 'complete';
elementoseguinte.className = 'cool';


//Aceder ao primeiro nó filho e ao último nó filho
var elemento = document.getElementsByTagName('ul')[0]; // Apanhar o primeiro
var primeiro = elemento.firstElementChild;  // apanhar o primeiro elemento filho
var ultimo = elemento.lastElementChild;   // apanhar o último elemento filho

primeiro.setAttribute('class', 'cool');   // Modificar o atributo class do 1º
ultimo.setAttribute('class', 'complete'); // Modificar o atributo class do úllimo


//Aceder ao primeiro nó filho e ao último nó filho
var elemento = document.getElementsByTagName('ul')[0];  // Apanhar o primeiro
var primeiro = elemento.childNodes[1];    // apanhar o primeiro elemento filho
var ultimo = elemento.childNodes[elemento.childNodes.length-2]; // apanhar o último elemento filho

primeiro.className ='complete';  // Modificar o atributo class do 1º
ultimo.className = 'cool';   // Modificar o atributo class do úllimo


//Aceder ao primeiro nó filho e ao último nó filho
// Necessita que não existam espaço entre elementos tag
var elemento = document.getElementsByTagName('ul')[0];
var primeiro = elemento.firstChild;
var ultimo = elemento.lastChild;

primeiro.className = 'cool';
ultimo.className = 'complete';


// Aceder e modificar o texto do nó com a propriedade nodeValue
var elemento = document.getElementById('two');  // Obtem o elemento por id
var textoelemento = elemento.firstChild.nodeValue;  // obtem o texto do 1º abaixo
textoelemento = 'Couve';        // altera a variável com o nome
elemento.firstChild.nodeValue = textoelemento;   // modifica o valor do no

// Aceder e modificar o texto do nó com vários sub elementos (propriedade nodeValue)
var elone = document.getElementById('one');  // Obtem elemento com id one
elone.firstChild.nextSibling.nodeValue = 'fresca'; // modifica <em>
elone.firstChild.firstChild.nodeValue = 'Couve ';   // modifica texto <li>


// Aceder ao texto do elemento através de textContext e innerText
var primeiro = document.getElementById('one');  // obtem o elemento id one
var valorTextContent = primeiro.textContent;   // obtem o texto do elemento
var valorInnerText = primeiro.innerText;    // obtem o texto do elemento

//Mostra os valores no final da lista 
var msg = '<p>textContent: ' + valorTextContent + '</p>';
msg += '<p>innerText: ' + valorInnerText + '</p>';
var el = document.getElementById('scriptResult');
el.innerHTML = msg;

primeiro.textContent = 'Broa';  // modifica o texto o elemento