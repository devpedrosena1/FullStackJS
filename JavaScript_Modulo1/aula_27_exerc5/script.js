let opcao = ""

do {
    opcao = prompt(
        "Seja bem vindo(a)\n" +
        "\nEscolha uma das opções abaixo:" +
        "\n1. Opção UM" +
        "\n2. Opção DOIS" +
        "\n3. Opção TRÊS" +
        "\n4. Opcão Quatro" +
        "\n5. Encerrar" 
    )

    switch (opcao) {
        case"1":
            alert("Você escolheu a opção 1.")
            break
        case"2":
            alert("Você escolheu a opção 2.")
            break
        case"3":
            alert("Você escolhei a opção 3.")
            break
        case"4":
            alert("Você escolheu a opção 4.")
            break
        case"5":
            alert("Encerrando o programa...")
            break

         default:
            alert("Opção Inválida! Escolha uma das opções acima.")

    }
} while (opcao !== "5")

        