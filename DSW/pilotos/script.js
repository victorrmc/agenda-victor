let strMunicipios='[{"municipio":"Adeje","poblacion":47869,"isla":"Tenerife"},{"municipio":"Agulo","poblacion":1096,"isla":"La Gomera"},{"municipio":"Alajeró","poblacion":2017,"isla":"La Gomera"},{"municipio":"Arafo","poblacion":5551,"isla":"Tenerife"},{"municipio":"Arico","poblacion":7988,"isla":"Tenerife"},{"municipio":"Arona","poblacion":81216,"isla":"Tenerife"},{"municipio":"Barlovento","poblacion":1876,"isla":"La Palma"},{"municipio":"Breña Alta","poblacion":7204,"isla":"La Palma"},{"municipio":"Breña Baja","poblacion":5690,"isla":"La Palma"},{"municipio":"Buenavista del Norte","poblacion":4778,"isla":"Tenerife"},{"municipio":"Candelaria","poblacion":27985,"isla":"Tenerife"},{"municipio":"Fasnia","poblacion":2786,"isla":"Tenerife"},{"municipio":"Frontera","poblacion":4093,"isla":"El Hierro"},{"municipio":"Fuencaliente de la Palma","poblacion":1722,"isla":"La Palma"},{"municipio":"Garachico","poblacion":4871,"isla":"Tenerife"},{"municipio":"Garafía","poblacion":1667,"isla":"La Palma"},{"municipio":"Granadilla de Abona","poblacion":50146,"isla":"Tenerife"},{"municipio":"La Guancha","poblacion":5520,"isla":"Tenerife"},{"municipio":"Guía de Isora","poblacion":21368,"isla":"Tenerife"},{"municipio":"Güímar","poblacion":20190,"isla":"Tenerife"},{"municipio":"Hermigua","poblacion":1832,"isla":"La Gomera"},{"municipio":"Icod de los Vinos","poblacion":23254,"isla":"Tenerife"},{"municipio":"Los Llanos de Aridane","poblacion":20462,"isla":"La Palma"},{"municipio":"La Matanza de Acentejo","poblacion":9061,"isla":"Tenerife"},{"municipio":"La Orotava","poblacion":42029,"isla":"Tenerife"},{"municipio":"El Paso","poblacion":7622,"isla":"La Palma"},{"municipio":"El Pinar de El Hierro","poblacion":1870,"isla":"El Hierro"},{"municipio":"Puerto de la Cruz","poblacion":30468,"isla":"Tenerife"},{"municipio":"Puntagorda","poblacion":2110,"isla":"La Palma"},{"municipio":"Puntallana","poblacion":2506,"isla":"La Palma"},{"municipio":"Los Realejos","poblacion":36402,"isla":"Tenerife"},{"municipio":"El Rosario","poblacion":17370,"isla":"Tenerife"},{"municipio":"San Andrés y Sauces","poblacion":4141,"isla":"La Palma"},{"municipio":"San Cristóbal de La Laguna","poblacion":157503,"isla":"Tenerife"},{"municipio":"San Juan de la Rambla","poblacion":4828,"isla":"Tenerife"},{"municipio":"San Miguel de Abona","poblacion":20886,"isla":"Tenerife"},{"municipio":"San Sebastián de la Gomera","poblacion":9093,"isla":"La Gomera"},{"municipio":"Santa Cruz de La Palma","poblacion":15716,"isla":"La Palma"},{"municipio":"Santa Cruz de Tenerife","poblacion":207312,"isla":"Tenerife"},{"municipio":"Santa Úrsula","poblacion":14679,"isla":"Tenerife"},{"municipio":"Santiago del Teide","poblacion":11111,"isla":"Tenerife"},{"municipio":"El Sauzal","poblacion":8934,"isla":"Tenerife"},{"municipio":"Los Silos","poblacion":4693,"isla":"Tenerife"},{"municipio":"Tacoronte","poblacion":24134,"isla":"Tenerife"},{"municipio":"El Tanque","poblacion":2763,"isla":"Tenerife"},{"municipio":"Tazacorte","poblacion":4575,"isla":"La Palma"},{"municipio":"Tegueste","poblacion":11294,"isla":"Tenerife"},{"municipio":"Tijarafe","poblacion":2532,"isla":"La Palma"},{"municipio":"Valle Gran Rey","poblacion":4564,"isla":"La Gomera"},{"municipio":"Vallehermoso","poblacion":2901,"isla":"La Gomera"},{"municipio":"Valverde","poblacion":5005,"isla":"El Hierro"},{"municipio":"La Victoria de Acentejo","poblacion":9185,"isla":"Tenerife"},{"municipio":"Vilaflor de Chasna","poblacion":1667,"isla":"Tenerife"},{"municipio":"Villa de Mazo","poblacion":4843,"isla":"La Palma"}]'

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

