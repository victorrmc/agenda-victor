//
// UNIDAD 1
//
/* Criterios de calificación UD1.
Empieza haciendo lo marcado con *
(*2 puntos)  Creas objetos "participante" correctameente mediante la función constructora SIN encapsulamiento
(*2 puntos)  Validas los datos nombre, apellido1 y apellidos2 mediante una adecuada gestión de errores (try-catch-throw) 
      mostrando los errores en la sección correspondiente
(1 punto)  Validas los tiempos de las carreras (al menos 1 es obligatorio) utilizando sólo métodos de string
     mediante una adecuada gestión de errores mostrando los errores en la sección correspondiente
(*1 punto)  Muestras la lista de participantes con nombre apellido1 y apellido2 (con innerHtml)
(2 puntos)  Muestras el tiempo total para cada participante en formato hh:mm:ss
(2 puntos)  Realizas correctamente la función getFechas()
*/
let participantes = [];
function instanciar(id, nombre, apellido1, apellido2, fechaNacimiento) {
  validar(id, nombre, apellido1, apellido2, fechaNacimiento);
  if (error.innerHTML == "<span></span>") {
    let par = new Participante(id, nombre, apellido1, apellido2, fechaNacimiento);
    participantes.push(par);
  }
  // Utilizar una función constructora SIN encapculamiento
  // Validaciones de datos obligatorios: 
  //        nombre, apellido1, apellido2 son obligatorios
  //        es obligatorio al menos los datos de una carrera (es obligatorio participar en almenos una carrera)
  // Los tiempos de las carreras están en formato hh:mm:ss, por ejemplo 01:55:59 es una hora 55 minuto y 59 segundos
  // Si no se especifica el tiempo de una carrera, se guarda como 00:00:00
  // Después de instancia o actualizar la lista de participantes ... mostrarla en HTML
  mostrarParticipantes();
}
function Participante(id, nombre, apellido1, apellido2, ocho, media, maraton) {
  this.id = id;
  this.nombre = nombre;
  this.apellido1 = apellido1;
  this.apellido2 = apellido2;
  this.ocho = ocho;
  this.media = media;
  this.maraton = maraton;
  this.mostrar = function () {
    let resultado = `Participante: ${apellido1} ${apellido2}, ${nombre} `;
    return resultado;
  }


}
function mostrarError(msgError) {
  let error = document.getElementById("error");
  error.innerHTML = `<span>${msgError}</span>`
}
function mostrarParticipantes() {
  let divParticipantes = document.getElementById("div-participantes");
  let textoagenda = divParticipantes.innerHTML;
  participantes.forEach(par => {
    textoagenda = `${textoagenda} \n <p> ${par.mostrar()} </p>`;

  });
  divParticipantes.innerHTML = ` ${textoagenda} `;
  // Programar aquí un bucle para mostrar todas las partipante con innerHtml
  // Para cada participante se muestra: nombre apellido1 apellido2 tiempo total
  // Tiempo total es la suma de los tiempo de las 3 carreras en formato hh:mm:ss
}
function validar(id, nombre, apellido1, apellido2, ocho, media, maraton) {
  mostrarError("");
  // if(isNaN(document.getElementById("Id").value)){
  //   mostrarError("El id tiene que ser un numero");
  // }
  if (!isNaN(nombre)) {
    mostrarError("El nombre tiene que ser un string");
  }
  if (!isNaN(apellido1)) {
    mostrarError("El apellido1 tiene que ser un string");
  }
  if (!isNaN(apellido2)) {
    mostrarError("El apellido2 tiene que ser un string");
  }
  // if(isNaN(document.getElementById("ocho").value)){
  //   mostrarError("El id tiene que ser un numero");
  // }
  // if(isNaN(document.getElementById("media").value)){
  //   mostrarError("El id tiene que ser un numero");
  // }
  // if(isNaN(document.getElementById("maraton").value)){
  //   mostrarError("El id tiene que ser un numero");
  // }
  // var RegExPattern = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
  // if ((fechaNacimiento.match(RegExPattern)) && (fechaNacimiento!='')) {} 
  // else
  //   mostrarError("La fecha esta mal escrita formato dd/mm/aaaa");

  if (nombre == "") {
    mostrarError("Introduce un nombre");
  }
  if (apellido1 == "") {
    mostrarError("Introduce un apellido1");
  }
  if (apellido2 == "") {
    mostrarError("Introduce un apellido2");
  }
}


