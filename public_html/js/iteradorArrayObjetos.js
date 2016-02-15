/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function constroiIterador(array){
    var nextIndex = 0;
    return {
        next: function(){
            if(nextIndex < array.length){
                return {value: array[nextIndex++]};
            }
//        return nextIndex < array.length ?
//            {value: array[nextIndex++], done: false} :
//            {done: true};
        }
    }
}

var tarefas = [
    {"tarefa": function() {
                document.write('<br/>' + 'Tarefa 1');
            }
    },
    {"tarefa": function() {
                document.write('<br/>' + 'tarefa 2');
            }
    },
    {"tarefa": function() {
                document.write('<br/>' + 'tarefa 3');
            }
    }
];

var sequenciaTarefas = constroiIterador(tarefas);
sequenciaTarefas.next().value.task();
sequenciaTarefas.next().value.task();
sequenciaTarefas.next().value.task();
sequenciaTarefas.next().value.task();
