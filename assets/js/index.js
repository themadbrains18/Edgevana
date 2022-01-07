'use strict';

// /* Testimonial Slider Cursor Js Code */




let testimonialSlider = document.querySelector(".testimonial__list");
var cursor = document.querySelector(".cursor");
testimonialSlider.addEventListener("mousemove", (e) => {
    testimonialSlider.classList.add("mouseenter")
    cursor.setAttribute("style", ` top: ${e.pageY - 42}px; left: ${e.pageX - 49}px;`);
})

testimonialSlider.addEventListener("mouseout", (e) => {
    testimonialSlider.classList.remove("mouseenter")
})
// /* Testimonial Slider Cursor Js Code */

window.addEventListener('load', () => {
    // hero Section Text animation
    let heroHeading = document.querySelector('.hero__heading');
    let heroTxt = document.querySelectorAll('.hero__heading > span');
    let totalChildren = heroHeading.children.length;
    let childrenCount = 1;
    let height = 0;
    var animationClass = [
        "fadeInUp",
        "fadeInLeft",
    ];
    let inerval = setInterval(() => {
        if (heroTxt) {
            for (let i = 1; i < heroHeading.children[childrenCount].children.length; i++) {
                var randomItem = animationClass[Math.floor(Math.random() * animationClass.length)];
                heroHeading.children[childrenCount].children[i].classList.add(randomItem);
            }
        }
        heroHeading.children[childrenCount - 1].classList.remove('active');
        heroHeading.children[childrenCount - 1].setAttribute('style', `transform: translateY(-${childrenCount}00%);`);
        heroHeading.children[childrenCount].classList.add('active');
        heroHeading.children[childrenCount].setAttribute('style', `transform: translateY(-${childrenCount}00%); `);
        childrenCount++;
        if (childrenCount == totalChildren) {
            clearInterval(inerval);
        }
    }, 3000);
    heroTxt.forEach(element => {
        if (height <= element.offsetHeight) {
            height = element.offsetHeight;
        }
    });
    heroHeading.setAttribute('style', `height: ${height}px;`);



    let testimonialSlider = document.querySelector(".testimonial__list");
    var cursor = document.querySelector(".cursor__wrapper");
    testimonialSlider.addEventListener("mousemove", (e) => {
        testimonialSlider.classList.add("mouseenter")
        // console.log(e.x);
        cursor.setAttribute("style", ` top: ${e.y - 42}px; left: ${e.x - 49}px;`);
    })
    
    testimonialSlider.addEventListener("mouseleave", (e) => {
        testimonialSlider.classList.remove("mouseenter")
    })

    //slider swipe
    
    const swiper = new Swiper('.trusted__logo__list', {
        slidesPerView: 5,
        speed: 800,
        autoplay:true,
        grabCursor:true,
        loop: true,
        resizeReInit: true,
        slidesPerView: 'auto',
        centeredSlides  : true,
        breakpoints: {
            310: {
                slidesPerView: 3,

            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            },
        },
    });

    const swipertestimonial = new Swiper('.testimonial__list', {
        slidesPerView: 1,
        centeredSlides: true,
        autoHeight: true,
        spaceBetween: 300,
        loop: false,
        // autoplay: true,
        parallax: true,
        mousewheel: {
            releaseOnEdges: true,
        },
        speed: 800,
        // autoplay: true,
    });


    // Mobile Responsive Slider
    const mediaQuery = window.matchMedia('(max-width: 1200px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        var mobileSlider = new Swiper(".mySwiperInfocard", {
            centeredSlides: true,
            freeMode: true,
            slidesPerView: 1,
            loop: true,
        });
    }

})

// banner logo slider
var swiper = new Swiper(".logo__swiper", {
    slidesPerView: 8,
    autoplay: {
      delay: 1500,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // when window width is >= 575px
        575: {
          slidesPerView: 4,
          loop:true,
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 8,
        }
    }
});





window.addEventListener("scroll", function (event) {

    // var vectorline = document.getElementsByClassName("connect_hero_global_map");
    // var vectorlineelement = vectorline[0];
    // var elementPositionVector = vectorlineelement.getBoundingClientRect().top;
    // if (elementPositionVector < 100 ) {
    //     vectorlineelement.classList.add('is-vector-visible');
    // }
    // else {
    //     vectorlineelement.classList.remove('is-vector-visible');
    // }

    // var d = document.getElementsByClassName("globel__sec__img");
    // var element = d[0];
    // var elementPosition = element.getBoundingClientRect().top;
    // console.log(elementPosition);
    // if (elementPositionVector < -100 && elementPosition > 0) {
    //     element.classList.add('is-visible');
    // }
    // else {
    //     element.classList.remove('is-visible');
    // }
    // // bg__lines
    // var belowvectorline = document.getElementsByClassName("bg__lines");
    // var belowvectorlineelement = belowvectorline[0];
    // var elementPositionBelowVector = belowvectorlineelement.getBoundingClientRect().top;
    // if (elementPositionBelowVector < 100 && elementPositionBelowVector > -400) {
    //     belowvectorlineelement.classList.add('is-bgvector-visible');
    // }
    // else {
    //     belowvectorlineelement.classList.remove('is-bgvector-visible');
    // }

    // var dcon = document.getElementsByClassName("deploy__sec__img");
    // var elementCon = dcon[0];
    // var elementPositionCon = elementCon.getBoundingClientRect().top;
    // console.log(elementPositionCon);
    // if (elementPositionBelowVector < -60 && elementPositionCon > 0) {
    //     var linewidth = document.getElementsByClassName("connectline");
    //     elementCon.classList.add('is-connect-visible');
    // }
    // else {
    //     elementCon.classList.remove('is-connect-visible');
    // }
    // .is-connect-visible

}, false);


// counter js start
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
    let counterSec = document.querySelector(".tmb__deploy__sec");
    let rect = counterSec.getBoundingClientRect();
    if(rect.top <= 150){
            if(counterFlag){
            counter("count1", 29500, 30000, 2000);
            counter("count2", 0, 107, 2500);
            counterFlag = false;
        }
    }
});
   