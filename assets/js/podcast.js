if(window.innerWidth <= 767){

    let jpToggle = document.querySelector(".jp-toggles");
    let filterBtn = document.querySelector("#filterBtn");
    filterBtn.addEventListener("click",()=>{
        if(jpToggle.classList.contains("show")){
            jpToggle.classList.remove("show");
        }else{
            jpToggle.classList.add("show");
        }
    });
}
