/* Bottom Tabs Line Js */


// let bottomTabLine = document.querySelectorAll(".bottom__line");
// for(let l of bottomTabLine){
//     l.setAttribute("style", `left: ${100/tabsHeaderLenth}%;`);
// }




/* News Room Tabs Js */
window.addEventListener('load',()=>{
    let tabs = document.querySelectorAll(".news__tabs");
    let bottomTabLine = document.querySelector(".bottom__line");
    let setLineWidth = (i=0)=>{
        // bottomTabLine.setAttribute('style',`width: ${tabs[0].offsetWidth}px;`)
    }
    setLineWidth();
    for(let i in tabs){
    if(tabs.length >= i){
        tabs[i].setAttribute("value",i);
        tabs[i].addEventListener("click",()=>{
            let activeTab = document.querySelector(".news__tabs.active");
            if(activeTab){
            activeTab.classList.remove("active");  
            }
            tabs[i].classList.add("active");
            let tabSelected = tabs[i].getAttribute("value");
            
            
            setLineWidth(i);
            let total = tabs[0].parentElement.offsetWidth/ tabs.length;
            bottomTabLine.setAttribute("style", `left: ${total * i+15}px;`);

            let tabsImg = document.querySelectorAll(`.news__room__tabs__Content`);
            let tabsImgActive = document.querySelector(`.news__room__tabs__Content.active`);
            if(tabsImgActive){
            tabsImgActive.classList.remove("active");  
            }
            tabsImg[tabSelected].classList.add("active");
        });  
    }
    }

})
/* Feature Stories Slider Cursor Js Code */
    let testimonialSlider = document.querySelector(".feature__stories");
    var cursor = document.querySelector(".cursor__wrapper");
    testimonialSlider.addEventListener("mousemove", (e) => {
        testimonialSlider.classList.add("mouseenter")
        cursor.setAttribute("style", ` top: ${e.y - 42}px; left: ${e.x - 49}px;`);
    })
    testimonialSlider.addEventListener("mouseleave", (e) => {
        testimonialSlider.classList.remove("mouseenter")
    })

    /* Achive More Card */
    let achiveMoreBtn = document.querySelector(".sec__heading.vieew__archive__btn");
    let achiveMoreCrd = document.querySelector(".more__news__room__card.achive__more__Crd");
    achiveMoreBtn.addEventListener("click",()=>{
        achiveMoreCrd.setAttribute("style","display:grid;");
        achiveMoreBtn.setAttribute("style","display:none;");
    })  