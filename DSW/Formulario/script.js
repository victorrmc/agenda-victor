
const DOM = {
    nombre: document.querySelector("#nombre"),
    edad: document.querySelector("#edad"),
    dni: document.querySelector("#dni")
  };

  (function(){
    document.forms["frm1"].addEventListener("submit",validarAntesDeEnviar);
  })()

  function validarAntesDeEnviar(event){
    // Comprobar código postal
    let errornombre = document.getElementById("errornombre");
    let erroredad = document.getElementById("erroredad");
    let errordni = document.getElementById("errordni");
    if (!DOM.nombre.validity.valid){
        
        if (DOM.nombre.validity.valueMissing){
            
            errornombre.innerHTML = `<span> El nombre es obligatorio </span>`
            event.preventDefault();
        }
    }
    // Comprobar edad
    if (!DOM.edad.validity.valid){
        if (DOM.edad.validity.badInput){
            erroredad.innerHTML = `<span> Ha introducido un valor no numérico para la edad </span>`
        //  window.alert("Ha introducido un valor no numérico para la edad");
          event.preventDefault();
          
        }
        if (DOM.edad.validity.valueMissing){
            erroredad.innerHTML = `<span> La edad es obligatorio </span>`
          //window.alert("La edad es obligatorio");
          event.preventDefault();
        }
        if (DOM.edad.validity.rangeUnderflow){
            erroredad.innerHTML = `<span> Ha introducido una edad inferior a 1. Debe estar entre 1 y 99 </span>`
          //window.alert("Ha introducido una edad inferior a 1. Debe estar entre 1 y 99");
          event.preventDefault();
        }
        if (DOM.edad.validity.rangeOverflow){
            erroredad.innerHTML = `<span> Ha introducido una edad superior a 1. Debe estar entre 1 y 99 </span>`
         // window.alert("Ha introducido una edad superior a 99. Debe estar entre 1 y 99");
          event.preventDefault();
        }
    }
    if (!DOM.dni.validity.valid){
        if (DOM.dni.validity.patternMismatch){
            errordni.innerHTML = `<span> No cumple con la expresión regular de un dni</span>`
            //window.alert("No cumple con la expresión regular de un código postal");
            event.preventDefault();
        }
        if (DOM.dni.validity.valueMissing){
          errordni.innerHTML = `<span> La dni es obligatorio </span>`
         // window.alert("La edad es obligatorio");
          event.preventDefault();
        }
    }
}
    
    
    
    
    
    