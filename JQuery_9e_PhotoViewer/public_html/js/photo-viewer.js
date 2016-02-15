var request;                         // Última imagem solicitada
var $current;                        // Imagem atualmente visível 
var cache = {};                      // Objeto para cache
var $frame = $('#photo-viewer');     // Contentor das imagens
var $thumbs = $('.thumb');           // miniaturas

function crossfade($img) {           // Função para realizar fade entre imagens
                                     // recebem o nova imagem
  if ($current) {                    // Se existe um imagem visível
    $current.stop().fadeOut('slow'); // Para qualquer animação e faz fade out
  }

  $img.css({                         // Define as CSS margens para a imagem
    marginLeft: -$img.width(),   // Margem negativa para metade da largura da imagem
    marginTop: -$img.height()    // Margem negativa para metade da altura da imagem
  });

  $img.stop().fadeTo('slow', 1);     // para a animação da imagem e faz fade in
  
  $current = $img;                   // A imagem recebida torna-se a nova imagem

}

$(document).on('click', '.thumb', function(e){ // Quando clicar nas miniaturas
  var $img,                               // Cria uma variável local
      src = this.href;                    // Guarda a imagem definida no href da miniatura
      request = src;                      // Guarda a imagem solicitada na variável global
  
  e.preventDefault();                     // Anula a ação por defito do link
  
  $thumbs.removeClass('active');          // Remove a propriedade ativa da miniatura ativa
  $(this).addClass('active');             // Adiciona a propriedade ativa à miniatura clicada

  if (cache.hasOwnProperty(src)) {        // Se o objeto cache contem a imagem indicadada
    if (cache[src].isLoading === false) { // E a propriedade isloading associada ao objeto imagem é falsa 
      crossfade(cache[src].$img);         // Chama a função para realizar o fade entre as imagens
    }
  } else {                                // Se não está no objeto cache
    $img = $('<img/>');                   // Cria uma elemento imagem vazia
    cache[src] = {                        // E guarda no objeto cache
      $img: $img,                         // a imagem vazia
      isLoading: true                     // e coloca a propriedade isloading a true
    };

    // 
    $img.on('load', function(){           // Quando a imagem é carregada
      $img.hide();                        // esconde-a
      // Remove a class is-loading da div & e adiciona a nova imagem à div
      $frame.removeClass('is-loading').append($img);
      cache[src].isLoading = false;       // Atualiza a propriedade isLoading do objeto cache
      // Se se solicitou recentemente a imagem
      if (request === src) {
        crossfade($img);                  // Chama a função para executar o fade das imagens
      }                                   
    });

    $frame.addClass('is-loading');        // Adiciona a class 'is-loading' à div da imagem

    $img.attr({                           // Define os atributos CSS do elemento img
      'src': src,                         // Adiciona o atributo src
      'alt': this.title || ''             // Adiciona o atributo alt se for dado na imagem
    });

  }

});

// Ativa o evento click na miniatura automaticamente para mostrar a primeira imagem
$('.thumb').eq(0).click();                // Simula o click noa primeira miniatura