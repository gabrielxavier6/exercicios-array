const letras = ["A", "a", "B", "a", "e", "e"];
let contador = 0;
//a variavel contador é utilizada para mostrar quantas letras foram encontradas.
for (let i = 0; i < letras.length; i++) { // aqui este for foi utilizado como um loop para percorrer o array letras
    if (letras[i] === "E" || letras[i] === "e") { // aqui foi itilizado a pergunta: se algumas das letras forem E ||(ou) algumas das letras forem e, o contador ++(soma)

        contador++;
    }
}

if (contador === 0) { // se o contadoor for igual a 0 imprimira isso
    console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
} else { // se nao, imprimira isso
    console.log("Foram encontradas", contador, "letras 'E' ou 'e'.");
}