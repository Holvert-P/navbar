
const animation =document.querySelector('.navbar');
const button=document.querySelector('.container__button');
const navbar__menu=document.querySelector('.container__menu');


button.addEventListener('click',()=>{
 animation.classList.toggle('navbar__animation');
   navbar__menu.classList.toggle('animation__menu');
   button.classList.toggle('animation__button')
})