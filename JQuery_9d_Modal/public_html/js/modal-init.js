(function(){
  var $content = $('#share-options').detach();   // Remove modal da página (share-options)

  $('#share').on('click', function() {           // Ao clicar no icon share (canto sup esq)
    modal.open({content: $content, width:340, height:300}); // abre a janela modal
  });
}());