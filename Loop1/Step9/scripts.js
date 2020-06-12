let sidebar=document.querySelector(".sidebar");

document.addEventListener('scroll',processScroll);

function processScroll(){
   if(document.documentElement.scrollTop > 100) {
       sidebar.classList.add('fixed');
   }
   else{
       sidebar.classList.remove('fixed');
   }

}