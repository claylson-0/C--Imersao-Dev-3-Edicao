function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith(".jpg")) {
     listarFilmeNaTela(filmeFavorito);
    }else {
        console.error("Endereço de filme inválido");
    }
    filmeFavorito.value = "";
    document.getElementById("filme").value = "";
}
function listarFilmeNaTela(filme){
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoFilmeFavorito + elementoListaFilmes;
}