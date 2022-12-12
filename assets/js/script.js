const handBurgerBtn = document.querySelector(".hamburgerMenu");
const navHandBurger= document.querySelector(".navBurger");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
/*function navHandBurgerAction() {
    
}*/

document.querySelector(".hamburgerMenu").addEventListener('click',()=>{
    
    navHandBurger.classList.toggle('menuActive');
    close.classList.toggle('on');
    open.classList.toggle('off');
} );
