function iniciaBtn() {
    num = prompt('Digite um número para fatora: ')
    fatorial = 1

    for (let c = 1; c <= num; c ++) { // c recebe 1 ; enquanto num for menor ou igual a c faça  incremento de c '(++) c = c + 1'
        fatorial = fatorial * c   // fatorial vai recebe fatorial * c e vai se repete ate num for menor ou igual a c 
    }
    document.getElementById('paragrafo').innerText = 'O fatorial de ' + num + " é: " + fatorial
}