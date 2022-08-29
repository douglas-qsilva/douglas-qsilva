//Essa estrutura valida a expressão de saída do laço de repetição apenas no fim, ou seja, pelo menos
// uma vez o bloco de dessa estrutura de controle vai ser repetido 

function iniciaBtn() {

    let sairLoop 

    do{
        valor1 = prompt('Digite o primeiro valor: ')
        valor2 = prompt('Digite o Segundo valor: ')
        document.getElementById('paragrafo').innerText = "Resultado: " + (parseInt(valor1) + parseInt(valor2))
        sairLoop = prompt('Deseja sair? S/N ')
    }while (sairLoop != 's') //

}