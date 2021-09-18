var numeroSecreto = parseInt(Math.random() * 11);
var i = 5;
function Chutar() {
    var chute = parseInt(document.getElementById("valor").value);
    var elementoResultado = document.getElementById("resultado");
    if (i < 2) {
        elementoResultado.innerHTML = "Acabou as suas tentativas, o numero secreto era " + numeroSecreto;
    } else if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Voce acertou";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Voce deve digitar um numero de 0 a 10";
    }
    else {
        i--;
        if (chute > numeroSecreto) {
            elementoResultado.innerHTML = "Errou, o numero secreto é menor. Voce tem " + i + " tentativas";
        } else {
            elementoResultado.innerHTML = "Errou, o numero secreto é maior. Voce tem " + i + " tentativas";
        }
    }

}