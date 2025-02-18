alert("Cadastre seus dados corretamente")

const nome = prompt("Insira o seu primeiro nome: ")
const sobrenome = prompt("Insira o seu sobrenome: ")
const campo = prompt("Insira o campo de estudo que deseja atuar: ")
const nascimento = prompt("Insira o ano do seu nascimento: ")

alert (
    "Seus dados foram cadastrados com sucesso!\n" +
    "\nNome completo: " + nome + " " + sobrenome +
    "\nCampo de estudo: " + campo + 
    "\nIdade: " + (2023 - nascimento)
)


