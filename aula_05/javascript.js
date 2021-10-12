var listaNome = [];
var listaFilme = [];

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