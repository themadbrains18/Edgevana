// toggle btn js 
let toggleBtn = document.querySelector(".toggle__btn svg");
let navlist = document.querySelector(".nav__list");

toggleBtn.addEventListener("click",()=>{
    toggleBtn.classList.toggle("cross");
    navlist.classList.toggle("show");
});

// header js start
let header = document.querySelector(".header");
let oldValue = 0;
window.addEventListener("scroll",()=>{
    if(window.scrollY > oldValue){
        oldValue=window.scrollY;
        // header.classList.remove("show");
        header.setAttribute("style" ,"top: -100%;transition:0.5s;background-color:#0b0e1e;padding:30px 0;");
    }else{
        oldValue=window.scrollY;
        // header.classList.add("show");
        header.setAttribute("style" ,"top: 0px;transition:0.5s;background-color:#0b0e1e;padding:30px 0;");
    }
    if (window.innerWidth > 991) { 
        
        if(window.scrollY == 0){
            header.setAttribute("style" ,"top: 67px;transition:0.5s;background-color:transparent;padding:0;");
        }
    }
});
// header js end