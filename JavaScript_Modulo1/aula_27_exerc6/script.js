let saldo = parseFloat(prompt("Insira o valor inicial da conta: "))
let opcao = ""

do {
    opcao = prompt(
        "Seja bem vindo ao nosso Banco! " +
        "\nSeu saldo atual é: R$ " + saldo + 
        "\n1. Depositar " +
        "\n2. Sacar " +
        "\n3. Sair "
    )

    switch (opcao){
        case"1":
            saldo += parseFloat(prompt("Informe o valor que deseja depositar: "))
            break
        case"2":
            saldo -= parseFloat(prompt("Insira o valor que deseja sacar: "))
            break
        case"3":
        alert("Saindo...")
            break
        default:
            alert("Opção Inválida!!!!")
    }
       
} while (opcao !=="3")