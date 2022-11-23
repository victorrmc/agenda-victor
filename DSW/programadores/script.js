let programadores=[
    {nombre: 'Antonio', apellido1: 'García', apellido2: 'González', edad: 25, experiencia: 4,
   lenguajes: ['C++','JS', 'PHP']},
    {nombre: 'Ana', apellido1: 'Pérez', apellido2: 'Días', edad: 30, experiencia: 5, lenguajes:
   ['C','JS', 'Java']},
    {nombre: 'Pedro', apellido1: 'Abad', apellido2: 'García', edad: 24, experiencia: 15, lenguajes:
   ['Python','JS', 'Java','C++']}
   ]

function ej1(programadores){ 
   // return municipio.filter((muni)=>{return muni.poblacion<2000})
     return programadores.sort((e1,e2) => e2.edad-e1.edad)  
}
function ej2(programadores){ 
    // return municipio.filter((muni)=>{return muni.poblacion<2000})
      return programadores.map(programador => {return {...programador, categoria:(programador.experiencia<=5 ? 'junior': 'senior') }}).sort((e1,e2) => e2.edad-e1.edad)  
 }
 function ej3(programadores){ 
    // return municipio.filter((muni)=>{return muni.poblacion<2000})
    //.reduce((ac, lapalma)=> {return ac+lapalma.poblacion},0)
      return programadores.reduce((ac, expe)=> {return ac+expe.experiencia},0)
 }
 function ej4(programadores, exp){ 
    // return municipio.filter((muni)=>{return muni.poblacion<2000})
    //.reduce((ac, lapalma)=> {return ac+lapalma.poblacion},0)
      return programadores.filter((pro)=>{return pro.experiencia > exp})
 }
 function ej5(programadores, plenguajes){ 
  // return municipio.filter((muni)=>{return muni.poblacion<2000})
  //.reduce((ac, lapalma)=> {return ac+lapalma.poblacion},0)
    return programadores.filter((pro)=>{return pro.lenguajes.some(lenguaje=> lenguaje== plenguajes)})
}
console.log(ej5(programadores, "PHP"));