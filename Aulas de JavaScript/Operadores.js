

// Função para calcular juros simples
function calcularJurosSimples() {
    let principal = parseFloat(document.getElementById("principal").value);
    let taxaDeJuros = parseFloat(document.getElementById("taxa").value);
    let tempoEmAnos = parseFloat(document.getElementById("tempo").value);

    let juros = (principal * taxaDeJuros * tempoEmAnos) / 100;
    let montanteFinal = principal + juros;

    document.getElementById("resultado1").innerHTML = "O valor final do empréstimo após " + tempoEmAnos + " anos é de R$ " + montanteFinal.toFixed(2);
}

// Função para calcular a área e o perímetro
function calcularAreaEPerimetro() {
    let comprimento = parseFloat(document.getElementById("comprimento").value);
    let largura = parseFloat(document.getElementById("largura").value);

    let area = comprimento * largura;
    let perimetro = 2 * (comprimento + largura);

    document.getElementById("resultado2").innerHTML = "A área do retângulo é " + area.toFixed(2) + " e o perímetro é " + perimetro.toFixed(2);
}

// Função para calcular a raiz quadrada
function calcularRaizQuadrada() {
    let numero = parseFloat(document.getElementById("numero").value);
    let raizQuadrada = Math.sqrt(numero);

    document.getElementById("resultado3").innerHTML = "A raiz quadrada de " + numero + " é " + raizQuadrada.toFixed(2);
}

// Função para calcular o tempo de viagem
function calcularTempoViagem() {
    let distancia = parseFloat(document.getElementById("distancia").value);
    let velocidadeMedia = parseFloat(document.getElementById("velocidade").value);

    let tempoDeViagem = distancia / velocidadeMedia;

    document.getElementById("resultado4").innerHTML = "O tempo estimado de viagem é de " + tempoDeViagem.toFixed(2) + " horas";
}

// Função para calcular o IMC
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let imc = peso / (altura * altura);

    document.getElementById("resultado5").innerHTML = "Seu IMC é " + imc.toFixed(2);
}

