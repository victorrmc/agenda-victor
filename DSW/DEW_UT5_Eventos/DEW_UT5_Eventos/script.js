const DOM = {
    botonSumar: document.querySelector("#sumar"),
    botonRestar: document.querySelector("#restar"),
    botonMultiplicar: document.querySelector("#multiplicar"),
    inputNumero1: document.querySelector("#numero1"),
    inputNumero2: document.querySelector("#numero2"),
    inputResultado: document.querySelector("#resultado")
};1q

// Función IIFE
(function(){
    const DOM = {
        botonSumar: document.querySelector("#sumar"),
        botonRestar: document.querySelector("#restar"),
        botonMultiplicar: document.querySelector("#multiplicar"),
        inputNumero1: document.querySelector("#numero1"),
        inputNumero2: document.querySelector("#numero2"),
        inputResultado: document.querySelector("#resultado")
    }
    DOM.botonSumar.onclick= calcular;
        DOM.botonRestar.addEventListener('click', calcular);
        DOM.botonMultiplicar.addEventListener('click', calcular);
        DOM.inputNumero1.addEventListener('dblclick', mensaje);
        DOM.inputResultado.addEventListener('dblclick', function(evento){alert("¡También puedes usar una función anónima!")});
    
    })()
function calcular(evento){
    
    // if(evento ==DOM.botonRestar ){
    //     console.log("resta");
    // }
    switch (this) {
        case DOM.botonRestar:
            console.log("resta")
            break;
        case DOM.botonSumar:
            console.log("suma")
            break;
        case DOM.botonMultiplicar:
            console.log("multiplicar")
            break;

    }
    
}
function mensaje(evento){
    alert(`Haz hecho ${evento.type} en el campo con id "${this.id}" y su valor es "${this.value}"`);
}
function mensaje2(){
    alert("Mensaje desde número 2");
}