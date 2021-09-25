var cartas1 = {
    nome: "Bulbasauro",
    imagem:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};
var cartas2 = {
    nome: "Darth Vader",
    imagem:"https://images-na.ssl-images-amazon.com/images/I/41i-0NH0q9L._SX328_BO1,204,203,200_.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var cartas3 = {
    nome: "Shiryu de dragão",
    imagem:"http://pm1.narvii.com/6399/96fdb9d4fe6a9e72b9bc60ad418e3c43795e53b4_00.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartas4 = {
    nome: "Eva 01",
    imagem:"https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/08/legiao_oZNikgVRTqtU.png.jpeg",
    atributos: {
        ataque: 10,
        defesa: 7,
        magia: 1
    }
};
var cartas5 = {
    nome: "Alphonse Elric",
    imagem:"https://upload.wikimedia.org/wikipedia/pt/thumb/7/7c/AlphonseElricArakawa.jpg/250px-AlphonseElricArakawa.jpg",
    atributos: {
        ataque: 3,
        defesa: 7,
        magia: 9
    }
};

var cartas = [cartas1, cartas2, cartas3, cartas4, cartas5];
var cartaMaquina = 0;
var cartaJogador = 0;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * cartas.length);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * cartas.length);
    }
    cartaJogador = cartas[numeroCartaJogador];

    exibirOpcoes();
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var img=document.getElementById("img");
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {

        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo;
    }
    img.innerHTML="<img src='"+cartaJogador.imagem+"'>";
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;

        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    
    if (atributoSelecionado==undefined) {
        elementoResultado.innerHTML = "Escolha um atributo";
    } else {
        var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
        var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
        if (valorCartaJogador > valorCartaMaquina) {
            elementoResultado.innerHTML = "Você venceu";
        } else if (valorCartaMaquina > valorCartaJogador) {
            elementoResultado.innerHTML = "Você perdeu, a carta da maquina é maior"
        } else {
            elementoResultado.innerHTML = "Empatou"
        }
    }
}