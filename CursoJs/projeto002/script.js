function verificar() {
    
   
    let date = new Date()
    let data = date.getFullYear()

    let formulario = document.querySelector('input#inascimento')

    let output = document.querySelector('#output')
    let options = document.getElementsByName('sex')
    let imagem = document.querySelector('#imagem-output')
    let container = document.querySelector('.content')

    if( formulario.value.length == 0 || data < Number(formulario.value)){
        alert('ERRO, preencha os dados abaixo')
    }else{
        container.style.display = 'block'
        if(options[0].checked){
            if(data - formulario.value  < 18){
                output.innerHTML = (`Detectamos um homem com ${ data - Number(formulario.value)} anos`)
                imagem.src="img/homem-bebe.jpg"
            }else if(data - formulario.value  >= 18 && data - formulario.value <= 35){
                output.innerHTML = (`Detectamos um homem com ${ data - Number(formulario.value)} anos`)
                imagem.src="img/homem-adulto.jpg"
            }else if(data - formulario.value  > 35 && data - formulario.value < 110){
                output.innerHTML = (`Detectamos um homem com ${ data - Number(formulario.value)} anos`)
                imagem.src="img/idoso.jpg"
            }
        }else if(options[1].checked){
            if(data - formulario.value  < 18){
                output.innerHTML = (`Detectamos um mulher com ${ data - Number(formulario.value)} anos`)
                imagem.src="img/mulher-bebe.jpg"
            }else if(data - formulario.value  >= 18 && data - formulario.value <= 35){
                output.innerHTML = (`Detectamos um mulher com ${ data - Number(formulario.value)} anos`)
                imagem.src="img/mulher-adulta.jpg"
            }else if(data - formulario.value  > 35 && data - formulario.value < 110){
                output.innerHTML = (`Detectamos um mulher com ${ data - Number(formulario.value)} anos`)
                imagem.src="img/idosa.jpg"
            }
        }
    }
}