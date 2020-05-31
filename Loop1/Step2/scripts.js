/* Dividir todo en pasos 

Sistema de Tabs:

Al clickear en un elemento LI:
1) Se borran los Active de todos los LI
2) Se borran los active de todas las Tabs
3) Se añade un Active al elemento LI que se clickeó
4) Se añade un active a la tab que se clickeó

Al tipear un index y clickear el button:
1) Verificar si el valor del input realmente existe 
2) Si existe: 
    - Se borran los Active de todos los LI
    - Se borran los active de todas las Tabs
    - Se añade un Active al elemento LI que se clickeó
    - Se añade un active a la tab que se clickeó
3) Si no existe: 
    Arrojar un alert que diga: "Index inválido"

*/

const listElements = Array.from(document.querySelectorAll('li'));
const tabs = Array.from(document.querySelectorAll('.tab'));
const indexes = tabs.map(tab => tab.dataset.index);
const button = document.querySelector("button");
const input=document.querySelector("input");

function setTabBySelect(e){
    removeAllActives();
    e.currentTarget.classList.add('active');
    tabs.forEach(tab => tab.dataset.index == e.currentTarget.dataset.index ? tab.classList.add('active') : "");
}

function setTabByInput(e){
    removeAllActives();
    if(indexes.includes(input.value)){
        tabs.forEach(tab => tab.dataset.index == input.value ? tab.classList.add('active') : "");
        listElements.forEach(element => element.dataset.index == input.value ? element.classList.add('active') : "");
    } else{
        alert('Índice inválido');
    }
}

function removeAllActives(){
    tabs.forEach(tab => tab.classList.remove('active'));
    listElements.forEach(element => element.classList.remove('active'));
}

listElements.forEach(element => element.addEventListener('click',setTabBySelect));
button.addEventListener('click',setTabByInput);

