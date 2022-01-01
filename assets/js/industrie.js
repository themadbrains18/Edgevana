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