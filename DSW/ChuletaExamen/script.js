// Bubbling . El principio en que se basa el bubbling es el siguiente: cuando un evento ocurre sobre un elemento, primero se ejecuta el manejador de eventos sobre el elemento, luego sobre su padre y finalmente sobre todos los ancestros del elemento ("abuelos", "bisabuelos", etc.).
// Prueba el ejemplo del enlace de la siguiente forma:
// 1. Haz click sobre el elemento "P" ... verás como "P" recibe el evento click, pero también lo hace su padre (el elemento "DIV") y su abuelo (el elemento "FORM".
// 2. Ahora haz click sobre el elemento "DIV" ... verás como "DIV" recibe el evento y también su padre "FORM".
// Diferencias entre event.target y this . event.target es el elemento sobre el que se realiza una acción (por ejemplo un click), mientras que this se refiere al elemento sobre el que se está ejecutando el escuchador/manejador. Tener en cuenta también que this=event.currentTarget
// Fíjate en el ejemplo del enlace:
// 1. Sólo hay definido un escuchador/manejador de eventos para el elemento "FORM"
// 2. Cuando hacemos click en cualquiera de los elementos del ejemplo, se ejecuta el mismo (y único) escuchador/manejador
// 3. ¿En qué elemento this es igual a event.target?
// Capturing . El estándar DOM Events describe 3 fases de propagación de eventos:
// 1. Fase de captura o capturing
// 2. Fase objetivo o target
// 3. Fase bubbling
// En algunos casos (rara vez) nos puede interesar activar la fase de captura
// Prueba el ejemplo que se muestra en el enlace.

// Eventos de animaciones CSS . A una animación CSS le podemos añadir 3 escuchadores/manejadores diferentes:
// 1. animationstart: se ejecuta cuando se inicia la animación
// 2. animationiteration: se ejecuta al comienzo de cada iteración
// 3. animationend: se ejecuta cuando finaliza la animación
// Prueba el ejemplo del enlace
// Eventos de transiciones CSS . A una transición CSS le podemos añadir el escuchador/manejador transitionend.
// Prueba el ejemplo del enlace.

// x.addEventListener("webkitAnimationStart", myStartFunction);
// x.addEventListener("webkitAnimationIteration", myRepeatFunction);
// x.addEventListener("webkitAnimationEnd", myEndFunction);

// // Standard syntax
// x.addEventListener("animationstart", myStartFunction);
// x.addEventListener("animationiteration", myRepeatFunction);
// x.addEventListener("animationend", myEndFunction);

// document.getElementById("myDIV").addEventListener("webkitTransitionEnd", myFunction);

// // Standard syntax
// document.getElementById("myDIV").addEventListener("transitionend", myFunction);

// function myFunction() {
//   this.innerHTML = "transitionend event occured - The transition has completed";
//   this.style.backgroundColor = "pink";
// }

// setTimeout . Nos permite ejecutar una vez una función en un momento posterior, es decir, agendamos la ejecución de una función (pasamos como primer parámetro el nombre de la función) una vez transcurrido un intervalo de tiempo que indicamos como segundo parámetro.
// El resto de parámetros de setTimeout (si los definimos) serán los parámetros de la función que hemos agendado.

// clearTimeout . setTimeout devuelve un identificador que podemos usar para cancelar la ejecución de la función agendada. Para ello debemos llamar a clearTimeout pasándole el identificado devuelto por setTimeout.

// setInterval . Tiene la misma sintaxis que setTimeout...pero la función agendada se ejecuta repetidamente en cada intervalo de tiempo que hayamos especificado en el segundo parámetro. Podemos cancelar la ejecución de la función agendada llamando a clearInterval.

// setTimeout anidados . Otra forma de ejecutar funciones de forma repetida es anidando llamadas a setTimeout, es decir, con llamadas recursivas. Esta forma de realizar llamadas de forma repetitiva es más flexible ya que permite variar los intervalos de tiempo de ejecución en función de las circunstancias. Por ejemplo, necesitamos escribir un servicio que envía una petición a un servidor cada 5 segundos, pero en caso de sobrecarga en el servidor, nos puede interesar modificar los intervalos de peticiones a 10, 15 o 20 segundos.
// Otra ventaja de anidar setTimeout en lugar de utilizar setInterval, es que anidando setTimeout se garantiza que el delay (segundo parámetro) no varía y es fijo.

// Zero delay . Otro caso de uso es utilizar delay=0, es decir, setTimeout(func, 0) ó setTimeout(func). Esto hace que se agende la ejecución de la función tan pronto como sea posible.

// setTimeout(sayHi, 1000);
// let timerId = setTimeout(...);
// clearTimeout(timerId);
// let timerId = setInterval(() => alert('tick'), 2000);
// let i = 1;
// setInterval(function() {
//   func(i++);
// }, 100);

//subir para abajo
// #arrowTop::before {
//     content: '▲';
//   }

// </style>
// <meta charset="utf-8">
// </head>

// <body>

// <div id="matrix">
//   <script>
//     for (let i = 0; i < 2000; i++) document.writeln(i)
//   </script>
// </div>

// <div id="arrowTop"></div>

// <script>
//   // ... your code ...
// </script>

//Recarga de imagenes
// <script>
// /**
//  * Tests if the element is visible (within the visible part of the page)
//  * It's enough that the top or bottom edge of the element are visible
//  */
// function isVisible(elem) {
//   // todo: your code
// }

// function showVisible() {
//   for (let img of document.querySelectorAll('img')) {
//     let realSrc = img.dataset.src;
//     if (!realSrc) continue;

//     if (isVisible(img)) {
//       // disable caching
//       // this line should be removed in production code
//       realSrc += '?nocache=' + Math.random();

//       img.src = realSrc;

//       img.dataset.src = '';
//     }
//   }

// }

// window.addEventListener('scroll', showVisible);
// showVisible();
// </script>