var nome, nota01, nota02, passou;
passou = false;
nome = prompt("Digite seu nome:" )
nota01 = prompt("Digite nota 1 do aluno " )
nota02 = prompt("Digite nota 2 do aluno   " )

media = (parseInt(nota01) + parseInt(nota02)) / 2;

if(media >= 50)
    passou = true;
    
if(passou && (media >= 70 && media <= 90))
    alert("Aprovado " + nome)
else
    alert("reprovado " + nome)
