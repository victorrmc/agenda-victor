var municipios=[];

const DOM = {
  frmSolicitud: document.getElementById("frm-solicitud"),
  nombre: document.getElementById("nombre"),
  dni: document.getElementById("dni"),
  cbMayorEdad: document.getElementById("mayor-edad"),
  mayorEdad: document.getElementsByName("mayorEdad")[0], // input hidden
  isla: document.getElementById("isla"),
  municipio: document.getElementById("municipio"),
  codPostal: document.getElementById("cod-postal"),
  selectDeportes: document.getElementById("select-deportes"),
  deportes: document.getElementsByName("deportes")[0], // input hidden
  cbInfoAdicional: document.getElementById("info-adicional"),
  fsInfoAdicional: document.getElementById("datos-info-adicional"),
  fechaAtencion: document.getElementById("fecha-atencion"),
  email: document.getElementById("email"),
  telefono: document.getElementById("telefono"),
};
(function(){
  cargarArrayMunicipios();
//*********/ ===> (1) añade un manejador para el evento de envío del form ... la función manejadora es validarSolicitud
document.forms["frmSolicitud"].addEventListener("submit",validarAntesDeEnviar);
DOM.frmSolicitud.addEventListener("submit", validarSolicitud);
  // ===> (2) añade un manejador para cuando cambie el valor del "select" islas ... la función manejadora es cargarSelectMunicipios
  // Manejador para deshabilitar el "fielset" de información adicional cuando se chequea el checkbox del "legend"
  DOM.cbInfoAdicional.addEventListener("change", 
        ()=>DOM.fsInfoAdicional.disabled ? DOM.fsInfoAdicional.disabled=false :DOM.fsInfoAdicional.disabled=true);
  // Valor inicial del checkbox de info adicional
  DOM.cbInfoAdicional.checked=false; 
  // deshabilitar el fieldset de info inicial
  DOM.fsInfoAdicional.disabled=true; 
})()
function validarSolicitud(e){
   
  
  ocultarErrores(DOM.nombre, DOM.dni, DOM.isla, DOM.municipio, DOM.codPostal,DOM.selectDeportes, DOM.fechaAtencion, DOM.email, DOM.telefono);
  //
  // Comprobar campos obligatorios
  obligatorios(e, DOM.nombre, DOM.dni,DOM.isla, DOM.municipio, DOM.codPostal, DOM.fechaAtencion, DOM.email, DOM.telefono);
  if (DOM.selectDeportes.selectedOptions.length == 0)
    mostrarError(DOM.selectDeportes, "Debe seleccionar al menos un deporte", e);
    
    if (!DOM.codPostal.validity.valid) //===> +++(4) sustituye "true" por el código necesario para comprobar que el valor introducido no concuerda con la expresión regular
    mostrarError(DOM.codPostal, "El código postal debe tener 5 números", e);
    if (!DOM.email.validity.valid && DOM.email.validity.typeMismatch)
    mostrarError(DOM.email, DOM.email.validationMessage, e);
  //
  // Comprobar concordancia con patrones
  // codPostal (Para este campo el patrón SÍ lo definimos en HTML)
  //++++ ===> (3) completa la expresión regular para el DNI. Debe tener 2 grupos.
  let erDni = /^(\d{8})([A-Za-z])$/;
let gruposDni = DOM.dni.value.match(erDni);
if (gruposDni === null) {
  mostrarError(DOM.dni, "EL dni introducido no es válido. Deben ser 8 números seguidos de una letra", e);
  e.preventDefault();

} else {
  let numeros = gruposDni[1];
  let letra = gruposDni[2];
  if (!dniValido(numeros, letra)) {
    mostrarError(DOM.dni, "EL dni introducido no es válido. La letra no se corresponde con el número", e);
    e.preventDefault();

  }
}

  // dni (Para este caso el patrón NO lo definimos en HTML ... todo en JS para poder validar la letra)
  // ===> (5) Escribe el código necesario ... ten en cuenta:
  //          - Utiliza la función  dniValido(numeros, letra)
  //          - Utiliza este código: mostrarError(DOM.dni, "EL dni introducido no es válido. Deben ser 8 número seguidos de una letra", e);
  //          - Utiliza este código: mostrarError(DOM.dni, "EL dni introducido no es válido. La letra no se corresponde con el número", e);
  //
  // email... mostrar mensaje ofrecido por el sistema

  //
  // Cargar campos hidden
  // Hidden "deportes"
  // ===> (6) Escribe el código necesario
  //  Hidden "mayorEdad"
  // ===> (7) Escribe el código necesario
}
function obligatorios(e, ...campos){
  // ===> (8) Escribe el código necesario: para cada campo, pon el texto "Debe introducir un valor" en la sección de errores
  //      Utiliza la clase CSS "oculto"
  //      No olvides evitar el envío de los datos
}
function dniValido(numeros, letra){
  const letrasDni = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
  const modulo = numeros % 23;
  const letraCalculada = letrasDni[modulo];
  // ===> (9) Escribe el código necesario para validar la letra
  return true; // o false si la letra no es válida
}
function ocultarErrores(...campos){
  // Ocultar todas las secciones de errores
  campos.forEach(campo => campo.nextElementSibling.classList.add("oculto"));
}
function mostrarError(campo, msg, e){
  // Mostrar el mensaje msg en la sección de error del campo "campo"
  campo.nextElementSibling.textContent=msg;
  campo.nextElementSibling.classList.remove("oculto");
  // ===> (10) Escribe el código necesario (una línea) para para evitar el funcionamiento por defecto del evento "e"
}
function cargarSelectMunicipios(){
  // Borrar las opciones actuales
  // ===> (11) Escribe el código necesario
  let opcion;
  //cargar el placeholder
  // ===> (12) Escribe el código necesario
  //      IMPORTANTE: analiza el código HTML de "islas"
  //cargar municipios
  // ===> (13) Escribe el código necesario para cargar los minicipios de la variable "municipios" de la isla que ha seleccionado el usuario
  //      IMPORTANTE: analiza el código HTML de "islas"
}
function addTown(mun,cp,isla){
  obj=new Object();
  obj.nombre=mun;
  obj.codigo=cp;
  obj.codigoisla=isla;
  // ===> (14) Escribe el código necesario para anadir el objeto obj a la variable minicipios
}
// Función extraída de CanaryFly
function cargarArrayMunicipios(){
  addTown('Adeje', '380012','TF');
            addTown('Agaete', '350017','GC');
            addTown('Agulo', '380027','GO');
            addTown('Antigua', '350038','FV');
            addTown('Arafo', '380048','TF');
            addTown('Arico', '380051','TF');
            addTown('Arona', '380064','TF');
            addTown('Artenara', '350056','GC');
            addTown('Arucas', '350069','GC');
            addTown('Agüimes', '350022','GC');
            addTown('Alajeró', '380033','GO');
            addTown('Arrecife', '350043','LZ');
            addTown('Barlovento', '380070','LP');
            addTown('Betancuria', '350075','FV');
            addTown('Breña Baja', '380099','LP');
            addTown('Buenavista Del Norte', '380103','TF');
            addTown('Breña Alta', '380086','LP');
            addTown('Candelaria', '380110','TF');
            addTown('El Paso', '380276','LP');
            addTown('El Pinar', '389013','HI');
            addTown('El Rosario', '380321','TF');
            addTown('Fasnia', '380125','TF');
            addTown('Firgas', '350081','GC');
            addTown('Frontera', '380131','HI');
            addTown('Fuencaliente De La Palma', '380146','LP');
            addTown('Garachico', '380159','TF');
            addTown('Granadilla De Abona', '380178','TF');
            addTown('Garafía', '380162','LP');
            addTown('Guía De Isora', '380197','TF');
            addTown('Gáldar', '350094','GC');
            addTown('Güímar', '380201','TF');
            addTown('Hermigua', '380218','GO');
            addTown('Haría', '350108','LZ');
            addTown('Icod De Los Vinos', '380223','TF');
            addTown('Ingenio', '350115','GC');
            addTown('La Guancha', '380184','TF');
            addTown('La Laguna', '380239','TF');
            addTown('La Matanza De Acentejo', '380257','TF');
            addTown('La Oliva', '350141','FV');
            addTown('La Orotava', '380260','TF');
            addTown('La Victoria De Acentejo', '380511','TF');
            addTown('Las Palmas De Gran Canaria', '350167','GC');
            addTown('Los Llanos De Aridane', '380244','LP');
            addTown('Los Realejos', '380316','TF');
            addTown('Los Silos', '380429','TF');
            addTown('Moya', '350136','GC');
            addTown('Mogán', '350120','GC');
            addTown('Puerto De La Cruz', '380282','TF');
            addTown('Puerto Del Rosario', '350173','FV');
            addTown('Puntagorda', '380295','LP');
            addTown('Puntallana', '380309','LP');
            addTown('Pájara', '350154','FV');
            addTown('San Juan De La Rambla', '380342','TF');
            addTown('San Miguel', '380355','TF');
            addTown('San Sebastian De La Gomera', '380368','GO');
            addTown('Santa Cruz De La Palma', '380374','LP');
            addTown('Santa Cruz De Tenerife', '380380','TF');
            addTown('Santiago Del Teide', '380407','TF');
            addTown('Sauzal', '380414','TF');
            addTown('San Andrés Y Sauces', '380337','LP');
            addTown('San Bartolomé', '350189','LZ');
            addTown('San Bartolomé De Tirajana', '350192','GC');
            addTown('San Nicolás De Tolentino', '350206','GC');
            addTown('Santa Brígida', '350213','GC');
            addTown('Santa Lucía', '350228','GC');
            addTown('Santa María De Guía De Gran Canaria', '350234','GC');
            addTown('Santa úrsula', '380393','TF');
            addTown('Tacoronte', '380435','TF');
            addTown('Tanque', '380440','TF');
            addTown('Tazacorte', '380453','LP');
            addTown('Tegueste', '380466','TF');
            addTown('Teguise', '350249','LZ');
            addTown('Tejeda', '350252','GC');
            addTown('Telde', '350265','GC');
            addTown('Teror', '350271','GC');
            addTown('Tijarafe', '380472','LP');
            addTown('Tinajo', '350290','LZ');
            addTown('Tuineje', '350304','FV');
            addTown('Tías', '350287','LZ');
            addTown('Valle Gran Rey', '380491','GO');
            addTown('Vallehermoso', '380504','GO');
            addTown('Valleseco', '350326','GC');
            addTown('Valsequillo De Gran Canaria', '350311','GC');
            addTown('Valverde', '380488','HI');
            addTown('Vega De San Mateo', '350332','GC');
            addTown('Vilaflor', '380526','TF');
            addTown('Villa De Mazo', '380532','LP');
            addTown('Yaiza', '350347','LZ');
   
}