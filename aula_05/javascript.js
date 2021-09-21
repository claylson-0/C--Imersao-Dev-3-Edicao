var listaNome = ["boku no hero", "darling in the franxx"];
var listaFilme = ["https://i.pinimg.com/originals/e9/76/a2/e976a29e0ffaefd0c16bc2be934cd9dd.jpg", "https://64.media.tumblr.com/c9a6e9a6c8ba697f97b909ee59a508b1/tumblr_p7taf5vQkp1rovzi7o1_1280.jpg"];

function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    var nomeFilme = document.getElementById("nome").value;

    if (filmeFavorito.endsWith(".jpg")) {
        listaNome.push(nomeFilme);
        listaFilme.push(filmeFavorito);

        listarFilmeNaTela();
    } else {
        console.error("Endereço de filme inválido");
    }
    document.getElementById("filme").value = "";
    document.getElementById("nome").value = "";
}
function listarFilmeNaTela() {
    var elementoNomeFilme = ""
    var elementoListaFilmes = document.getElementById("listaFilmes");
    for (var i = 0; i < listaNome.length; i++) {
        elementoNomeFilme += "<h2>" + listaNome[i] + "</h2><br><img src=" + listaFilme[i] + ">";
        elementoListaFilmes.innerHTML = elementoNomeFilme;
    }
    if(listaNome.length==0){
        elementoListaFilmes.innerHTML=""
    }
}
listarFilmeNaTela();
function deletarFilme() {
    var nomeDeletar=document.getElementById("nomeDeletar").value;
    for(var i =0;i<listaNome.length;i++){
        if(nomeDeletar==listaNome[i]){
            listaNome.splice(i,1);
            listaFilme.splice(i,1);
            
            listarFilmeNaTela()
        }
    }
    document.getElementById("nomeDeletar").value="";
}