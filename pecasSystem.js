let pesoPeca = 101

if (pesoPeca > 100) {
    console.log ("Cadastro de Peça aceito ( peso aceitável")
} else { console.log ("Cadastro não aceito, por conta do peso")
    
}

let listaCaixaPecas = 9
if (listaCaixaPecas >= 10) {
    console.log ("Capacidade máxima excedida de Peças na Caixa")
} else {
    console.log ("Cadastro de nova Peça aceito, limite de 10 não excedido")
}

let nomePeca = "João"

console.log ("O comprimento do nome da peça é:", nomePeca.length)

if (nomePeca.length < 3) {
   console.log ("Nome precisa ter no mínimo 3 caracteres") 
} else {
    console.log ("Nome da Peça:", nomePeca,",aceito para cadastro")
}