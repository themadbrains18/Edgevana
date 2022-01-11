'use strict';


window.addEventListener('load', () => {
    // /* Testimonial Slider Cursor Js Code */
    let testimonialSlider = document.querySelector(".testimonial__list");
    var cursor = document.querySelector(".cursor__wrapper");
    testimonialSlider.addEventListener("wheel","mousemove", (e) => {
        testimonialSlider.classList.add("mouseenter")
        cursor.setAttribute("style", ` top: ${e.y - 42}px; left: ${e.x - 49}px;`);
    })
testimonialSlider.addEventListener("wheel","mouseleave", (e) => {
        testimonialSlider.classList.remove("mouseenter")
    })

    //slider swipe

    const trustedSwiper = new Swiper('.trusted__logo__list', {
        slidesPerView: 5,
        speed: 300,
        autoplay: true,
        loop: true,
        noSwipingClass: 'swiper-no-swiping',
        resizeReInit: true,
        centeredSlides: true,
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

    setInterval(() => {
        let index_currentSlide = swiper.activeIndex;
        let currentSlide = swiper.slides[index_currentSlide]
    }, 4000);

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
                loop: true,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 8,
            }
        }
    });






    // counter js start
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                //   obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);
    }

    let counterFlag = true;
    window.addEventListener("scroll", () => {
        let counterSec = document.querySelector(".tmb__deploy__sec");
        let rect = counterSec.getBoundingClientRect();
        if (rect.top <= 150) {
            if (counterFlag) {
                counter("count1", 29500, 30000, 1000);
                counter("count2", 0, 107, 2500);
                counterFlag = false;
            }
        }
    });
});