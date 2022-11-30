//

// UNIDAD 3
//
// Haz primero las marcadas con *
function insertarAlFinal(pEuros){
  /* (*2,5 puntos) inserta un billete de pEuros al final.*/
 billetes = document.getElementById("div-billetes");
 billetenuevo = document.createElement("div")
 billetenuevo.classList.add("billete");
 billetenuevo.classList.add(`billete${pEuros}`);
 textobilletenuevo = document.createElement("p");
  var texto = document.createTextNode(`${pEuros} Euros`);
  textobilletenuevo.appendChild(texto);
 billetenuevo.appendChild(textobilletenuevo);
 billetes.appendChild(billetenuevo);
}
function borrarUno(pEuros){
  mostrarError("");
  if(pEuros != ""){
  billetes = document.getElementById("div-billetes");
  billete = document.getElementsByClassName(`billete${pEuros}`)[0];
  if(billete == undefined){
    mostrarError("No se encuentra ese billete");
  }

  document.getElementById("div-billetes").removeChild(billete);
}else{
  mostrarError("Mete un numero");
}
  /* (*2,5 puntos) borra el primer billete de pEuros. Debes gestionar errores*/
}
function insertarJuntoA(pEuros){
  /* (2,5 puntos) insertar un billete de pEuros junto a otro de valor similar.
  Si no hay ninguno de valor similar lo inserta al final */
}
function borrarTodos(pEuros){
  /* (2,5 puntos) borrar todos los billetes de valor similar. Debes gestionar errores */
  
}
function mostrarError(msgError){
  let error = document.getElementById("error");
  error.innerHTML = `<span>${msgError}</span>`
}
