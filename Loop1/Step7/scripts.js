/* Paso a Paso 

Primero, debería seleccionar todos los elementos a animar. 
Todos los elementos deben inicializar sin opacidad. 
Cuando un elemento entre a la vista, debería agregársele la clase visible.

Para eso: 
1) selecciono todos los elementos
2) Creo un objeto intersection observer y le agrego una callback
3) Defino lo que ocurre dentro de la callback
4) Hago un foreach por cada uno de los elementos para hacerles .observe();

*/

const elementos = document.querySelectorAll('.element');

let options = {
    threshold: 0.15,
}
let observer = new IntersectionObserver(animar,options);

elementos.forEach(elemento => observer.observe(elemento));

function animar(elemento){
    elemento[0].target.classList.add('visible');
}