//   let iniciales =  pilots.map((pilots) => {
//     let pilotos = pilots.name;
//     let nombre = pilotos.split(" ");
//     let incial = nombre.map((nombree)=> {return nombree.charAt(0)})
//     return incial
//   })
// (1) Obtener una colección de objetos String con el formato "<name>, experiencia: <years>" de todos los pilotos.



  // (2) Obtener una colección de objetos complejos, compuestos con los atributos name y years, de todos los pilotos.
  // function ej2 (){ pilots.map((pilots) => {
     
  //   return {name: pilots.name ,years: pilots.years}
  // })}

// (3) Obtener una colección de objetos complejos, compuestos con los mismos atributos que la colección pilots, de los pilotos con una experiencia mayor que 16 años.

//function ej3 (){ pilots.filter((pilot)=> {return pilot.years>16})}

// (4) Teniendo en cuenta que todos los pilotos forma un equipo ¿Cuál es la experiencia total en años de los pilotos como equipo?

//function ej4 (){ pilots.reduce((pilotos, a)=> {return pilotos+a.years},0)}

// (5) Obtener una colección de objetos complejos compuestos por los atributos "name" e "id" de los pilotos que tengan una experiencia mayor de 15 años.

//  let ej5 = pilots.filter((pilot)=> {return pilot.years>15}).map((piloto)=> {return {name: piloto.name, id: piloto.id}})
// (6) Obtener una colección de objetos complejos compuestos por los atributos "id" e "iniciales" (utilizar join para concatenar )

  // let ej6 =  pilots.map((pilots) => {
  //   let pilotos =   pilots.name;
  // let nombre = pilotos.split(" ");
  // let incial = nombre.map((nombree)=> {return nombree.charAt(0)}).join(".")
  // return {id: pilots.id, iniciales: incial}})
  // (7) Obtener una colección de objetos complejos compuestos por los atributos "id" e "iniciales" (utilizar reduce para concatenar)
  // let ej7 =  pilots.map((pilots) => {
  //   let pilotos =   pilots.name;
  // let nombre = pilotos.split(" ");
  // let incial = nombre.map((nombree)=> {return nombree.charAt(0)}).reduce((ac, incial)=>{return ac+incial})
  // return {id: pilots.id, iniciales: incial}})
  
 
//-----------------------------------------------------------------------------------------------------------

//console.log(ejj5);
// (function Mostar1(){


// })
function  ej1(){ 
  return pilots.map((pilots) => {
  let resultado =`${pilots.name}, experiencia ${pilots.years}`
  return resultado
})}
function ej1M(){

  let datos = ej1();
  let html = `<table><tr><th>Piloto</th></tr>`
 let resultado = datos.map((pilot)=>{
  html += `<tr><td>${pilot}</td></tr>`
 })
html += `</table>`
  return html
}
//------------------ 2
function ej2(){ 
  return pilots.map((pilots) => {
     
  return {name: pilots.name ,years: pilots.years}
})}

