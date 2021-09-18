var listaFilmes = ["https://animesonehd.xyz/wp-content/uploads/2020/06/Fullmetal-Alchemist-Brotherhood-online-em-hd-animesonehd.jpg", "https://upload.wikimedia.org/wikipedia/pt/9/97/Puella_Magi_Madoka_Magica_%28Capa_do_volume_1%2C_Blu-ray%29.jpg", "https://cdn.myanimelist.net/images/anime/6/86733.jpg"];

function adicionar() {
    var url = document.getElementById("url").value;
    var ret = document.getElementById("retorno");
    var repete;
    ret = "";
    // verifica se a url ja existe no array
    for (var i = 0; i < listaFilmes.length; i++) {
        if (url == listaFilmes[i]) {
            ret.innerHTML = "URL já adicionada";
            repete = true;
        }
    }

    if (repete != true) {
        // se nao repete adiciona a url no array
        listaFilmes.push(url);
        // cria um img no html
        img = document.createElement("img");
        //adiciona a ultima url como src
        img.src = listaFilmes[listaFilmes.length - 1];
        //coloca o img dentro do body
        document.body.appendChild(img)

    }
}
for (var i = 0; i < listaFilmes.length; i++) {
    var img = document.createElement("img");
    img.src = listaFilmes[i];
    document.body.appendChild(img)
}


// document.write("<p>"+listaFilmes[0]+"</p>");
// document.write("<p>"+listaFilmes[1]+"</p>");
// document.write("<p>"+listaFilmes[2]+"</p>");
// document.write("<p>"+listaFilmes[3]+"</p>");
