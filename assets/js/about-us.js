"use strict";
// Meet our team slider 
var swiper = new Swiper(".swiper.team-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor: true,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.8,
            spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        }
    }
});
/* Testimonial Slider Cursor Js Code */

let testimonialSlider = document.querySelector(".team-swiper");
var cursor = document.querySelector(".cursor__wrapper");
testimonialSlider.addEventListener("mousemove", (e) => {
    testimonialSlider.classList.add("mouseenter")
    // console.log(e.x);
    cursor.setAttribute("style", ` top: ${e.y - 42}px; left: ${e.x - 49}px;`);
})

testimonialSlider.addEventListener("mouseleave", (e) => {
    testimonialSlider.classList.remove("mouseenter")
})

// counter js start
function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
     current = start,
     range = end - start,
     increment = end > start ? 1 : -1,
     step = Math.abs(Math.floor(duration / range)),
     timer = setInterval(() => {
      current += increment;
      obj.textContent = current;
      if (current == end) {
       clearInterval(timer);
      }
     }, step);
   }

let counterFlag = true;
window.addEventListener("scroll",()=>{
    let counterSec = document.querySelector(".counter__sec");
    let rect = counterSec.getBoundingClientRect();
    if(rect.top <= 0){
            if(counterFlag){
            counter("count1", 0, 150, 3000);
            counter("count2", 0, 500, 2500);
            counter("count3", 0, 3, 300);
            counter("count4", 0, 888, 3000);
            counterFlag = false;
        }
    }
});
   

