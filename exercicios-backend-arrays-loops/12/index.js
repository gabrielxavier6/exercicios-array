const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// Verifica quantas pessoas tem na filaDeDentro
while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    // Move a primeira pessoa da filaDeFora para o final da filaDeDentro
    filaDeDentro.push(filaDeFora.shift());
}

// Imprime a filaDeDentro e a filaDeFora
console.log(filaDeDentro);
console.log(filaDeFora);

