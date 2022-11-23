function instanciarActualizar(id,nombre,apellido1,apellido2,fechaNacimiento){
  let agenda = [];
  
//   if(document.getElementById("Id").value.length == 0){
//     error.innerHTML = `<span>"No tiene id"</span>`
// }
// else{
//   error.innerHTML = `<span>"tiene id"</span>`
// }
fecha = validar(id, nombre, apellido1, apellido2, fechaNacimiento);

let edad = calcularEdad(fecha);
document.getElementById("error").value;
if(error.innerHTML == "<span></span>"){
let per1 = new Persona(id,nombre,apellido1,apellido2,edad);
agenda.push(per1);
}

//let textoagen = Persona.mostrar();
//error.innerHTML = `<span>${textoagen}</span>`

/*Si el id está definido y es un número, tienes que modificar con funciones "set" los datos de la persona que ocupa la posición "id" en la colección agenda*/
/* Si "id" está vacío entonces tienes que instaciar un objeto persona e introducirlo en la colección*/
/* Tienes que gestionar los 2 posibles errores con el "id" cuando contiene un valor: que no es un número y que siendo un número, está fuera del rango de la colección */
// escribir el código aquí
// Después de instancia o actualizar la agenda ... mostrarla en HTML
mostrarAgenda(agenda);
}

function validar(id, pNombre, pApellido1, pApellido2, fechaNacimiento){
  mostrarError("");
  let fechanacimiento = new Date();
  let comprobacion = fechaNacimiento.split("/");

  mostrarError("");
  if(comprobacion[0]< 0|| comprobacion[0]>31){
    mostrarError("La fecha no valida formato dd/mm/aaaa");
  }
  if(comprobacion[1]< 0|| comprobacion[1]>12){
    mostrarError("La fecha no valida formato dd/mm/aaaa");
  }
  if(comprobacion[2]<1922|| comprobacion[2]>2023){
    mostrarError("Error de fecha muy antigua, ya que la fecha debe ser superior al 01/01/1922");
  }

  fechanacimiento.setDate(comprobacion[0]);
  fechanacimiento.setMonth(comprobacion[1]-1);
  fechanacimiento.setFullYear(comprobacion[2]);


  if(isNaN(document.getElementById("Id").value)){
    mostrarError("El id tiene que ser un numero");
  }
  if(!isNaN(pNombre)){
    mostrarError("El nombre tiene que ser un string");
  }
  if(!isNaN(pApellido1)){
    mostrarError("El apellido1 tiene que ser un string");
  }
  if(!isNaN(pApellido2)){
    mostrarError("El apellido2 tiene que ser un string");
  }
  var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
  if ((fechaNacimiento.match(RegExPattern)) && (fechaNacimiento!='')) {} 
  else
    mostrarError("La fecha esta mal escrita formato dd/mm/aaaa");

   if(pNombre == ""){
    mostrarError("Introduce un nombre");
   }
   if(pApellido1 == ""){
    mostrarError("Introduce un apellido1");
   }
   if(pApellido2 == ""){
    mostrarError("Introduce un apellido2");
   }
   if(fechaNacimiento == ""){
    mostrarError("Introduce una fecha de nacimiento");
   }
   
   
   return fechanacimiento;
}

function Persona(Id, pNombre, pApellido1, pApellido2, fechaNacimiento) {
  let id = Id;
  let nombre = pNombre;
  let apellido1 = pApellido1;
  let apellido2 = pApellido2;
  let fechanacimiento = fechaNacimiento;
  this.setId = function(Id){id=Id}
  this.setNombre = function(pNombre){nombre=pNombre}
  this.setApellido1 = function(pApellido1){apellido1=pApellido1}
  this.setApellido2 = function(pApellido2){apellido2=pApellido2}
  this.setFechaNacimiento = function(fechaNacimiento){fechanacimiento=fechaNacimiento}
    this.mostrar = function() {
    let resultado = `id =${id} ${apellido1} ${apellido2}, ${nombre} - Edad: ${fechanacimiento}`;
    return resultado;
  }
}

function calcularEdad(fecha) {
  var hoy = new Date();
  var cumpleanos = new Date(fecha);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
      edad--;
  }
  console.log(edad);
  return edad;
}

function mostrarError(msgError){
   let error = document.getElementById("error");
   error.innerHTML = `<span>${msgError}</span>`
}

function mostrarAgenda(agendaa){
  let agenda = document.getElementById("agenda");
  let textoagenda = agenda.innerHTML;
  agendaa.forEach(per => {
    textoagenda = `${textoagenda} \n <p> ${per.mostrar()} </p>` ;
    
  });
  agenda.innerHTML = ` ${textoagenda} `;

 
  // Programar aquí un forEach para mostrar todas las personas de la agenda
}
