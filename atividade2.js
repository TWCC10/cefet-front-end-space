// Faça o exercício DOS PARÁGRAFOS neste arquivo
// Este arquivo AINDA NÃO está incluído no arquivo HTML


let botaoAnteriorEl = document.querySelector('#anterior');
let botaoProximoEl = document.querySelector('#proximo');
let add1 = 1, sub1 = -1;
botaoAnteriorEl.addEventListener('click',function(){mudaSlideSupremo(-1)});
botaoProximoEl.addEventListener('click',function(){mudaSlideSupremo(1)} );

function mudaSlideSupremo(numero)
{
    indiceDaFotoAtual += numero;
    if(indiceDaFotoAtual < 0)
            indiceDaFotoAtual = nomesDasImagens.length-1;
    if(indiceDaFotoAtual > nomesDasImagens.length-1)
            indiceDaFotoAtual = 0;
    let slideEl = document.querySelector('#slide');
    slideEl.src = servidorDasImagens + nomesDasImagens[indiceDaFotoAtual];
}