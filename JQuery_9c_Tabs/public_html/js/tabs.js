$('.tab-list').each(function(){                   // Apanha as tab-lista e para cada uma
  var $this = $(this);                            // Guarda a lista 
  var $tab = $this.find('li.active');             // Guarda o item ativo (tab)
  var $link = $tab.find('a');                     // Obtem o link da tab ativa
  var $panel = $($link.attr('href'));             // Obtem o href da tab ativa

  $this.on('click', '.tab-control', function(e) { // Quando clicar na tab 
    e.preventDefault();                           // Anula a ação por defeito do link
    var $link = $(this),                          // Guarda o item clicado
    id = $link.attr('href');                           // Obtem o link da tab clicada 

    if (id && !$link.is('.active')) {             // Se estiver ativo
      $panel.removeClass('active');               // Coloca o painel atual inativo
      $tab.removeClass('active');                 // Coloca a tab atual inativa

      $panel = $(id).addClass('active');          // Coloca o painel clicado ativo
      $tab = $link.parent().addClass('active');   // coloca a tab clicada ativa 
    }
  });
});