function load(){
    var mensagem = document.querySelector('#output');
    var picture = document.querySelector('#image-output');
    var hora = new Date();
    var moment = hora.getHours();
    if(moment <= 12 && moment >= 5){
        mensagem.innerHTML = (`agora são ${moment} horas, bom dia`)
        document.body.style.background = 'rgb(233, 195, 139)'
        picture.src="img/pordosol.jpg"
    }else if(moment >= 12 && moment < 18){
        mensagem.innerHTML = (`agora são ${moment} horas, boa tarde`)
        document.body.style.background = 'rgb(223, 156, 56)'
        picture.src="img/natureza.jpg"
    }else if(moment > 18){
        mensagem.innerHTML = (`agora são ${moment} horas, boa noite`)
        document.body.style.background = 'rgb(76, 28, 165)'
        picture.src="img/estrelas.jpg"
    }
}

/*
    switch(moment){
        case moment <= 12 && moment >= 5 :
            mensagem.innerHTML = (`agora são ${moment} horas, bom dia`)
            document.body.style.background = 'rgb(238, 207, 121)'
        break
        case moment >= 12 && moment < 18:
            mensagem.innerHTML = (`agora são ${moment} horas, boa tarde`)
            document.body.style.background = 'rgb(223, 156, 56)'
        break
        case moment > 18 :
            mensagem.innerHTML = (`agora são ${moment} horas, boa noite`)
            document.body.style.background = 'rgb(223, 156, 56)'
        break
    }
*/