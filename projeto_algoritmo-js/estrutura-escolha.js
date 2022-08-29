function iniciaBtn() {

    let valor1 = prompt('Digite o Primeiro valor:')
    let operacao = prompt('Digite a Operação que deseja realizar. EX: + - * /')
    let valor2 = prompt('Digite o Segundo valor:')
    let resultado = 0
    
    switch (operacao) {
        case '+':
            resultado = parseInt(valor1) + parseInt(valor2)
            break;
        case '-':
            resultado = parseInt(valor1) - parseInt(valor2)
            break;
        case '*':
            resultado = parseInt(valor1) * parseInt(valor2)
            break;
        case '/':
            resultado = parseInt(valor1) / parseInt(valor2)
            break;
        }
    
        document.getElementById('paragrafo').innerHTML = 'O Resultado do calculo é: ' + resultado
        console.log(resultado)
    }
    
    