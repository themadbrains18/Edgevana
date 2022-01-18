// toggle btn js 
let toggleBtn = document.querySelector(".toggle__btn svg");
let navlist = document.querySelector(".nav__list");
let body = document.querySelector("body")

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("cross");
  body.classList.toggle("scroll-none");
  navlist.classList.toggle("show");
});

// header js start
let header = document.querySelector(".header");
let oldValue = 0;
window.addEventListener("scroll", () => {
  if (window.scrollY > oldValue) {
    oldValue = window.scrollY;
    // header.classList.remove("show");
    header.setAttribute("style", "top: -100%;transition:0.5s;background-color:#0b0e1e;padding:30px 0;");
  } else {
    oldValue = window.scrollY;
    // header.classList.add("show");
    header.setAttribute("style", "top: 0px;transition:0.5s;background-color:#0b0e1e;padding:30px 0;");
  }
  if (window.innerWidth > 991) {

    if (window.scrollY == 0) {
      header.setAttribute("style", "top: 67px;transition:0.5s;background-color:transparent;padding:0;");
    }
  }
});

// if window is >=992px
if (window.innerWidth >= 992) {
  let dropdown = document.querySelector(".header .nav__item.nav-modifier");
  dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("show");
  });
}
// if window is <=991px
if (window.innerWidth <= 991) {
  window.addEventListener('DOMContentLoaded', function () {
    let dropdown = document.querySelector(".nav__item.nav-modifier");
    dropdown.addEventListener('click', () => {
      if(dropdown.classList.contains("show")){
        dropdown.classList.remove("show")
        let height = dropdown.nextElementSibling.scrollHeight;
        dropdown.nextElementSibling.setAttribute("style", `height:0px;opacity:0;`);
      }else{
        dropdown.classList.add("show")
        let height = dropdown.nextElementSibling.scrollHeight;
        dropdown.nextElementSibling.setAttribute("style", `height: ${height}px;opacity:1;margin-top:20px;`);
      }
      // removeClass(); 
    });
  });
}

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
  // IE Fallback
  function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

  Array.prototype.forEach.call(elementsToShow, function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    }
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

/* Copy Right Dynmic Year */
const CuurentYear = new Date;
let dynmicYear = document.querySelector(".copyright__dynmic__year").innerHTML=CuurentYear.getFullYear();
