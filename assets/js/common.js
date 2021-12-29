// toggle btn js 
let toggleBtn = document.querySelector(".toggle__btn svg");
let navlist = document.querySelector(".nav__list");


toggleBtn.addEventListener("click",()=>{
    toggleBtn.classList.toggle("cross");
    navlist.classList.toggle("show");
});