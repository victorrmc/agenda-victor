
const DOM = {
  codigoPostal: document.querySelector("#cod-postal"),
  edad: document.querySelector("#edad")
};
(function(){
  document.forms["frm1"].addEventListener("submit",validarAntesDeEnviar);
})()

function validarAntesDeEnviar(event){
// Comprobar código postal
if (!DOM.codigoPostal.validity.valid){
    if (DOM.codigoPostal.validity.patternMismatch){
          window.alert("No cumple con la expresión regular de un código postal");
          event.preventDefault();
    }
    if (DOM.codigoPostal.validity.valueMissing){
      window.alert("El código postal es obligatorio");
      event.preventDefault();
    }
}
// Comprobar edad
if (!DOM.edad.validity.valid){
    if (DOM.edad.validity.badInput){
      window.alert("Ha introducido un valor no numérico para la edad");
      event.preventDefault();
    }
    if (DOM.edad.validity.valueMissing){
      window.alert("La edad es obligatorio");
      event.preventDefault();
    }
    if (DOM.edad.validity.rangeUnderflow){
      window.alert("Ha introducido una edad inferior a 1. Debe estar entre 1 y 99");
      event.preventDefault();
    }
    if (DOM.edad.validity.rangeOverflow){
      window.alert("Ha introducido una edad superior a 99. Debe estar entre 1 y 99");
      event.preventDefault();
    }
}
}





