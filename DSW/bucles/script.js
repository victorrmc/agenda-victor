var pilots = [
    {
      id: 10,
      name: "Poe Dameron",
      years: 14,
    },
    {
      id: 2,
      name: "Temmin 'Snap' Wexley",
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
 let iniciales =  pilots.map((pilots) => {
  let pilotos = pilots.name;
  let nombre = pilotos.split(" ");
  let incial = nombre.map((nombree)=> {return nombree.charAt(0)}).join(".")
  return incial
})
console.log(iniciales);