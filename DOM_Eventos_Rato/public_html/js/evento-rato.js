/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var msg = "<div class='header'><a id='close' href='#'>close X</a></div>";
msg += "<div><h2>Manutenção do sistema</h2>";
msg += "Os servidores irão a ser atualizados entre as 3 e as 4 da manhã. ";
msg += "Durante este tempo poderão ocorrer falhas no serviço.</div>";

var elnota = document.createElement('div');
elnota.setAttribute('id', 'note');
elnota.innerHTML = msg;
document.body.appendChild(elnota);

function fechaNota(){
    document.body.removeChild(elnota);
}

var elclose = document.getElementById('close');
elclose.addEventListener('click', fechaNota, false);

