const form = document.querySelector("form")
const resposta = document.getElementById("resposta")
const corResposta = document.querySelector(".corResposta")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let texto;
    let imc = calculoIMC(peso, altura);
    resultadoIMC(imc, texto);
});

let calculoIMC = (peso, altura) => {
    imc = peso / (altura * altura)
    return imc
}

function resultadoIMC(imc, texto) {
    if (imc < 18.5) {
        texto = "abaixo do peso";
        corResposta.style.color = "aqua";
    } else if (imc <= 24.9) {
        texto = "com o peso normal";
        corResposta.style.color = "greenyellow";
    } else if (imc <= 29.9) {
        texto = "com sobrepeso";
        corResposta.style.color = "yellow";
    } else if (imc <= 34.9) {
        texto = "com obesidade grau 1";
        corResposta.style.color = "orange";
    } else if (imc <= 39.9) {
        texto = "com obesidade grau 2";
        corResposta.style.color = "orangered";
    } else {
        texto = "com obesidade grau 3";
        corResposta.style.color = "red";
    }
    resposta.innerHTML = `Seu IMC é ${imc.toFixed(2)}. Voce está ${texto}.`
}