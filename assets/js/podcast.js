/* Podcast Js */
'use strict';

// let podcastBtndetail = document.querySelector(".watch-now");
// podcastBtndetail.addEventListener("click",()=>{
//     podcastBtndetail.classList.toggle("active");
// })
// filter button js start
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

// load more btn js start
let loadBtn  = document.querySelector("#loadMoreBtn");
let showCards  = document.querySelectorAll(".episode__inner.episode__modifier");


loadBtn.addEventListener("click",()=>{
    for(let i of showCards){
        i.style.display="flex";
    }
});