function ej2M(){

  let datos = ej2();
  let campos = Object.keys(datos[0]);
  let html = `<table>`
  campos.map((campo)=>{html +=`<th>${campo}</th>`})
  let resultado = datos.map((pilot)=>{
  html += `<tr><td>${pilot.name}</td><td>${pilot.years}</td></tr>`
 })
html += `</table>`
  return html
}
//------------------ 3
function ej3 (){ return pilots.filter((pilot)=> {return pilot.years>16})}

function ej3M(){

  let datos = ej3();
  let campos = Object.keys(datos[0]);
  let html = `<table>`
  campos.map((campo)=>{html +=`<th>${campo}</th>`})
 let resultado = datos.map((pilot)=>{
  html += `<tr><td>${pilot.id}</td><td>${pilot.name}</td><td>${pilot.years}</td></tr>`
 })
html += `</table>`
  return html
}
//------------------ 4
function ej4(){return pilots.reduce((pilotos, a)=> {return pilotos+a.years},0)}

function ej4M(){

  let datos = ej4();
  let html = `<table><tr><th>Experiencia total de pilotos</th></tr>`
  html += `<tr><td>${datos}</td></tr>`

html += `</table>`
  return html
}
//------------------ 5
function ej5(){return pilots.filter((pilot)=> {return pilot.years>15}).map((piloto)=> {return {name: piloto.name, id: piloto.id}})}

function ej5M(){

  let datos = ej5();
  let campos = Object.keys(datos[0]);
  let html = `<table>`
  campos.map((campo)=>{html +=`<th>${campo}</th>`})
 let resultado = datos.map((pilot)=>{
  html += `<tr><td>${pilot.name}</td><td>${pilot.id}</td></tr>`
 })
html += `</table>`
  return html
}
//------------------ 6
function ej6(){ return pilots.map((pilots) => {
  let pilotos =   pilots.name;
let nombre = pilotos.split(" ");
let incial = nombre.map((nombree)=> {return nombree.charAt(0)}).join(".")
return {id: pilots.id, iniciales: incial}})}

function ej6M(){

  let datos = ej6();
  let campos = Object.keys(datos[0]);
  let html = `<table>`
  campos.map((campo)=>{html +=`<th>${campo}</th>`})
 let resultado = datos.map((pilot)=>{
  html += `<tr><td>${pilot.id}</td><td>${pilot.iniciales}</td></tr>`
 })
html += `</table>`
  return html
}
//------------------ 7
function ej7(){ return pilots.map((pilots) => {
  let pilotos =   pilots.name;
let nombre = pilotos.split(" ");
let incial = nombre.map((nombree)=> {return nombree.charAt(0)}).reduce((ac, incial)=>{return ac+incial})
return {id: pilots.id, iniciales: incial}})}

function ej7M(){

  let datos = ej7();
  let campos = Object.keys(datos[0]);
  let html = `<table>`
  campos.map((campo)=>{html +=`<th>${campo}</th>`})
 let resultado = datos.map((pilot)=>{
  html += `<tr><td>${pilot.id}</td><td>${pilot.iniciales}</td></tr>`
 })
html += `</table>`
  return html
}
//------------------ Ayuntamiento
// (1) Obtener una colección de objetos complejos, compuestos de todos los atributos, de los ayuntamientos con una población inferior a 2000 personas
let municipio = JSON.parse(strMunicipios)
console.log({municipio})
//let ejj1 = municipio.filter((muni)=>{return muni.poblacion<2000})
//let ej3 = pilots.filter((pilot)=> {return pilot.years>16})
// (2) Obtener una colección de objetos complejos, compuestos con los atributos municipio y población, de los ayuntamientos con una población inferior a 2000 personas
// let ejj2 = municipio.filter((muni)=>{return muni.poblacion<2000}).map((mun)=> {return {municipio: mun.municipio, poblacion: mun.poblacion }})
// (3) ¿Cuál es la población total de la isla de La Palma?
//let  ejj3 = municipio.filter((muni)=>{return muni.isla == "La Palma"}).reduce((ac, lapalma)=> {return ac+lapalma.poblacion},0)
// (4) Obtener una colección de objetos String con el formato "<municipio>, población: <poblacion>" de todos los ayuntamientos
// let  ejj4 = municipio.map((muni)=>{
//   return `${muni.municipio}, pobalción:  ${muni.poblacion}`
// })
// (5) Obtener una colección de objetos complejos, compuestos con los atributos municipio y población, de todos los ayuntamientos de La Gomera
//let  ejj5 = municipio.filter((muni)=>{return muni.isla == "La Gomera"}).map((muni)=> {return {municipio: muni.municipio, poblacion: muni.poblacion}})
//------------------ j1
function ejj1(){ return municipio.filter((muni)=>{return muni.poblacion<2000})}

