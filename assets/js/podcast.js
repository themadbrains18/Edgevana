/* Podcast Js */
'use strict';
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

// ======= play pause btn js start =======

jQuery(document).ready(function(){
    jQuery(".playBtn").hide();
    jQuery(".pauseBtn").click(function(){
        jQuery(".playBtn").show();
        jQuery(".pauseBtn").hide();
    });
    jQuery(".playBtn").click(function(){
        jQuery(".pauseBtn").show();
        jQuery(".playBtn").hide();
    });

});
// ======= play pause btn js end =======