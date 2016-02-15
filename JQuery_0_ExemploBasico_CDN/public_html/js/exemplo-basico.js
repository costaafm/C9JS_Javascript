/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(':header').addClass('headline');
$('li:lt(3)').hide().fadeIn(1500);
$('li').on('click', function(){
    $(this).remove();
});

// looping
$('li em').addClass('seasonal');
$('li.hot').addClass('favorite');

// channing
$('li[id!="one"]').hide().delay(500).fadeIn(1400);