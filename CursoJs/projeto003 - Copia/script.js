/*
function enviar(){
    let output = document.querySelector('#output')
    let inicio = document.querySelector('input#istart')
    let fim = document.querySelector('input#iend')
    for(let i = 1; i >= inicio && i <= fim; i++){
        output.innerHTML = (i)
    }
}   



let passos = 2
let inicio = 2
let fim = 10
let percurso = fim - inicio
if(percurso % passos != 0){
    console.log('isto nao funciona')
}else{
    
    for(let i = passos; i <= percurso; i = i + passos){
            console.log(i)
    }
}

function enviar(){
    let output = document.querySelector('#output')
    let inicio = document.querySelector('input#istart')
    let fim = document.querySelector('input#iend')
    let passos = document.querySelector('input#ipassos').value
    let percurso = fim.value - inicio.value
    if(percurso % passos != 0){
        output.innerHTML = ('Isto não funciona')
    }else{
        let start = Number(inicio.value)
        let end = Number(fim.value)
        let andar = Number(passos.value)
        for(let i = andar; i <= end && i >= start ; i = i + andar){
            output.innerHTML = (i)
        }
    }
}
*/

function enviar(){
    let output = document.querySelector('#res')
    let inicio = document.querySelector('#iinicio')
    let fim = document.querySelector('#ifim')
    let passos = document.querySelector('#ipassos')
    if(inicio.value.length == 0 ||fim.value.length == 0 || passos.value.length == 0){
        alert('[ERRO]')
    }else{
        output.innerHTML = ('Contando...')
        let ini = Number(inicio.value)
        let end = Number(fim.value)
        let pas = Number(passos.value)
        for(let c = ini; c >= end; c += pas){
            output.innerHTML += c
        }
    }
}


