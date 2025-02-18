const turista = prompt("E aí, turista!")
let cidades = ""
let contagem = 0
let continuar = prompt("Você visitou alguma cidade? (sim/não")

while (continuar === "sim") {
    let cidades = prompt("Qual é o nome da cidade visitada?")
    cidades += " - " + cidade + "\n"
    contagem++
    continuar = prompt("Você visiotu alguma outra cidade?")
}

alert(
    "Turista: " + turista +
    "\nQuantidade e cidades visitadas: " + contagem + 
    "\nCidades visitadas:\n" + cidades
)