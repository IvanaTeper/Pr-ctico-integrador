function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    //valor dolar mep al dia de la fecha
    var dolar = 1069;
    //valor euro al dia de la fecha
    var euro = 963;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dólares es: $" + resultado);
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros es: $" + resultado);
    }
    else {
        alert("Debe completar los requisitos");
    }



}


