//let agenda = ["https://calzetonia.com/wp-content/uploads/2020/04/ea72ee53-1.jpg", "https://pandasneakers.es/wp-content/uploads/2021/06/nike-air-jordan-x-dior-hombre-1575528357-1.jpg"];
var categorias;
var catalogo;
var strCategorias = '[{"nombre":"AirForce1"}, {"nombre":"AirMax1"}, {"nombre":"Jordan1"}, {"nombre":"Jordan4"}, {"nombre":"Jordan11"}, {"nombre":"Jordan13"}]';
var strCatalogo = '[{"id":1,"src":"https://calzetonia.com/wp-content/uploads/2020/04/ea72ee53-1.jpg","titulo":"Jordan 1 TurboGreen","categoria":"Jordan2"}, {"id":2,"src":"https://pandasneakers.es/wp-content/uploads/2021/06/nike-air-jordan-x-dior-hombre-1575528357-1.jpg", "titulo":"Jordan 1 Dior","categoria":"Jordan1"}]';
// Función IIFE
(function () {

    // arrowTop.onclick = () => {
    //     window.scrollBy({
    //         top: -scrollY,
    //         behavior: 'smooth',
    //     });
    // };

    // window.onscroll = () => {
    //     arrowTop.hidden = scrollY < document.documentElement.clientHeight;
    // };
    arrowTop.onclick = function() {
        window.scrollTo(pageXOffset, 0);
        // after scrollTo, there will be a "scroll" event, so the arrow will hide automatically
      };
  
    //   window.addEventListener('scroll', function() {
    //     arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
    //   });

    categorias = JSON.parse(localStorage.getItem("categorias"));
    if (categorias === null || categorias.length === 0)
        categorias = JSON.parse(strCategorias);
    catalogo = JSON.parse(localStorage.getItem("catalogo"));
    if (catalogo === null || catalogo.length === 0)
        catalogo = JSON.parse(strCatalogo);

    const $select = document.querySelector("#miSelect");    
    categorias.forEach(i => {
        const option = document.createElement('option');
        const valor = i.nombre;
        option.value = valor;
        option.text = valor;
        $select.appendChild(option);
    });
 


    newlist = document.createElement("div")
    newlist.setAttribute("id", "lista-imagenes")
    document.body.insertAdjacentElement("beforeend", newlist)

    catalogo.forEach(i => {
        newdiv = document.createElement("div")
        newdiv.setAttribute("class", "imagen")
        newdiv.setAttribute("id", i.id)
        newdiv.setAttribute("categoria", i.categoria)
        newimg = document.createElement("img")
        newimg.setAttribute("src", i.src)
        newtitulo = document.createElement("p")
        newtitulo.textContent = i.titulo
        newdiv.insertAdjacentElement("beforeend", newimg);
        newdiv.insertAdjacentElement("beforeend", newtitulo);
        newdiv.addEventListener("animationend", Eliminarhtml);
        newlist.insertAdjacentElement("afterbegin", newdiv);

        document.body.addEventListener("click", seleccionar);
    });
    // Lista de imágenes que se mostrarán de forma dinámica ...
})()
function search(busqueda) {
    let filtro = catalogo.filter(cat => { return cat.categoria == busqueda })

    if (filtro.length > 0) {
        document.getElementById("lista-imagenes").remove()
        newlist = document.createElement("div")
        newlist.setAttribute("id", "lista-imagenes")
        document.body.insertAdjacentElement("beforeend", newlist)

        filtro.forEach(i => {
            newdiv = document.createElement("div")
            newdiv.setAttribute("class", "imagen")
            newdiv.setAttribute("id", i.id)
            newdiv.setAttribute("categoria", i.categoria)
            newimg = document.createElement("img")
            newimg.setAttribute("src", i.src)
            newtitulo = document.createElement("p")
            newtitulo.textContent = i.titulo
            newdiv.insertAdjacentElement("beforeend", newimg);
            newdiv.insertAdjacentElement("beforeend", newtitulo);
            newdiv.addEventListener("animationend", Eliminarhtml);
            newlist.insertAdjacentElement("afterbegin", newdiv);

            document.body.addEventListener("click", seleccionar);
        });

    } else {
        document.getElementById("lista-imagenes").remove()
        newlist = document.createElement("div")
        newlist.setAttribute("id", "lista-imagenes")
        document.body.insertAdjacentElement("beforeend", newlist)
        catalogo.forEach(i => {
            newdiv = document.createElement("div")
            newdiv.setAttribute("class", "imagen")
            newdiv.setAttribute("id", i.id)
            newdiv.setAttribute("categoria", i.categoria)
            newimg = document.createElement("img")
            newimg.setAttribute("src", i.src)
            newtitulo = document.createElement("p")
            newtitulo.textContent = i.titulo
            newdiv.insertAdjacentElement("beforeend", newimg);
            newdiv.insertAdjacentElement("beforeend", newtitulo);
            newdiv.addEventListener("animationend", Eliminarhtml);
            newlist.insertAdjacentElement("afterbegin", newdiv);

            document.body.addEventListener("click", seleccionar);
        });
    }
}
function Modificar(src, titulo) {
    let modificar = document.querySelectorAll(".imagenseleccionada")[0];

    if (src != "") {
        modificar.firstElementChild.removeAttribute("src");
        modificar.firstElementChild.setAttribute("src", src);
    }
    else {
        src = modificar.firstElementChild.src;
    }
    if (titulo != "") {
        modificar.lastElementChild.textContent = titulo;
    } else {
        titulo = modificar.lastElementChild.textContent;
    }
    let zapa = {
        id: modificar.id,
        src: src,
        titulo: titulo,
        categoria: modificar.getAttribute("categoria")
    }
    indice1 = catalogo.findIndex(obj => obj.id == parseInt(modificar.id));
    //indice = catalogo.map(e => e.id).indexOf(parseInt(modificar.id));
    catalogo.splice(indice1, 1, zapa);

}
function CambioCategoria(){
    let modcat = document.querySelectorAll(".imagenseleccionada");
    modcat.forEach(function (e) {
        id = e.firstElementChild.parentElement.getAttribute("id");
        indice = catalogo.map(e => e.id).indexOf(parseInt(id));
        

        catalogo[indice].categoria = document.getElementsByTagName("select").miSelect.value;
        e.removeAttribute('categoria');
        e.setAttribute("categoria", document.getElementsByTagName("select").miSelect.value);
    });


}
function Añadir(url, titulo) {
    let h1 = document.getElementsByTagName("h1")[0];
    if (url == "") {
        h1.textContent = "Mete un url"
        h1.style.color = "red";
    } else {
        h1.textContent = "Victor"

        let lastid = catalogo[catalogo.length - 1].id;
        let categoria = document.getElementsByTagName("select").miSelect.value
        let zapa = {
            id: lastid + 1,
            src: url,
            titulo: titulo,
            categoria: categoria,
        }
        catalogo.push(zapa);
        newdiv = document.createElement("div")
        newdiv.setAttribute("class", "imagen")
        newdiv.setAttribute("id", catalogo[catalogo.length - 1].id)
        newdiv.setAttribute("categoria", catalogo[catalogo.length - 1].categoria)
        newimg = document.createElement("img")
        newimg.setAttribute("src", catalogo[catalogo.length - 1].src)
        newtitulo = document.createElement("p")
        newtitulo.textContent = catalogo[catalogo.length - 1].titulo
        newdiv.insertAdjacentElement("beforeend", newimg);
        newdiv.insertAdjacentElement("beforeend", newtitulo);
        newdiv.addEventListener("animationend", Eliminarhtml);
        newlist.insertAdjacentElement("afterbegin", newdiv);
        newdiv = document.createElement("div")
        newdiv.setAttribute("class", "imagen");
        newdiv.addEventListener("animationend", Eliminarhtml);
        document.getElementsByClassName("imagen")[0].insertAdjacentElement("beforebegin", newdiv)
        
    }
}

