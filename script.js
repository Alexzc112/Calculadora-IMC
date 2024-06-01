function CalcularIMC() {
    var altura = parseFloat(document.getElementById("Altura").value) / 100; // altura de cm a metros
    var peso = parseFloat(document.getElementById("Peso").value);

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, ingrese valores válidos para altura y peso.");
        return;
    }

    var resultado = peso / (altura * altura);
    var Estado;

    if (resultado < 18.5) {
        Estado = "Bajo peso";
    } else if (resultado <= 24.9) {
        Estado = "Adecuado";
    } else if (resultado <= 29.9) {
        Estado = "Sobrepeso";
    } else if (resultado <= 34.9) {
        Estado = "Obesidad grado 1";
    } else if (resultado <= 39.9) {
        Estado = "Obesidad grado 2";
    } else {
        Estado = "Obesidad grado 3";
    }

    document.getElementById("IMC").value = resultado.toFixed(2);
    document.getElementById("Estado_IMC").value = Estado;
}



