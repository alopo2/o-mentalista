let numeroSecreto = Math.random(10);

let chute = prompt("Digite um numero: ")

if (chute == numeroSecreto) {
    console.log("Acertou!")
} else if (chute > numeroSecreto) {
    console.log("Errou. O numero secreto é menor")
} else if (chute < numeroSecreto) {
    console.log("Errou. O numero secreto é maior")
}

console.log(numeroSecreto)