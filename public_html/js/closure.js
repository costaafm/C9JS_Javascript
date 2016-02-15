/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function outer (x) {
    return function(y) { 
        return x * y; 
    };
}
var multiThree = outer(3);
document.write('<br/>' + multiThree(2)); // 6 is printed
document.write('<br/>' + multiThree(3)); // 9 is printed
document.write('<br/>' + multiThree(20));
