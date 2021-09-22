var rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
var paulo = { nome: "Paulo", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };
var gui = { nome: "Gui", vitorias: 1, empates: 1, derrotas: 2, pontos: 0 };

var jogadores = [rafa, paulo, gui];

function adicionaJogador() {
    var addJogador = document.getElementById("adicionaNome").value;
    jogadores.push(addJogador = { nome: addJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0 });
    console.log(addJogador);
    console.log(jogadores);
    exibeJogadoresNaTela(jogadores);
    zerarPlacar();
    document.getElementById("adicionaNome").value = "";
}

function zerarPlacar() {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0;
        jogadores[i].empates = 0;
        jogadores[i].derrotas = 0;
        jogadores[i].pontos = 0;
    }
    exibeJogadoresNaTela(jogadores);
}

zerarPlacar();

function exibeJogadoresNaTela(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate()'>Empate</button></td>"
        elemento += "</tr >"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    for (var x = 0; x < jogadores.length; x++) {
        if (jogadores[x] == jogadores[i]) {
            jogadores[x].vitorias++;
        } else {
            jogadores[x].derrotas++;
        }
        jogador.pontos = calculaPontos(jogador);
    }
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate() {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].empates++;
        jogadores[i].pontos = calculaPontos(jogadores[i]);
    }

    exibeJogadoresNaTela(jogadores)
}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);
