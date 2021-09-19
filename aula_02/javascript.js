function Converter(){
    var moeda = document.getElementById("moeda").value;
    var valor= parseFloat(document.getElementById("valor").value);
    var resultado;
    if(moeda=="dólar"){
        resultado="O valor em dólar é "+(valor/5.29).toFixed(2);
    }else if(moeda=="euro"){
        resultado="O valor em euro é "+(valor/6.20).toFixed(2);
    }else if(moeda=="bitcoin"){
        resultado="O valor em bitcoin é "+valor/250704.40;
    }else{
        resultado="Moeda não identificada"
    }

    var elementoValorConvertido= document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML=resultado;
}

function anoLuz(){
    var km= parseFloat(document.getElementById("km").value);
    var anoLuz= km/9.461e+12;
    var resultado=document.getElementById("anoLuzConvertido");
    resultado.innerHTML=anoLuz;
}

function temperatura(){
    var valorTemp= parseFloat(document.getElementById("valorTemp").value);
    var entradaTemp= document.getElementById("entradaTemp").value;
    var saidaTemp= document.getElementById("saidaTemp").value;
    var temConvertido;
    if(entradaTemp=="farenheit"){
        if(saidaTemp=="farenheit"){
            temConvertido=valorTemp;
        }else if(saidaTemp=="kelvin"){
            temConvertido=((valorTemp-32)*(5/9))+273;
        }else if(saidaTemp=="celcius"){
            temConvertido=(valorTemp-32)/1.8;
        }else{
            temConvertido="Saida de temperatura invalida";
        }
    }else if(entradaTemp=="kelvin"){
        if(saidaTemp=="farenheit"){
        temConvertido=((valorTemp-273)*1.8)+32;
        }else if(saidaTemp=="kelvin"){
            temConvertido=valorTemp;
        }else if(saidaTemp=="celcius"){
            temConvertido=-(valorTemp-273);
        }else{
            temConvertido="Saida de temperatura invalida";
        }
    }else if(entradaTemp=="celcius"){
        if(saidaTemp=="farenheit"){
            temConvertido=(1.8*valorTemp)+32;
        }else if(saidaTemp=="kelvin"){
            temConvertido=valorTemp+273;
        }else if(saidaTemp=="celcius"){
            temConvertido=valorTemp;
        }else{
            temConvertido="Saida de temperatura invalida";
        }
    }else{
        temConvertido="Entrada de temperatura invalida";
    }
    document.getElementById("temConvertido").innerHTML=temConvertido;
}