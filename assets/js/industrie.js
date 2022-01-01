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
            removeClass();    
            let height = i.nextElementSibling.scrollHeight;
            i.classList.add("active");
            i.nextElementSibling.setAttribute("style", `height: ${height}px;opacity:1;`);
        });
    }
});

// faq svg js start
// let svgElement = document.querySelector(".faq__sec .sec__image svg");
// let svgElementPath = document.querySelectorAll(".faq__sec .sec__image svg g path[fill='white']");

// console.log(svgElementPath);
// svgElement.addEventListener("mouseover",()=>{
//     for(let i of svgElementPath){
//         i.classList.add("active")
//     }
// });
// svgElement.addEventListener("mouseleave",()=>{
//     for(let i of svgElementPath){
//         i.classList.remove("active")
//     }
// });


// faq svg js end