/* Dividir todo en pequeños problemas:

Debo almacenar en una variable todos los botones y el select. 
Una vez almacenados, les puedo correr un eventListener que haga listen a:
- Cuando se clickea un botón
- Cuando se selecciona una opción.

Caso 1: Cuando se clickea un botón: 
- Se le saca la clase active al resto de los botones
- Se le agrega la clase active al botón clickeado
- Se toma el valor del atributo data-value del botón clickeado 
- Seteo el value del Select al value del atributo obtenido en el paso anterior

Caso 2: Cuando se selecciona una opción
- Se toma el value de la opción clickeada
- Se le saca la clase active al resto de los botones
- Se le pone la clase active al botón clickeado

*/

// CAMPOS
const buttons=Array.from(document.querySelectorAll("button"));
const select = document.querySelector("select");

// FUNCIONES
removeClasses = () =>{
    buttons.forEach( button => button.classList.remove('active'));
}

buttonClick = e =>{
    removeClasses();
    e.currentTarget.classList.add('active');
    select.value = e.currentTarget.dataset.val;
}

selectClick = e =>{
    removeClasses();
    buttons.forEach(button => button.dataset.val == e.currentTarget.value ? button.classList.add('active') : "");
}

// EVENTOS
buttons.forEach( button => button.addEventListener("click",buttonClick));
select.addEventListener("change",selectClick);

