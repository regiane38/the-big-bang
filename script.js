function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.37;
  console.log(valorEmReal);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterDois() {
  var valorElementoDois = document.getElementById("valorDois");
  var valorDois = valorElementoDois.value;
  var valorEmEuroNumerico = parseFloat(valorDois);
  // console.log(valorEmPesoNumerico);
  //Considerando 1 dolar igual a 20 pesos
  var valorEmEuro = valorEmEuroNumerico * 6.22;
  console.log(valorEmEuro);
  var elementoValorConvertidoDois = document.getElementById("valorConvertidoDois");
  var valorConvertidoDois = "O resultado em real é " + valorEmEuro;
  elementoValorConvertidoDois.innerHTML = valorConvertidoDois;
}