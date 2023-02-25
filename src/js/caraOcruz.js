lanzarMoneda()

function lanzarMoneda(){
    let random =Math.round(Math.random());
    let resultado = caraOcruz(random)
    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML = resultado;
}
function caraOcruz(random){
    if (random==0) {
        return '<img src= "img/cara.png">'
    }
    if (random==1) {
        return '<img src= "img/cruz.png">'
    }
}
