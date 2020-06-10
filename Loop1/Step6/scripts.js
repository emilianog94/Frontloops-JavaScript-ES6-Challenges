const container = document.getElementById('container');
const inner = document.getElementById('inner');
        
container.addEventListener('mouseover',handleMouseOver);
container.addEventListener('mouseleave',handleMouseLeave);
container.addEventListener('mousemove',handleMouseMove);


function handleMouseOver(e){
    console.log("acabo de entrar");
    console.log(e);
}

function handleMouseLeave(e){
    console.log("Me fui");
    let estilo=`rotateY(0deg)`;
    inner.style.transform = estilo;
}

function handleMouseMove(e){
  console.log(`Eje X : ${e.offsetX}`);
  


  if(e.offsetX < (inner.offsetWidth / 2)){
    let numberX = e.offsetX / 20;
    let estilo=`rotateY(${numberX}deg)`;
    inner.style.transform = estilo;
  } 
  else{
    let numberX = e.offsetX / 80;
    let estilo=`rotateY(-${numberX}deg)`;
    inner.style.transform = estilo;
  }

  // console.log(`Eje Y : ${e.offsetY}`);
}


/*
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  inner.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;

*/