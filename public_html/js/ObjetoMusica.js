/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Examplo: Instanciar um novo objeto, adicionar valores, e expandir o objeto
function Tune(title,artist) {
    this.title = title;
    this.artist = artist;
    this.concatTitleArtist = function() {
        return this.title + " " + this.artist;
    }
}
// Criar um instancia do objeto Tune
var happySong = new Tune("Putting on the Ritz", "Ella Fitzgerald");
// expandir o objeto
Tune.prototype.addCategory = function(categoryName) {
    this.category = categoryName;
}
// invocar método espandido
happySong.addCategory("Swing");

// Mostrar descrição do objeto
var song = "Title and artist: " + happySong.concatTitleArtist() +
" Category: " + happySong.category;
document.write(song);

//Criar outra instancia
var om = new Tune("Carta dos correio", "Humanos");
om.addCategory("Pop portuguesa");

var mp = "<br/>Title and artist: " + om.concatTitleArtist() +
" Category: " + om.category;
document.write(mp);