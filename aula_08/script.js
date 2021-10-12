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
    exibirCartaJogador();
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
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

    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];

    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu</p>";
    } else if (valorCartaMaquina > valorCartaJogador) {
        elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu, a carta da maquina é maior</p>"
    } else {
        elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>"
    }
    document.getElementById("btnJogar").disabled=true;
    exibirCartaMaquina();
}

function exibirCartaJogador(){
    var divJogador= document.getElementById("carta-jogador");
    divJogador.style.backgroundImage=`url(${cartaJogador.imagem})`;
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML="<div id='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {

        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " "+cartaJogador.atributos[atributo]+"<br>";
    }
    var nome=`<p class="carta-subtitle">${cartaJogador.nome}</p>`

    divJogador.innerHTML=moldura+nome+tagHTML+opcoesTexto+"</div>";
}

function exibirCartaMaquina(){
    var divMaquina= document.getElementById("carta-maquina");
    divMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`;
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML="<div id='opcoes' class='carta-status'>";
    
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {

        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " "+cartaMaquina.atributos[atributo]+"</p>";
    }
    var nome=`<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    divMaquina.innerHTML=moldura+nome+tagHTML+opcoesTexto+"</div>"; 
}