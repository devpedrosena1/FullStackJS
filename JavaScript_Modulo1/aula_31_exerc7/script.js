const numero = prompt(
    "Olá, seja bem vindo ao robô da tabuada!\n" +
"Informe o número que deseja calcular a tabuada: "
)

let resultado = ""
for (let fator = 1; fator <= 20; fator++){
    resultado += " -> " + numero + " * " + fator + " = " + (numero * fator) + "\n"
}

alert("O resultado da tabuada de " +  numero +":\n\n" + resultado)