function ejj1M(){

  let datos = ejj1();
  let campos = Object.keys(datos[0]);
  let html = `<table>`
  campos.map((campo)=>{html +=`<th>${campo}</th>`})
  
 let resultado = datos.map((ayunta)=>{
  html += `<tr><td>${ayunta.municipio}</td><td>${ayunta.isla}</td><td>${ayunta.poblacion}</td></tr>`
 })
html += `</table>`
  return html
}
//------------------ j2
function ejj2(){ return municipio.filter((muni)=>{return muni.poblacion<2000}).map((mun)=> {return {municipio: mun.municipio, poblacion: mun.poblacion }})}

function ejj2M(){

  let datos = ejj2();
  let campos = Object.keys(datos[0]);
  let html = `<table>`
  campos.map((campo)=>{html +=`<th>${campo}</th>`})
 let resultado = datos.map((ayunta)=>{
  html += `<tr><td>${ayunta.municipio}</td><td>${ayunta.poblacion}</td></tr>`
 })
html += `</table>`
  return html
}
//------------------ j3
function ejj3(){ return municipio.filter((muni)=>{return muni.isla == "La Palma"}).reduce((ac, lapalma)=> {return ac+lapalma.poblacion},0)}

function ejj3M(){

  let datos = ejj3();
  let html = `<table><tr><th>Poblacion de La Palma</th></tr>`
  html += `<tr><td>${datos}</td></tr>`
html += `</table>`
  return html
}
//------------------ j4
function ejj4(){ return municipio.map((muni)=>{
  return `${muni.municipio}, población:  ${muni.poblacion}`
})}

function ejj4M(){

  let datos = ejj4();
  let html = `<table><tr><th>municipio y poblacion</th></tr>`
  let resultado = datos.map((muni)=>{
  html += `<tr><td>${muni}</td></tr>`
})
html += `</table>`
  return html
}
//------------------ j5
function ejj5(){ return municipio.filter((muni)=>{return muni.isla == "La Gomera"}).map((muni)=> {return {municipio: muni.municipio, poblacion: muni.poblacion}})
}

function ejj5M(){

  let datos = ejj5();
  let campos = Object.keys(datos[0]);
  let html = `<table>`
  campos.map((campo)=>{html +=`<th>${campo}</th>`})
  let resultado = datos.map((muni)=>{
    html += `<tr><td>${muni.municipio}</td><td>${muni.poblacion}</td></tr>`
  })
html += `</table>`
  return html
}

