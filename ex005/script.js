function saudacao(){
    msg = window.document.getElementById('msgh2')
    img = window.document.getElementById('img')
    p1 = window.document.getElementById('parag')
    data = new Date()
   // hr = data.getHours()
    hr = 13
    msg.innerHTML = `Agora são ${hr} horas.`
    if (hr >= 0 && hr < 12){
        //BOM DIA
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        p1.innerHTML = `Bom dia`
    }else if (hr >= 12 && hr < 18){
        //BOA TARDE
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
        p1.innerHTML = `Boa tarde`
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        document.body.style.background = '#515154'
        p1.innerHTML = `Boa Noite`
    }
}

