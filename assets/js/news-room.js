/* News Room Tabs Js */
let NewsRoomTabs = document.querySelectorAll(".news__tabs");

for(let i of NewsRoomTabs){
    i.addEventListener("click",()=>{
        i.classList.add("active")
    })
}


    /* Feature Stories Slider Cursor Js Code */

    let testimonialSlider = document.querySelector(".feature__stories");
    var cursor = document.querySelector(".cursor");
    testimonialSlider.addEventListener("mousemove", (e) => {
        testimonialSlider.classList.add("mouseenter")
        cursor.setAttribute("style", ` top: ${e.pageY - 42}px; left: ${e.pageX - 49}px;`);
    })

    testimonialSlider.addEventListener("mouseleave", (e) => {
        testimonialSlider.classList.remove("mouseenter")
    })
