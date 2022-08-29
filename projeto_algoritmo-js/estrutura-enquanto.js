function iniciaBtn(){
   let limite = prompt('Digite a quantidade de vezes que vai ser verificado a idade:')
   let cont = 0
    while ( cont < limite) {
    let = nome = prompt('Digite seu nome')
    let = idade = prompt('Digite a sua idade ' + nome)

        if (idade >= 18){
            document.getElementById('paragrafo').innerText = nome + ' Você é maior de Idade'
        } else {
            document.getElementById('paragrafo').innerText = nome + ' Você e menor de Idade'
        }cont++
    }

}