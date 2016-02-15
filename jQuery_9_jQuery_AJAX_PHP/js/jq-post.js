$(function(){
    $('#register').on('submit', function(e) {           // Quando clicar no botão
      e.preventDefault();                               // Anula funcão poe defeito

      if(estaPreenchido()){
        var details = $('#register').serialize(); // Obter os dados do form em string
        $.post('register.php', details, function(data) {  // Usa $.post() para enviar pedido
          $('#register').html(data);                    // onde é mostrado o resultado
        });
      }
    });

    function estaPreenchido(){
        user = $('#name').val();
        mail = $('#email').val();
        pass = $('#pwd').val();
            
        if(user === 'undefined' || user === ''){
            $('#name').focus();
            return false;
        }
        else if(mail === 'undefined' || mail === ''){
            $('#email').focus();
            return false;
        }

        return true;
    }
});