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



    /* Testimonial Slider Cursor Js Code */

    let testimonialSlider = document.querySelector(".testimonial__list");
    var cursor = document.querySelector(".cursor");
    testimonialSlider.addEventListener("mousemove", (e) => {
        testimonialSlider.classList.add("mouseenter")
        cursor.setAttribute("style", ` top: ${e.pageY - 42}px; left: ${e.pageX - 49}px;`);
    })

    testimonialSlider.addEventListener("mouseout", (e) => {
        testimonialSlider.classList.remove("mouseenter")
    })

    //slider swipe
    const swiper = new Swiper('.trusted__logo__list', {
        slidesPerView: 5,
        centeredSlides: true,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        breakpoints: {
            320: {
                slidesPerView: 3,
            },
            640: {
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
        spaceBetween: 300,
        loop: false,
        autoplay: true,
        mousewheel: {
            releaseOnEdges: true,
          },
    });


    // Mobile Responsive Slider
    const mediaQuery = window.matchMedia('(max-width: 1200px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        var mobileSlider = new Swiper(".mySwiper", {
            centeredSlides: true,
            slidesPerView: 1,
            loop: true,
        });
    }

})


window.addEventListener("scroll", function (event) {

    var vectorline = document.getElementsByClassName("connect_hero_global_map");
    var vectorlineelement = vectorline[0];
    var elementPositionVector = vectorlineelement.getBoundingClientRect().top;
    if (elementPositionVector < 100 && elementPositionVector > -400) {
        vectorlineelement.classList.add('is-vector-visible');
    }
    else {
        vectorlineelement.classList.remove('is-vector-visible');
    }

    var d = document.getElementsByClassName("globel__sec__img");
    var element = d[0];
    var elementPosition = element.getBoundingClientRect().top;
    console.log(elementPosition);
    if (elementPositionVector < -100 && elementPosition > 0) {
        element.classList.add('is-visible');
    }
    else {
        element.classList.remove('is-visible');
    }
    // bg__lines
    var belowvectorline = document.getElementsByClassName("bg__lines");
    var belowvectorlineelement = belowvectorline[0];
    var elementPositionBelowVector = belowvectorlineelement.getBoundingClientRect().top;
    if (elementPositionBelowVector < 100 && elementPositionBelowVector > -400) {
        belowvectorlineelement.classList.add('is-vector-visible');
    }
    else {
        belowvectorlineelement.classList.remove('is-vector-visible');
    }

    var dcon = document.getElementsByClassName("deploy__sec__img");
    var elementCon = dcon[0];
    var elementPositionCon = elementCon.getBoundingClientRect().top;
    console.log(elementPositionCon);
    if (elementPositionBelowVector < -60 && elementPositionCon > 0) {
        var linewidth = document.getElementsByClassName("connectline");
        elementCon.classList.add('is-connect-visible');
    }
    else {
        elementCon.classList.remove('is-connect-visible');
    }
    // .is-connect-visible

    // dots__wrapper
    var dots = document.getElementsByClassName("dots__wrapper");
    var elementDots = dots[0];
    var elementPositionDot = elementDots.getBoundingClientRect().top;
    console.log("dots : " + elementPositionDot);
    // if(elementPositionDot<250){
    //     elementDots.classList.add('is-dot-visible');
    // }
    // else{
    //     elementDots.classList.remove('is-dot-visible');
    // }

}, false);



