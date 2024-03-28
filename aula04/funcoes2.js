const testeImparpar = (n) => {
    let calculoTeste = n % 2;

    if (calculoTeste == 1) {
        return "Número ímpar";
    } else {
        return "Número par";
    }

}

console.log( testeImparpar(17) )