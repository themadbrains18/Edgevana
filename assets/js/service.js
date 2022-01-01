
'use strict';

window.addEventListener('load', () => {
  let bannerSvg = document.querySelector(".service__banner__img svg");
  bannerSvg.classList.add('active');
});

/* Service Tabs Js */
let tabs = document.querySelectorAll(".tabs__button");

let ServiceBannerImg = document.querySelector(".service__banner__img");

for(let i in tabs){
  if(tabs.length >= i){
      
      tabs[i].setAttribute("value",i);
      tabs[i].addEventListener("click",()=>{
        ServiceBannerImg.setAttribute("style","display:none;");
        let activeTab = document.querySelector(".tabs__button.active");
        if(activeTab){
          activeTab.classList.remove("active");  
          
        }
        tabs[i].classList.add("active");
        let tabSelected = tabs[i].getAttribute("value");
        let tabsImg = document.querySelectorAll(`.tabs__item`);
        let tabsImgActive = document.querySelector(`.tabs__item.active`);
        if(tabsImgActive){
          tabsImgActive.classList.remove("active");  
        }
        tabsImg[tabSelected].classList.add("active");
      });  
  }
}

/* Faq Js */
window.addEventListener('DOMContentLoaded', function() {
    let faqQues = document.querySelectorAll('.faq__ques');
    function removeClass(){
        for (let i of faqQues) {
            i.classList.remove("active");
            i.nextElementSibling.setAttribute("style", `height: 0px;opacity:0;`);
        }
    }
    for (let i of faqQues) {
        i.addEventListener('click', ()=>{
            if(i.classList.contains("active")){
                removeClass();    
            }else{
                removeClass();    
                let height = i.nextElementSibling.scrollHeight;
                i.classList.add("active");
                i.nextElementSibling.setAttribute("style", `height: ${height}px;opacity:1;`);
            }
        });
    }
});


/* Industries Tabs */ 
window.addEventListener('DOMContentLoaded', function() {
  let industriesTabs = document.querySelectorAll(".industries__tabs__button");
  
  function removeClass(){
    for (let i of industriesTabs) {
        i.classList.remove("active");
        i.nextElementSibling.setAttribute("style", `height: 0px;opacity:0;`);
    }
}
for (let i of industriesTabs) {
    i.addEventListener('click', ()=>{
        if(i.classList.contains("active")){
            removeClass();    
        }else{
            removeClass();    
            i.classList.add("active");
            let height = i.nextElementSibling.scrollHeight;
            i.nextElementSibling.setAttribute("style", `height: ${height}px;opacity:1;`);
        }
    });
}
});