let agenda = ["https://calzetonia.com/wp-content/uploads/2020/04/ea72ee53-1.jpg", "https://pandasneakers.es/wp-content/uploads/2021/06/nike-air-jordan-x-dior-hombre-1575528357-1.jpg"];

// Función IIFE
(function () {
    let storageImagen = JSON.parse(window.localStorage.getItem("imgdew"));
    if (storageImagen === null || storageImagen.length === 0) {
        storageImagen = localStorage.setItem("imgdew", JSON.stringify(agenda));
    }
    agenda = JSON.parse(localStorage.getItem("imgdew", JSON.stringify(agenda)));
    newlist = document.createElement("div")
    newlist.setAttribute("class", "lista-imagenes")
    document.body.insertAdjacentElement("afterend", newlist)

    agenda.forEach(i => {
        newdiv = document.createElement("div")
        newdiv.setAttribute("class", "imagen")
        newimg = document.createElement("img")
        newimg.setAttribute("src", i)
        newdiv.insertAdjacentElement("beforeend", newimg);

        newlist.insertAdjacentElement("afterbegin", newdiv);
        newlist.addEventListener("click", seleccionar)
    });
    // Lista de imágenes que se mostrarán de forma dinámica ...
})()

function Añadir(url) {
    let h1 = document.getElementsByTagName("h1")[0];
    if(url == ""){
        h1.textContent="Mete un url"
        h1.style.color=red;
    }else{
        h1.textContent="Victor"
        agenda.push(url);
        newdiv = document.createElement("div")
        newdiv.setAttribute("class", "imagen")
        
    
        newimg = document.createElement("img")
        newimg.setAttribute("src", agenda[agenda.length - 1])
        newdiv.insertAdjacentElement("afterbegin", newimg);
        document.getElementsByClassName("imagen")[0].insertAdjacentElement("beforebegin", newdiv)
        storageImagen = localStorage.setItem("imgdew", JSON.stringify(agenda));
    }
    
}
function seleccionar(e){
    if(e.ctrlKey){
        if(e.target.parentNode.classList.contains("imageneliminar")){
        e.target.parentNode.classList.remove("imageneliminar");
    }else{
        e.target.parentNode.classList.add("imageneliminar");
    }
    }
    
}