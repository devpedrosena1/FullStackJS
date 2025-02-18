let nome1 = prompt("Digite o nome do veículo: ")
let velocidade1 = prompt("Digite a velocidade do carro: ")

let nome2 = prompt("Digite o nome do segundo veículo: ")
let velocidade2 = prompt("Digte a velocidade do segundo veículo: ")


if (velocidade1 > velocidade2) {
    alert(nome1 + " é mais rápido do que " + nome2)
} else if (velocidade1 < velocidade2) {
    alert(nome2 + " é mais rápido do que " + nome1)
} else {
    alert("Ambos estão na mesma velocidade.")
}