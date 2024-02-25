const numeros = [54, 22, 14, 87, 3, 284, 10];
let posicao = -1;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        posicao = i;
        break; // Saia do loop assim que encontrar o número 10
    }
}

console.log(posicao);

