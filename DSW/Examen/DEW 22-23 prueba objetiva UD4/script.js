//
// UNIDAD 4
//
// Haz primero las marcadas con *
// (4 puntos) Transforma la gestión de eventos a una gestión basada en delegación de eventos
// (1 punto) Añade un DOM static selector y modifica el código para usarlo
// (3 puntos) Modifica el código de forma que se pueda "quitar billetes" haciendo click
//            y con la tecla alt pulsada. En cada acción (click con o sin tecla alt pulsada)
//            debes guardar en localstorage con la clave "importe" el siguiente objeto 
//            (ejemplo para 2 billetes de 5, 2 de 10, 3 de 20 y 1 de 50 seleccionados):
//            {billetes5: 2, billete10: 2, billetes20: 3, billete50: 1, total: 140}
//            En el interfaz de debe mostrar de donde sale el importe ... por ejemplo:
//            2x5 2x10 3x20 1x50 = 140
// (2 puntos) Modifica el código para usar dataset para almacenar y utilizar el valor de los billetes
const DOM = {
  Dinerototal: document.getElementById("importe-total").value=0,
  billetes : document.getElementById("div-billetes"),
};
(function(){
  DOM.billetes.addEventListener("click", seleccionar);
  // document.getElementById("billete5").addEventListener("click", sumar5);
  // document.getElementById("billete10").addEventListener('click', sumar10);
  // document.getElementById("billete20").addEventListener("click", sumar20);
  // document.getElementById("billete50").addEventListener('click', sumar50);

})()
function seleccionar(e){
  if(e.target.id == "billete5" || e.target.parentElement.id == "billete5"){
    sumar5();
  }
  if(e.target.id == "billete10" || e.target.parentElement.id == "billete10"){
    sumar10();
  }
  if(e.target.id == "billete20" || e.target.parentElement.id == "billete20"){
    sumar20();
  }
  if(e.target.id == "billete50" || e.target.parentElement.id == "billete50"){
    sumar50();
  }
}
function sumar5(e){
  let importe = parseInt(document.getElementById("importe-total").value);
  importe += 5;
  document.getElementById("importe-total").value = importe;
}
function sumar10(e){
  let importe = parseInt(document.getElementById("importe-total").value);
  importe += 10;
  document.getElementById("importe-total").value = importe;}
function sumar20(e){
  let importe = parseInt(document.getElementById("importe-total").value);
  importe += 20;
  document.getElementById("importe-total").value = importe;}
function sumar50(e){
  let importe = parseInt(document.getElementById("importe-total").value);
  importe += 50;
  document.getElementById("importe-total").value = importe;}
function mostrarError(msgError){
  let error = document.getElementById("error");
  error.innerHTML = `<span>${msgError}</span>`
}
