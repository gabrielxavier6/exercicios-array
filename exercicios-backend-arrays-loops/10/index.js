const numeros = [8, 11, 4, 1];
let maiorNumero = numeros[0];
let menorNumero = numeros[0];

// Encontrar o maior e o menor número no array
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

// Calcular a maior diferença entre os números
const maiorDiferenca = maiorNumero - menorNumero;

console.log(maiorDiferenca);