/*
Programa la función getFechas que recibe por parámetros un número indeterminado 
de valores, donde cada valor  representa un lenguaje, y retorna un array de strings 
con la fecha actual en cada uno de los lenguajes con el formato tal cual el ejemplo.
Ejemplo:
getFechas (“en”, “es”)
Resultado: ['Sun, 11/27/2022, 18:31', 'dom, 27/11/2022, 18:31’]
*/
function getFechas(/*programa tú los parámetros */) {
}
//
// UNIDAD 2
//
let deportistas = [
  {
    nombre: 'Antonio', apellido1: 'García', apellido2: 'González', edad: 25, equipo: 'Trotamundos',
    participaEn: [{ carrera: 'ochoKm', tiempoEnSegundos: 1855 },
    { carrera: 'mediaMaraton', tiempoEnSegundos: 4855 },
    { carrera: 'maraton', tiempoEnSegundos: 6055 }
    ]
  },
  {
    nombre: 'Juan', apellido1: 'Carballo', apellido2: 'Delgado', edad: 45, equipo: 'Clator',
    participaEn: [{ carrera: 'ochoKm', tiempoEnSegundos: 1955 },
    { carrera: 'maraton', tiempoEnSegundos: 6155 }
    ]
  },
  {
    nombre: 'Ayoze', apellido1: 'Mesa', apellido2: 'Herrera', edad: 38, equipo: 'Clator',
    participaEn: [{ carrera: 'ochoKm', tiempoEnSegundos: 1975 },
    { carrera: 'mediaMaraton', tiempoEnSegundos: 4985 },
    { carrera: 'maraton', tiempoEnSegundos: 6188 }
    ]
  },
  {
    nombre: 'Antonio', apellido1: 'Galván', apellido2: 'Vera', edad: 61, equipo: 'Trotamundos',
    participaEn: [{ carrera: 'ochoKm', tiempoEnSegundos: 2055 },
    { carrera: 'mediaMaraton', tiempoEnSegundos: 5855 }
    ]
  }
]
// Haz primero las marcadas con *
function ejercicio1(pdeportistas) {
  // (*1 punto) retorna colección con todos los deportistas ordenados por nombre de forma descendente
  deportistas.sort((a, b) => a.nombre.localeCompare(b.nombre));
  console.log(deportistas);

}
function ejercicio2(pDeportistas) {
  /* (*2 puntos) retorna colección con todos los deportistas, incluyendo para cada deportista los atributos 
     originales más el atributo categoría, que puede tener los siguientes valores
     'M35': si tiene 35 años o más, pero menos de 45
     'M45': si tiene 45 años o más, pero menos de 55
     'M55': si tiene 55 años o más, pero menos de 60
     'M60': si tiene 60 años o más*/
  //return programadores.map(programador => {return {...programador, categoria:(programador.experiencia<=5 ? 'junior': 'senior') }}).sort((e1,e2) => e2.edad-e1.edad)  

  let Arraydeportista =
  pDeportistas.map(deport => {
    if (deport.edad <= 35) {
      return { ...deport, categoria: 'ABS' }
    }
      if (deport.edad >= 35 && deport.edad <= 45) {
        return { ...deport, categoria: 'M35' }
      }
      if (deport.edad >= 45 && deport.edad <= 55) {
        return { ...deport, categoria: 'M45' }
      }
      if (deport.edad >= 55 && deport.edad <= 60) {
        return { ...deport, categoria: 'M55' }
      }
      if (deport.edad >= 60) {
        return { ...deport, categoria: 'M60' }
      }
    });
    console.log(Arraydeportista);
}

function ejercicio3(pDeportistas) {
  /* (*2 puntos) retorna colección con todos los deportistas, incluyendo para cada deportista los atributos 
     originales más el atributo numCarreras que es el número de carreras en las que ha participado
     ordenador por edad de forma ascendente*/
     let Arraydeportista = pDeportistas.map(deport => { return { ...deport, numCarreras: (deport.participaEn.length) } }).sort((e1, e2) => e2.edad - e1.edad);
  console.log(Arraydeportista);
}
function ejercicio4(pDeportistas, pCarrera) {
  let Arraydeportista = pDeportistas.filter(deport => {return deport.sort(((e1) => e1.carrera == pCarrera))});
  console.log(Arraydeportista);
  /* (1 punto) retorna todos los deportistas que hayan participado en la carrrera pasada por parámetro*/
}
function ejercicio5(pDeportistas, pEquipo) {
  /* (1 punto) retorna todos los deportistas del equipo pasado por parámetro. Para cada deportita
  se incluyen todos los atributos más la categoría (M35, M45, M55, M60) y ordenados por edad */
}

function ejercicio6(pDeportistas) {
  /* (1 punto) retorna colección(array) de string con los distintos equipos que han participado */
}
function ejercicio7(pDeportistas) {
  /* (2 puntos) retorna colección con todos los deportistas, incluyendo para cada deportista los atributos 
     originales más el atributo tiempoTotal, que es la suma de los tiempos de la carreras 
     en las que ha participado */
}