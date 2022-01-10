/* Faq Js */
window.addEventListener('DOMContentLoaded', function() {
    let faqQues = document.querySelectorAll('.faq__ques');
    let faqQuesactive = document.querySelector('.faq__ques.active');
    let heightt = faqQuesactive.nextElementSibling.scrollHeight;
    faqQuesactive.nextElementSibling.setAttribute("style", `height: ${heightt}px;opacity:1;`);
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
// faq svg js end