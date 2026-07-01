const hamburger=document.querySelector('.hamb');const menu=document.querySelector('.menu');if(hamburger&&menu){hamburger.addEventListener('click',()=>menu.classList.toggle('open'));}
const year=document.querySelector('#year');if(year){year.textContent=new Date().getFullYear();}
