/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var charSets = ["ab","bb","cd","ab","cc","ab","dd","ab"];

function replaceElement(element,index,array, padrao, novovalor) {
    if (element == padrao) 
        array[index] = novovalor;
}

for(var i = 0, t = charSets.length; i < t; i++){
    replaceElement(charSets[i], i, charSets, "ab", "*--*");
}


document.write(charSets); // ["**", "bb", "cd", "**", "cc", "**", "dd", "**"]