function Eliminar() {
    let eliminar = document.querySelectorAll(".imagenseleccionada");
    eliminar.forEach(function (e) {
        e.classList.add("imageneliminada");
    });
}

function Eliminarhtml() {
    let eliminar = document.querySelectorAll(".imageneliminada");
    eliminar.forEach(function (e) {
        id = e.firstElementChild.parentElement.getAttribute("id");

        indice = catalogo.map(e => e.id).indexOf(parseInt(id));
        catalogo.splice(indice, 1);
        document.getElementById("lista-imagenes").removeChild(e);
    });
    // storageImagen = localStorage.setItem("catalogo", JSON.stringify(catalogo));
    // catalogo = JSON.parse(localStorage.getItem("catalogo", JSON.stringify(catalogo)));
}
function Guardar() {
    storageImagen = localStorage.setItem("catalogo", JSON.stringify(catalogo));
    catalogo = JSON.parse(localStorage.getItem("catalogo", JSON.stringify(catalogo)));
}
function seleccionar(e) {
    if (e.target.tagName == "IMG") {
        if (e.ctrlKey) {
            e.target.parentNode.classList.toggle("imagenseleccionada");
        }
        else {
            let seleccionar = document.querySelectorAll(".imagenseleccionada");
            seleccionar.forEach(function (e) {
                e.classList.remove("imagenseleccionada");
            });
            e.target.parentNode.classList.add("imagenseleccionada");
        }
    }
    else if (e.target.tagName != "INPUT" && e.target.tagName != "SELECT") {
        let seleccionar = document.querySelectorAll(".imagenseleccionada");
        seleccionar.forEach(function (e) {
            e.classList.remove("imagenseleccionada");
        });
    }
    let seleccionar = document.querySelectorAll(".imagenseleccionada");
    var des = document.getElementById("desaparecer");
    if (seleccionar.length > 1) {

        des.style.display = "none";
    }
    else {
        des.style.display = "block";
    }

}
//añadir las imagenes sobrerecarga