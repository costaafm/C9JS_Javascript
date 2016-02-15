/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/*
// Atualizar texto e markup de um elemento através da propriedade innerHTML
var el = document.getElementById('one');  // obtem o elemento com id one   
var elconteudo = el.innerHTML;   // apanha o conteúdo do elemento
// Altera o conteúdo do elemento (texto e markup)
el.innerHTML = "<a href='http://www.istec.pt'>" + elconteudo + "</a>"; 




//Adicionar um novo elemento à DOM tree
var novoel = document.createElement('li');  //Criar um novo elemento
var novotexto = document.createTextNode('Quinoa');  // criar um elemento texto
novoel.appendChild(novotexto);   // Adicionar o elemento texto ao novo elemento li
var posicao = document.getElementsByTagName('ul')[0];  // obtem o elemento ascendente
posicao.appendChild(novoel);    // Adiciona o novo elemento ao ascendente



//Remover um elemento da DOM tree
var removeel = document.getElementsByTagName('li')[3]; // obtem o elemento a remover
var elascendente = removeel.parentNode;   // obtem o elemento ascendente do elemento a apagar
elascendente.removeChild(removeel);   // remove o elemento

//Procurar um atributo e obter o seu valor
var primeiroel = document.getElementById('one');  // obter o elemento
if(primeiroel.hasAttribute('class')){     // verifica se tem atributo class
    var atr = primeiroel.getAttribute('class');  // retira o valor do atribto class
    
    // Adiciona o valor do atributo ao final da lista
    var elfinal = document.getElementById('scriptResult');  // obtem o elemento de final da página
    // mosta o contúdo do atributo class
    elfinal.innerHTML = '<p>O primeiro elemento tem uma class com o nome: ' + atr + '</p>'; 
}
 
 




//CRIAR ATRIBUTOS E MUDAR OS SEUS VALORES
var primeiroel = document.getElementById('one');  // obter o elemento
primeiroel.className = 'complete';   // Alterar o valor do atributo class

//Acrecentar um atributo ao último elemento
var quatroel = document.getElementsByTagName('li').item(3);  // obtem o 4º elemento
quatroel.setAttribute('class', 'cool');   //acrescenta o atributo class com o valor cool


 */



//REMOVER UM ATRIBUTO DE UM ELEMENTO
var primeiroel = document.getElementById('one');   // obtem o primeiro elemento
if(primeiroel.hasAttribute('class')){    //verifica se o 1º elemento tem o atributo class
    primeiroel.removeAttribute('class');   // se tem, remove-o
}
