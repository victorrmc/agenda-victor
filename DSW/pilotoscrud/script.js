
let pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Francisco Javier González Pérez",
      years: 30,
    },
    {
      id: 41,
      name: "Tallissan Lintra",
      years: 16,
    },
    {
      id: 99,
      name: "Ello Asty",
      years: 22,
    }
  ];
let agenda = [];
let storagePiloto = JSON.parse(localStorage.getItem(`pilotos`));
if(storagePiloto === null || storagePiloto.length === 0 ){
 storagePiloto = localStorage.setItem(`pilotos`, JSON.stringify(pilots));
}
agenda = JSON.parse(localStorage.getItem(`pilotos`,JSON.stringify(pilots)));
mostrarAgenda(agenda);
//añadir despues del id por ejemplo añadir la persona despues del id 55 si no existe debe dar  un error.
// añadir las imagenes segun su experiencia 0-10 n3 11-21 n2 21-cualquiera n1
function Crear(Id,pNombre,pAnos,dsId){
  mostrarError("");
  Id = parseInt(Id);
  pAnos = parseInt(pAnos);
  if(isNaN(document.getElementById("Id").value)){
    mostrarError("El id tiene que ser un numero");
  }
  if(!isNaN(pNombre)){
    mostrarError("El nombre tiene que ser un string");
  }
  if(isNaN(document.getElementById("anos").value)){
    mostrarError("El id tiene que ser un numero");
  }
  if(isNaN(document.getElementById("dsId").value)){
    mostrarError("El id tiene que ser un numero");
  }
  if(Id == ""){
    mostrarError("Introduce un id");
   }
   if(pNombre == ""){
    mostrarError("Introduce un nombre");
   }
   if(pAnos == ""){
    mostrarError("Introduce años");
   }
   if(storagePiloto.some(pil=> pil.id == Id)){
    mostrarError("Ese id ya esta en la lista");
  }
  if(error.innerHTML == "<span></span>"){
  let pilot1 = new Piloto(Id, pNombre, pAnos);
  if(dsId == ""){
    storagePiloto.splice(storagePiloto.length,0,pilot1);
  }
  else{
    let indice = storagePiloto.findIndex(per => per.id == dsId);
    storagePiloto.splice(indice+1,0,pilot1);
  }
  localStorage.setItem(`pilotos`,JSON.stringify(storagePiloto));
  agenda = JSON.parse(localStorage.getItem(`pilotos`,JSON.stringify(pilots)));
  mostrarAgenda(agenda);
   }
}

function Eliminar(Id){
  mostrarError("");
  agenda = JSON.parse(localStorage.getItem(`pilotos`,JSON.stringify(pilots)));
  Id = parseInt(Id);
  
  if(isNaN(document.getElementById("Id").value)){
    mostrarError("El id tiene que ser un numero");
  }
  if(storagePiloto.some(pil=> pil.id == Id)){}
  else{
    mostrarError("Introduce un id que este en la lista");
  }
  if(error.innerHTML == "<span></span>"){
  let indice = storagePiloto.findIndex(per => per.id == Id);
  storagePiloto.splice(indice,1);
  localStorage.setItem(`pilotos`,JSON.stringify(storagePiloto));
  agenda = JSON.parse(localStorage.getItem(`pilotos`,JSON.stringify(pilots)));
  mostrarAgenda(agenda);
  }
};
function Actualizar(Id,pNombre,pAnos){
  mostrarError("");
  Id = parseInt(Id);
  
  pAnos = parseInt(pAnos);
  if(isNaN(document.getElementById("Id").value)){
    mostrarError("El id tiene que ser un numero");
  }
  if(!isNaN(pNombre)){
    mostrarError("El nombre tiene que ser un string");
  }
  if(isNaN(document.getElementById("anos").value)){
    mostrarError("El años tiene que ser un numero");
  }
  if(Id == ""){
    mostrarError("Introduce un id");
   }
   if(pNombre == ""){
    mostrarError("Introduce un nombre");
   }
   if(pAnos == ""){
    mostrarError("Introduce años");
   }
   if(storagePiloto.some(pil=> pil.id == Id)){}
   else{
     mostrarError("Introduce un id que este en la lista");
   }
   if(error.innerHTML == "<span></span>"){
  let indice = storagePiloto.findIndex(per => per.id == Id);
  let pilot1 = new Piloto(Id, pNombre, pAnos);
  storagePiloto.splice(indice,1,pilot1);
  localStorage.setItem(`pilotos`,JSON.stringify(storagePiloto));
  agenda = JSON.parse(localStorage.getItem(`pilotos`,JSON.stringify(pilots)));
  mostrarAgenda(agenda);
   }
};


function Piloto(Id, pNombre, pAnos) {
  this.id = Id;
  this.name = pNombre;
  this.years = pAnos;
}

function mostrarError(msgError){
  let error = document.getElementById("error");
  error.innerHTML = `<span>${msgError}</span>`
}

function mostrarAgenda(agendaa){
  let agenda = document.getElementById("agenda");
  let textoagenda = agenda.innerHTML;
  if(agendaa === null){
    mostrarError("No se añadio correctamente el piloto");
  };
  textoagenda = `<table>`;
  let campos = Object.keys(agendaa[0]);
  campos.map((campo)=>{textoagenda +=`<th>${campo}</th>`})
  textoagenda +=`<th> imagen </th>`;
  agendaa.forEach(per => {
    if(per.years<=10){
      textoagenda = `${textoagenda} \n <tr> <td> ${per.id} </td> <td> ${per.name} </td> <td> ${per.years} </td><td> <img src="${distinciones[0].imagen}" width=100px height=100px /> </td> </tr>` ;
    }
    if((per.years<=20)&&(per.years>=11)){
      textoagenda = `${textoagenda} \n <tr> <td> ${per.id} </td> <td> ${per.name} </td> <td> ${per.years} </td><td> <img src="${distinciones[1].imagen}" width=100px height=100px /> </td> </tr>` ;
    } 
    if((per.years>=21)){
      textoagenda = `${textoagenda} \n <tr> <td> ${per.id} </td> <td> ${per.name} </td> <td> ${per.years} </td><td> <img src="${distinciones[2].imagen}"width=100px height=100px /> </td> </tr>` ;
    } 
  });
  textoagenda += `</table>`
  agenda.innerHTML = `${textoagenda}`;
  // Programar aquí un forEach para mostrar todas las personas de la agenda
}