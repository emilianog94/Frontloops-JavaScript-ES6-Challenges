/*  Dividir todo en pasos:
1) Debo obtener TODOS los steps. Por cada step obtengo: 
    - Botón Siguiente
    - Botón Atrás

Debería tener un array global con la cantidad de pasos
[0,1,2] 

Entonces, si yo clickeo en Siguiente cuando estoy en Array[0], me manda al Array[1] de cada

2) Debo vincular cada step con su respectivo LI.item
3) Crear un event listener para cada botón. 
Si clickeo en Botón Next, avanzar al step siguiente y actual = Posicion+1
Si clickeo en el botón Back, volver al Step anterior  y actual es Posicion-1

Por cada evento debo: 
    - Cambiar estilo de LI
    - Mostrar el nuevo contenido
    - Quitar el contenido anterior
*/

let stepQuantity = document.querySelectorAll('.step-selector .item').length;
let stepsList = Array.from(document.querySelectorAll('.step-selector .item'));
let stepsContent = Array.from(document.querySelectorAll('.steps .step'));
let currentStep = 0;

stepsContent.forEach(content => getButtons(content));
stepsList.forEach( (stepItem,index) => {
    stepItem.addEventListener('click', function(e){
        if(index == currentStep + 1){
            goNext(e);
        } else if(index == currentStep - 1){
            goBack(e);
        }
    });
})


function getButtons(content){
    if(content.querySelector('button[role=back]')){
        const backButton = content.querySelector('button[role=back]');
        backButton.addEventListener('click',goBack);
    }
    const nextButton = content.querySelector('button[role=next]');
    nextButton.addEventListener('click',goNext);
}

function goNext(e){
    stepsContent[currentStep].classList.remove('step-active');
    currentStep++;

    if(currentStep == 3){
        stepsContent[currentStep-1].nextElementSibling.classList.add("step-active");
    }
    else{
        stepsContent[currentStep].classList.add('step-active');
        stepsList[currentStep].classList.add('item-active');
    }

};

function goBack(e){
    stepsContent[currentStep].classList.remove('step-active');
    stepsList[currentStep].classList.remove('item-active');
    currentStep--;
    stepsContent[currentStep].classList.add('step-active');
    stepsList[currentStep].classList.add('item-active');
};


