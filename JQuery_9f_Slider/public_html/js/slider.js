$('.slider').each(function() {              // Para cada slider
  var $this   = $(this);                    // Guarda slider atual
  var $group  = $this.find('.slide-group'); // Guardar o contentor slide-group
  var $slides = $this.find('.slide');       // Cria um objeto jquery com todos os sliders
  var buttonArray  = [];                    // Cria um array para guardar todos os botões
  var currentIndex = 0;                     // Guarda o nº do primeiro slider
  var timeout;                              // Define o tempo de passagem dos slider

  function move(newIndex) {          // Cria a função para mover entre slider
    var animateLeft, slideLeft;      // Declara variáveis locais

    advance();                       // Chama a função advance para controlar a sequência do slider

    // Se estamos no mesmo slider / não anima
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }
                                                     // Senão
    buttonArray[currentIndex].removeClass('active'); // Remove class ative do slider atual
    buttonArray[newIndex].addClass('active');        // Adiciona class ative ao novo slider

    if (newIndex > currentIndex) {   // Se o novo indice > indice atual
      slideLeft = '100%';            // COloca-se o novo slider à direita
      animateLeft = '-100%';         // Anima o slider atual para a esquerda
    } else {                         // Senão
      slideLeft = '-100%';           // Coloca-se o novo slider à esquerda
      animateLeft = '100%';          // Anima o slider atual para direita
    }
    // Define os CSS para posicionar o noveo slider para a esquerda ou direita
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    // Anima slides e
      $slides.eq(currentIndex).css( {display: 'none'} ); // Esconde o slide atual      
      $slides.eq(newIndex).css( {left: 0} ); // define posição do novo slider
      $group.css( {left: 0} );               // define posição do grupo de sliders
      currentIndex = newIndex;               // Atualiza o indice atual como o indice do novo slider
    });
  }

  function advance() {                     // Usado para  
    clearTimeout(timeout);                 // limpar o timer anterior
    timeout = setTimeout(function() {      // Define um novo timer
      if (currentIndex < ($slides.length - 1)) { // Se o indice do slider atual < nº de slidere
        move(currentIndex + 1);            // Avança para o slider seguinte
      } else {                             // Senão
        move(0);                           // Avança para o primeiro slider
      }
    }, 4000);                              // tempo de espera entre sliders
  }

  $.each($slides, function(index) {   // Por cada slides
    // Cria um botão
    var $button = $('<button type="button" class="slide-btn">&bull;</button>');
    if (index === currentIndex) {    // Se o indice  = indice atual
      $button.addClass('active');    // Adiciona a class ative ao botão
    }
    $button.on('click', function() { // Cria um evento para cada botão
      move(index);                   // Chama a função move para avançar quando clica no botão
    }).appendTo('.slide-buttons');   // Adiciona o botão ao contentor de botões
    buttonArray.push($button);       // Adicona o botão ao array global
  });

  advance();                          // Chama a função para fazer a movimentação


});