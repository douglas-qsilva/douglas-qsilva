function verificar (){
    data = new Date()
    ano = data.getFullYear()
    fAno = document.getElementById('txtano')
    res = document.querySelector('div#res')
    if(fAno.value.length == 0 || Number (fAno.value) > ano){
        alert('[ERRO] Verificar os dados  tente novamente')
}else{
    fsex = document.getElementsByName('radsex')
    idade = ano - Number(fAno.value)
    res.innerHTML = `Idade Calculada ${idade}`
    genero = ''
    img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
            genero = 'Masculino'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-homem.png')
            }else if (idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-homem.png')
            }else if (idade >= 21 && idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-homem.png')
            }
        }else if (fsex[1].checked){
            genero = 'Feminino'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'foto-mulher.png')
            }else if (idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src', 'foto-mulher.png')
            }else if (idade >= 21 && idade < 60){
                //Adulto
                img.setAttribute('src', 'foto-mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-mulher.png')
            }
        }
        res.innerHTML = `Você é do sexo ${genero} e tem ${idade} anos !!!!!!! `
        res.appendChild(img)
    }
}