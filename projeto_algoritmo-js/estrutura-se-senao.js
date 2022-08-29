function iniciaBtn() {

valor1 = prompt('Digite o Primeiro valor:')
operacao = prompt('Digite a Operação que deseja realizar. EX: + - * /')
valor2 = prompt('Digite o Segundo valor:')
resultado = 0
soma = parseInt(valor1) + parseInt(valor2) 
mult = parseInt(valor1) * parseInt(valor2)
subt = parseInt(valor1) - parseInt(valor2)
divi = parseInt(valor1) / parseInt(valor2)
    
    if (operacao == '+'){
        resultado = soma
        //resultado = parseInt(valor1) + parseInt(valor2)
        //document.getElementById('paragrafo').innerText = 'A Soma dos dois valores é: ' + resultado 
    
    }else if (operacao == '-'){
        resultado = subt
        //resultado = parseInt(valor1) - parseInt(valor2)
       // document.getElementById('paragrafo').innerText = 'A Subtração dos dois valores é: ' + resultado
    }else if (operacao == '*'){
        resultado = mult
        //resultado = parseInt(valor1) * parseInt(valor2)
       // document.getElementById('paragrafo').innerText = "A Multiplicação dos dois valores é: " + resultado
    }else{
        resultado = divi
        //resultado = parseFloat(valor1) / parseFloat(valor2)
       // document.getElementById('paragrafo').innerText = 'A Divisão dos dois valores é: ' + resultado
    }
        document.getElementById('paragrafo').innerText = 'O Resultado do calculo é: ' + resultado
}