(function(){
  //------------------ 1
  let codigoejercio = document.getElementById("codigo-ej1")
  let resultadoejercio = document.getElementById("resultado-ej1")
  //let retorno;
  retorno = ej1M();
  codigoejercio.innerHTML = ej1.toString();
  resultadoejercio.innerHTML =`<p>${retorno}</p>`

  //------------------ 2
  let codigoejercio2 = document.getElementById("codigo-ej2")
  let resultadoejercio2 = document.getElementById("resultado-ej2")
  let retorno2;
  retorno2 = ej2M();
  codigoejercio2.innerHTML = ej2.toString();
  resultadoejercio2.innerHTML =`<p>${retorno2}</p>`
  //------------------ 3
  let codigoejercio3 = document.getElementById("codigo-ej3")
  let resultadoejercio3 = document.getElementById("resultado-ej3")
  let retorno3;
  retorno3 = ej3M();
  codigoejercio3.innerHTML = ej3.toString();
  resultadoejercio3.innerHTML =`<p>${retorno3}</p>`
  //------------------ 4
  let codigoejercio4 = document.getElementById("codigo-ej4")
  let resultadoejercio4 = document.getElementById("resultado-ej4")
  let retorno4;
  retorno4 = ej4M();
  codigoejercio4.innerHTML = ej4.toString();
  resultadoejercio4.innerHTML =`<p>${retorno4}</p>`
  //------------------ 5
  let codigoejercio5 = document.getElementById("codigo-ej5")
  let resultadoejercio5 = document.getElementById("resultado-ej5")
  let retorno5;
  retorno5 = ej5M();
  codigoejercio5.innerHTML = ej5.toString();
  resultadoejercio5.innerHTML =`<p>${retorno5}</p>`
  //------------------ 6
  let codigoejercio6 = document.getElementById("codigo-ej6")
  let resultadoejercio6 = document.getElementById("resultado-ej6")
  let retorno6;
  retorno6 = ej6M();
  codigoejercio6.innerHTML = ej6.toString();
  resultadoejercio6.innerHTML =`<p>${retorno6}</p>`
  //------------------ 7
  let codigoejercio7 = document.getElementById("codigo-ej7")
  let resultadoejercio7 = document.getElementById("resultado-ej7")
  let retorno7;
  retorno7 = ej7M();
  codigoejercio7.innerHTML = ej7.toString();
  resultadoejercio7.innerHTML =`<p>${retorno7}</p>`
  //------------------ j1
  let codigoejercioj1 = document.getElementById("codigo-ejj1")
  let resultadoejercioj1 = document.getElementById("resultado-ejj1")
  let retornoj1;
  retornoj1 = ejj1M();
  codigoejercioj1.innerHTML = ejj1.toString();
  resultadoejercioj1.innerHTML =`<p>${retornoj1}</p>`
  //------------------ j2
  let codigoejercioj2 = document.getElementById("codigo-ejj2")
  let resultadoejercioj2 = document.getElementById("resultado-ejj2")
  let retornoj2;
  retornoj2 = ejj2M();
  codigoejercioj2.innerHTML = ejj2.toString();
  resultadoejercioj2.innerHTML =`<p>${retornoj2}</p>`
  //------------------ j3
  let codigoejercioj3 = document.getElementById("codigo-ejj3")
  let resultadoejercioj3 = document.getElementById("resultado-ejj3")
  let retornoj3;
  retornoj3 = ejj3M();
  codigoejercioj3.innerHTML = ejj3.toString();
  resultadoejercioj3.innerHTML =`<p>${retornoj3}</p>`
  //------------------ j4
  let codigoejercioj4 = document.getElementById("codigo-ejj4")
  let resultadoejercioj4 = document.getElementById("resultado-ejj4")
  let retornoj4;
  retornoj4 = ejj4M();
  codigoejercioj4.innerHTML = ejj4.toString();
  resultadoejercioj4.innerHTML =`<p>${retornoj4}</p>`
  //------------------ j5
  let codigoejercioj5 = document.getElementById("codigo-ejj5")
  let resultadoejercioj5 = document.getElementById("resultado-ejj5")
  let retornoj5;
  retornoj5 = ejj5M();
  codigoejercioj5.innerHTML = ejj5.toString();
  resultadoejercioj5.innerHTML =`<p>${retornoj5}</p>`



})()

