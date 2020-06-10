/* Division en Pasos 

1) Selecciono los botones
2) Al clickear en un botón, traer su correspondiente sidebar con una animación
3) Bloquear el fondo para que no pueda ser clickeado 
4) Al clickear en el boton interno de la sidebar, cerrarla

*/

const overlay = document.querySelector(".overlay");
const closeButtons = document.querySelectorAll('button[role=close]');
const openButtons = document.querySelectorAll('button[role=open]');
const bars= document.querySelectorAll('.bar');

openButtons.forEach(button => button.addEventListener('click',openBar))
closeButtons.forEach(button => button.addEventListener('click',closeBar))

function openBar(e){
    bars.forEach(bar => bar.classList.contains(`${e.currentTarget.dataset.name}`) ? bar.classList.add('active') : "");
    overlay.classList.add('active');
}

function closeBar(){
    overlay.classList.remove('active');
    bars.forEach(bar => bar.classList.remove('active'));
}