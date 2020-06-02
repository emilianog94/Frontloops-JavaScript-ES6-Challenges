/* Dividir todo en pasos 

1) Obtener todos los elementos Input en un Array
2) Creo un event listener para TODOS los elementos con un Foreach
3) Si uno de los elementos es clickeado, entonces setear un valor Random para el resto del array con un foreach nuevo

*/

let switches = Array.from(document.querySelectorAll('input'));
switches.forEach(switchElement => switchElement.addEventListener("click",setRandom));

function setRandom(e){
    switches.forEach(switchElement => {
       if(switchElement != e.currentTarget){
        let random = Math.random() < 0.5;
        switchElement.checked = random;
       }
    });
}