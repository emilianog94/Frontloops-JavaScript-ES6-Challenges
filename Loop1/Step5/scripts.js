/* Planteo 

1) Debería seleccionar el elemento a mutar
2) Debería definir un listado de palabras
3) Las palabras dentro del array son elementos iterables. Debería iterar por cada una de sus letras. 
4) Debería hacer un forEach para cambiar el textContent del elemento a mutar, y cad apaso del Foreach agrega una letra.
5) Debería implementar promises para colocar timeouts de forma eficiente

*/

function wait(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}

const h1 = document.querySelector('h1');
const initialText = h1.textContent;
const words = "Design Development Consultancy ";

async function addWord(words){
    await wait(200);
    h1.textContent = initialText;
    for(letter of words){

        if(letter != " "){
            h1.textContent += letter;
            await wait(200);
        }
        else{
            await wait(1000);
            h1.textContent = initialText;
        }

    }  
    addWord(words);
}

addWord(words);

