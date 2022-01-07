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

// resource dropdown js start
if (window.innerWidth >= 992) {
  let dropdown = document.querySelector(".nav__item.nav-modifier");

  dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
}
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





// resource dropdown js end



// header js end

// /* Canvs */
// const canvas = document.getElementById("canvas");
// var particles = [];
// var offset = 0;
// // Onclick Multilple Design
// // var geometry = null;
// var cursor = {
//   x: innerWidth/2,
//   y: innerHeight/2
// }

// function setDimentions() {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
// }
// setDimentions();

// addEventListener("resize", () => setDimentions());
// addEventListener("mousemove", (e) => {
//   cursor.x = e.clientX;
//   cursor.y = e.clientY;
// });
// // Onclick Multilple Design
//     // addEventListener("click", () => {
//     //   geometry = Math.floor(Math.random() * 20);
//     // });
// // addEventListener("touchmove", (e) => {
// //     e.preventDefault();
// //     cursor.x = e.touches[0].clientX;
// //     cursor.y = e.touches[0].clientY;
// //     console.log(e)
// //   },
// //   { passive: false }
// // );

// function particle(x, y, width, color, speed) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.color = color;
//   this.speed = speed;
//   this.angle = Math.random() * Math.PI * 2;
//   this.t = Math.random() * 250;
//   this.rotate = () => {
//     const initialPoint = {
//       x: this.x,
//       y: this.y,
//     };

//     // Onclick Multilple Design
//     // this.speed = speed + (geometry ? x/geometry : 0);

//     this.angle += this.speed;
//     this.x = cursor.x + Math.cos(this.angle) * this.t;
//     this.y = cursor.y + Math.sin(this.angle) * this.t;
//     ctx.beginPath();
//     ctx.moveTo(initialPoint.x, initialPoint.y);
//     ctx.lineTo(this.x, this.y);
//     ctx.lineWidth = this.width;
//     ctx.strokeStyle = this.color;
//     ctx.stroke();
//   }
// }

// function generateColor() {
//   let hexSet = "01234567fsdfdF";
//   let finalHexString = "#";
//   for (let i = 0; i < 6; i++) {
//     finalHexString += hexSet[Math.ceil(Math.random() * 15)];
//   }
//   return finalHexString;
// }

// function generateParticles(n) {
//   for(var i = 0; i <10; i++) {
//     particles[i] = new particle(canvas.width/2, canvas.height/2, 200, generateColor(), 0.02);
//   }
// }
// generateParticles(0);

// function animate() {
//   ctx = canvas.getContext('2d');
//   ctx.save();
//   offset++;
//   ctx.fillStyle = "rgba(0,0,0,0.05)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   particles.forEach((particle) => particle.rotate());
//   requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);



// const canvas = document.createElement('canvas');
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
// const ctx = canvas.getContext("2d");
// let mouseX, mouseY ,numberCounte = 0;
// const maxCursorArea = canvas.width / 3;
// let numberArr = [];
// const colursArry = [
//     "#78F0FF",
//     "#3C82FF",
//     "#00B3EB",
//     "#A723DE",
//     "#FF0C6F",
// ]
// canvas.setAttribute('style', `position: fixed;top:0px;left:0px;z-index:-1;width:100%;height:100%;`);



// window.addEventListener('mousemove',(e)=>{
//     mouseX = e.x;
//     mouseY = e.y;
// });

// function AddNumber(x,y,h,w,dx,dy){
//     this.x = x;
//     this.y = y;
//     this.h = h;
//     this.w = w;
//     this.dx = dx;
//     this.dy = dy;
//     this.color = colursArry[Math.floor(Math.random() * colursArry.length)];
//     this.font = `${(Math.random() * 15) + 7}px ABC Diatype Trial`;

//     this.draw = ()=>{
//         ctx.font = this.font;
//         ctx.fillStyle = this.color;
//         ctx.fillText(Math.floor(Math.random() * 300), this.x, this.y);
//     }
//     this.update = ()=>{

//         if((this.y + this.h) > canvas.height || (this.y) < 0){
//             this.dy = -this.dy;
//         }
//         if((this.x + this.w) > canvas.width || (this.x) < 0){
//             this.dx = -this.dx;
//         }

//         if(mouseX - this.x < maxCursorArea && mouseX - this.x > -maxCursorArea && mouseY - this.y < maxCursorArea && mouseY - this.y > -maxCursorArea){
//             if(mouseX > this.x ){
//                 if(this.dx < 0){
//                     this.x -= this.dx;
//                 }else{
//                     this.x += this.dx;
//                 }
//             }
//             else{
//                 if(this.dx > 0){
//                     this.x -= this.dx;
//                 }else{
//                     this.x += this.dx;
//                 }
//             }

//             if(mouseY > this.y ){
//                 if(this.dy < 0){
//                     this.y -= this.dy;
//                 }else{
//                     this.y += this.dy;
//                 }
//             }
//             else{
//                 if(this.dy > 0){
//                     this.y -= this.dy;
//                 }else{
//                     this.y += this.dy;
//                 }
//             }

//         }else{
//             this.x += this.dx;
//             this.y += this.dy;
//         }
//         this.draw();
//     }

// }

// const animation = ()=>{
//     requestAnimationFrame(animation);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     numberArr.forEach(elem =>{
//         elem.update();
//     })

// } 

// animation();
// window.addEventListener('resize',()=>{
//     animation();
// })
// document.body.append(canvas);






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