$('.accordion').on('click', '.accordion-control', function(e){ // Quando clica
  e.preventDefault();                    // Anula a ação por defeito do button
  $(this)                                // Apanha o elemento onde clicou
    .next('.accordion-panel')            // Seleciona o painel seguinte ao botão
    .not(':animated')                    // Se não está em animação
    .slideToggle();                      // Slide o painel (mostra ou esconde)
});