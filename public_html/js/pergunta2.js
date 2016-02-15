/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var searchString = "Now is the time and this is the time and that is the time";
var pattern = /t\w*e/g;
var matchArray;
var str = "";
// verifica padrão com o método exec, se não é null, processa
while((matchArray = pattern.exec(searchString)) != null) {
    str+="na posição " + matchArray.index + " foi encontrado " + matchArray[0] + "<br/>";
}
document.write(str);
